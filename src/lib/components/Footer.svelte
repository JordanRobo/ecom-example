<script lang="ts">
	import { CodesandboxLogo, FigmaLogo, GithubLogo, Layers } from "svelte-radix";
</script>

<footer class="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
	<div class="container mx-auto max-w-[1200px] w-full px-4">
		<div class="flex justify-between w-full">
			<aside>
				<Layers class="h-12 w-12 mb-2" />
				<p>
					DataLayer Testing Pty. Ltd.
					<br />
					Providing reliable dataLayer implementation since 2025
				</p>
			</aside>
			<nav>
				<h6 class="footer-title">Social</h6>
				<div class="grid grid-flow-col gap-4">
					<GithubLogo class="w-8 h-8" />
					<CodesandboxLogo class="w-8 h-8" />
					<FigmaLogo class="w-8 h-8" />
				</div>
			</nav>
		</div>
	</div>
</footer>
