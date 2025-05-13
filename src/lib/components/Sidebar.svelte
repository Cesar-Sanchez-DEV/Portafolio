<script lang="ts">
    import { page } from '$app/stores';
	import Enlace from './Enlace.svelte';
</script>
<div class="sidebar">
    <div class="sidebar-content">
        <img src="/MekoxFacha.jpg" alt="">
        <h1>César Sanchez Moreno</h1>
        <p class="text-xs">Ingeniero de Sistemas e informática</p>
    </div>
    <nav class="sidebar-nav">
        <ul>
            <Enlace href="/" icon="bx bxs-dashboard" label="Dashboard" currentPath={$page.url.pathname} />
            <Enlace href="/about" icon="bx bx-user" label="Perfil" currentPath={$page.url.pathname} />
            <Enlace href="/experiencia" label="Experiencia" currentPath={$page.url.pathname} />
            <Enlace href="/projects" label="Proyectos" currentPath={$page.url.pathname} />
        </ul>
    </nav>
</div>
<style lang="scss">
    .sidebar-content{
        padding: 15px 0;
        text-align: center;
        img{
            width: 70px;
            border-radius: 50%;
        }
    }
    h1 {
        font-size: 1.225rem;
        color: var(--primary-500);
    }
    nav {
        ul{
            padding: 10px 0;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
	}

</style>