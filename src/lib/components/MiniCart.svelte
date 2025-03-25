<script lang="ts">
    import { goto } from "$app/navigation";
	import { cart } from "$lib/store.svelte";
    import { Minus, Plus } from "svelte-radix";
</script>

<div class="dropdown dropdown-end">
	<div tabindex="0" role="button" class="btn btn-ghost btn-circle">
		<div class="indicator">
		    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
			{#if cart.itemCount > 0}
			<span class="badge badge-sm indicator-item">{cart.itemCount}</span>
			{/if}
		</div>
	</div>
	<div tabindex="-1" class="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-96 shadow">
		{#if cart.itemCount > 0}
		<div class="card-body spac-y-4">
			{#each cart.items as item}
			<div class="flex outline-1 outline-accent/70 rounded-lg p-2 space-x-4">
				<img src="http://pb.jordanrobo.xyz/api/files/products/{item.product.id}/{item.product.images[0]}" alt={item.product.name} class="h-20 object-cover rounded-md"/>
				<div class="grid justify-items-stretch">
					<div>
						<span class="font-semibold">{item.product.name}</span>
					</div>
					<div class="justify-self-end join mt-2">
						<button onclick={() => cart.decrementQuantity(item.id)} class="btn btn-sm join-item"><Minus class="h-4 w-4" /></button>
						<button class="btn btn-sm join-item">{item.qty}</button>
						<button onclick={() => cart.incrementQuantity(item.id)} class="btn btn-sm join-item"><Plus class="h-4 w-4" /></button>
					</div>
				</div>
				
			</div>
			{/each}
			<div class="flex justify-between">
				<span class="text-lg font-semibold">Total</span>
				<span class="text-lg font-semibold text-info">${cart.totalPrice}</span>
			</div>
			<div class="card-actions">
				<button onclick={() => goto('/cart')} class="btn btn-secondary btn-outline btn-block">View Cart</button>
				<button onclick={() => goto('/checkout')} class="btn btn-primary btn-block">Begin Checkout</button>
			</div>
		</div>
		{:else}
		<div class="card-body">
			<span class="text-lg font-bold text-center">Cart is empty</span>
			<div class="card-actions">
				<button onclick={() => goto('/products')} class="btn btn-primary btn-block">View products</button>
			</div>
		</div>
		{/if}
	</div>
</div>