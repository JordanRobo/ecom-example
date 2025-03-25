<script lang="ts">
	import type { PageProps } from "./$types";
	import ProductCard from "$lib/components/ProductCard.svelte";
	// import { DLManager } from "xp-datalayer-manager";
	import { onMount } from "svelte";
    import type { Product } from "$lib/types";

	let { data }: PageProps = $props();

	// @ts-ignore
	let products: Product[] = data.products;

	// onMount(() => {
	// 	DLManager.productListingView();
	// });
</script>

<div class="flex flex-col mx-auto max-w-[1200px] my-12">
	<div>
		<h2 class="text-4xl font-bold mb-12 text-center">Our Products</h2>
	</div>

	<div class="grid place-items-center grid-cols-3 gap-4">
		{#each products as product}
			<ProductCard product={product} />
		{/each}
	</div>
</div>
