<script lang="ts">
	let { id, name, image, price } = $props();
</script>

<div class="card bg-base-100 shadow-sm w-full max-w-xs">
	<figure>
		<img src="http://pi-master.local:3080/api/files/products/{id}/{image}" alt={name} class="object-cover w-full h-48" />
	</figure>
	<div class="card-body p-4">
		<h2 class="card-title text-lg font-bold flex justify-between items-start">
			{name}
			<div class="badge badge-secondary text-xs">{price}</div>
		</h2>
		<div class="card-actions flex flex-col gap-3">
			<a href="/products/{id}" class="btn btn-primary btn-sm w-full mt-2"> View Details </a>
		</div>
	</div>
</div>
