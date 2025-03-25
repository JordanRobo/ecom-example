<script lang="ts">
    import Account from "./Account.svelte";
	import MiniCart from "./MiniCart.svelte";

	const {} = $props();
</script>

<div class="navbar bg-base-100 shadow-sm w-full">
	<div class="container mx-auto max-w-[1200px] w-full px-4">
		<div class="flex justify-between w-full">
			<div class="flex-1">
				<a href="/" class="btn btn-ghost text-xl">Data Layer's R Us</a>
			</div>
			<div class="flex-none">
				<ul class="menu menu-horizontal px-1">
					<li><a href="/">Home</a></li>
					<li><a href="/products">Products</a></li>
				</ul>
				<Account />
				<MiniCart />
			</div>
		</div>
	</div>
</div>
