export interface Site {
    name: string;
    experience: string;
    currency: string;
    division: string;
    domain: string;
    env: string;
    version: string;
}

export interface Page {
    type: string;
    action: string;
    path: string;
    title: string;
    url: string;
    list_name?: string;
}

export interface User {
    user_state: string;
    login_status: string;
    uem_hashed: string;
    session_id: string;
    divison_id: string;
}

export interface Default {
    site?: Site;
    page?: Page;
    user?: User;
    error?: any;
}

export interface Cart {
    cartId: string;
    quoteId: string;
    cart_quantity: number;
    cart_total: number;
}

export interface Size {
    id: string;
    name: string;
}

export interface SizeExpand {
    id: string;
    product_id: string;
    size_id: string;
    stock_qty: number;
    expand: {size_id: Size};
}

export interface ProductExpand {
    available_sizes: SizeExpand[];
}

export interface Product {
    id: string;
    available_size?: string[];
    barcode?: string;
    brand: string;
    category: string;
    child_sku: string;
    color: string;
    discount: number;
    expand: ProductExpand;
    feature: string[];
    full_price: number;
    gender: string;
    is_markdown: boolean;
    listed_price: number;
    model: string;
    name: string;
    parent_category: string;
    parent_sku: string;
    rating: number;
    reward_points?: number;
    size?: string;
    sku_available?: boolean;
    sku_by_size?: string;
    speciality?: string;
    sport?: string;
    story?: string;
    images: string[];
    description: string;
}

export interface CartItems {
    id: string;
    product: Product;
    qty: number;
}