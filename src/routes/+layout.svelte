<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import { initializeDataLayer } from 'xp-datalayer-manager';

    initializeDataLayer({
    	siteInfo: {
     		name: 'datalayer',
      		experience: 'desktop',
        	division: 'dlt',
         	domain: "http://localhost:5173/",
          	env: 'dev',
           	currency: 'AUD',
           	version: '1.0.0'
     	}
    });

	let { children } = $props();
</script>

<div class="flex flex-col min-h-screen">
  <Header />

  <main class="flex-grow">
    {@render children()}
  </main>

  <Footer />
</div>
