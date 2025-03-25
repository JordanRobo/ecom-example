<script lang="ts">
    import type { PageProps } from "./$types";
    import type { Product } from "$lib/types";
    import { cart } from "$lib/store.svelte";

    let { data }: PageProps = $props();

    // @ts-ignore
    const product: Product = data.product;
</script>



<main class="container max-w-[1200px] mx-auto my-8">
    <div class="breadcrumbs text-sm">
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li>{product.name}</li>
    </ul>
    </div>
    <div class="grid grid-cols-2 gap-8 mt-4">
        <div>
            <img src="http://pb.jordanrobo.xyz/api/files/products/{product.id}/{product.images[0]}" alt={product.name} class="object-cover rounded-lg outline-1 outline-accent/70" />
            <div class="grid grid-cols-3 gap-2 my-2">
                <div><img src="http://pb.jordanrobo.xyz/api/files/products/{product.id}/{product.images[1]}" alt={product.name} class="object-cover rounded-lg outline-1 outline-accent/70" /></div>
                <div><img src="http://pb.jordanrobo.xyz/api/files/products/{product.id}/{product.images[2]}" alt={product.name} class="object-cover rounded-lg outline-1 outline-accent/70" /></div>
                <div><img src="http://pb.jordanrobo.xyz/api/files/products/{product.id}/{product.images[3]}" alt={product.name} class="object-cover rounded-lg outline-1 outline-accent/70" /></div>
            </div>
        </div>
        <div class="space-y-2">
            <h2 class="text-2xl font-bold opacity-50">{product.brand}</h2>
            <h1 class="text-4xl font-bold">{product.name}</h1>
            {#if product.is_markdown}
            <div class="flex gap-4">
                <p class="text-3xl line-through text-red-400">${product.full_price}</p>
                <p class="text-3xl font-semibold">${product.listed_price}</p>
            </div>  
            {:else}
                <p class="text-3xl">${product.listed_price}</p>
            {/if}
            <div class="flex gap-4 mt-8">
                {#each product.expand.available_sizes as size}
                    <button class="btn btn-outline btn-secondary">{size.expand.size_id.name}</button>
                {/each}
            </div>
            <button class="btn btn-outline btn-primary w-3/4 mt-8" onclick={() => cart.add(product)}>Add To Cart</button>

            <div class="divider"></div>

            <h2 class="text-2xl font-bold mt-8">Description</h2>
            <div class="prose">
                {@html product.description}
            </div>
        </div>
    </div>
</main>
