<script lang="ts">
	import { goto } from "$app/navigation";
	import { onMount } from "svelte";
	import { DataLayer } from "unified-datalayer";

	onMount(() => {
		DataLayer.page.home();
	});
</script>

<div class="hero bg-base-200 min-h-[620px]">
	<div class="hero-content text-center">
		<div class="max-w-md">
			<h1 class="text-5xl font-bold">We Have So Much Data</h1>
			<p class="py-6">Honestly, there's heaps of data, we don't have enough room for all this data! What are we going to do with all the data?!</p>
			<button onclick={() => goto("/products")} class="btn btn-primary">View Products</button>
		</div>
	</div>
</div>
