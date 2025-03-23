<script lang="ts">
	import type { PageProps } from "./$types";
	import ProductCard from "$lib/components/ProductCard.svelte";
	import { DLManager } from "xp-datalayer-manager";
	import { onMount } from "svelte";

	let { data }: PageProps = $props();

	onMount(() => {
		DLManager.productListingView();
	});
</script>

<div class="flex flex-col mx-auto max-w-[1200px] my-12">
	<div>
		<h2 class="text-4xl font-bold mb-12 text-center">Our Products</h2>
	</div>

	<div class="grid place-items-center grid-cols-3 gap-4">
		{#each data.products as product}
			<ProductCard id={product.id} name={product.name} image={product.images[0]} price={product.listed_price} />
		{/each}
	</div>
</div>
