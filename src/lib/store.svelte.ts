import type { CartItems, Product } from "./types";

class Cart {
    items = $state<CartItems[]>([]);

    // Derived values that automatically update when items change
    totalPrice = $derived(
        this.items.reduce((total, item) =>
            total + (item.product.listed_price * item.qty), 0)
    );

    itemCount = $derived(
        this.items.reduce((count, item) => count + item.qty, 0)
    );

    // Add a product to the cart
    add(product: Product) {
        // Check if the product already exists in the cart
        const existingItem = this.findByProductId(product.id);

        if (existingItem) {
            // If product exists, increment its quantity
            this.incrementQuantity(existingItem.id);
        } else {
            // If product doesn't exist, add it with quantity 1
            const newItem: CartItems = {
                id: this.generateId(),
                product: product,
                qty: 1
            };
            this.items = [...this.items, newItem];
        }
    }

    // Remove a product from the cart by ID
    remove(id: string) {
        this.items = this.items.filter(item => item.id !== id);
    }

    // Update quantity of a product in the cart
    updateQuantity(id: string, quantity: number) {
        if (quantity <= 0) {
            // If quantity is 0 or less, remove the product
            this.remove(id);
            return;
        }

        // Find the product in the cart and update its quantity
        this.items = this.items.map(item =>
            item.id === id ? { ...item, qty: quantity } : item
        );
    }

    // Increment quantity of a product in the cart
    incrementQuantity(id: string) {
        const item = this.items.find(item => item.id === id);
        if (item) {
            this.updateQuantity(id, item.qty + 1);
        }
    }

    // Decrement quantity of a product in the cart
    decrementQuantity(id: string) {
        const item = this.items.find(item => item.id === id);
        if (item) {
            this.updateQuantity(id, item.qty - 1);
        }
    }

    // Find a cart item by product ID
    findByProductId(productId: string): CartItems | undefined {
        return this.items.find(item => item.product.id === productId);
    }

    // Clear the cart
    clear() {
        this.items = [];
    }

    // Generate a unique ID for cart items
    private generateId(): string {
        if (typeof crypto !== 'undefined' && crypto.randomUUID) {
            return crypto.randomUUID();
        }

        // Fallback implementation if crypto.randomUUID is not available
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}

export const cart = new Cart();