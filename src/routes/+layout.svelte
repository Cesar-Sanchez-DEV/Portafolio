<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import '../app.scss';
	import '../../src/lib/styles/utils.css'
	import { page } from '$app/stores';
</script>

<div class="page">
	<aside>
		<Sidebar />
	</aside>
	<div class="page-layout">
		<Header />
		<main class:is-home={$page.url.pathname === '/'}>
			<slot />
		</main>
		<Footer />
	</div>
</div>

<style lang="scss">
	.page {
		display: flex;
		height: 100dvh;
	}

	aside {
		width: 255px;
		background-color: var(--bg-card);
	}

	.page-layout {
		flex: 1;
		display: flex;
		overflow: hidden;
		flex-direction: column;
		background-color: var(--bg-card);
	}
	
	main {
		flex: 1;
		height: 0;
		padding: 1rem;
		background-color: var(--bg-primary-100);
		border-radius: var(--rounded-global) 0 0 var(--rounded-global);
		&.is-home{
			padding: 15px 0 15px 15px;
		}
	}

</style>