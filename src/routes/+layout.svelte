<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { initializeDataLayer } from "unified-datalayer";
    import { onMount } from 'svelte';

	let { children } = $props();

	initializeDataLayer({
		siteInfo: {
    		name: "my-site",
       		experience: "desktop",
		    currency: "USD",
		    division: "myCompany",
		    domain: "",
		    env: "prod",
		    version: "2.0.0"
		}
	});
</script>

<div class="flex flex-col min-h-screen">
  <Header />

  <main class="flex-grow">
    {@render children()}
  </main>

  <Footer />
</div>
