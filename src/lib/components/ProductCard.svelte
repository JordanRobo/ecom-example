<script lang="ts">
	import type { Product } from "$lib/types";

	interface Props {
		product: Product;
	}

	let { product }: Props = $props();
</script>

<div class="card bg-base-100 shadow-sm w-full max-w-xs">
	<figure>
		<img src="http://pb.jordanrobo.xyz/api/files/products/{product.id}/{product.images[0]}" alt={product.name} class="object-cover w-full h-48" />
	</figure>
	<div class="card-body p-4">
		<span class="text-lg font-bold opacity-40">{product.brand}</span>
		<h2 class="card-title text-lg font-bold flex justify-between items-start">{product.name}</h2>
		<h3 class="text-2xl font-semibold">${product.listed_price}
			{#if product.is_markdown}
			<span class="line-through opacity-40"> ${product.full_price}</span>
			{/if}
		</h3>
		<div class="card-actions flex flex-col gap-3">
			<a href="/products/{product.id}" class="btn btn-primary btn-sm w-full mt-2"> View Details </a>
		</div>
	</div>
</div>
