<script lang="ts">
    import { page } from '$app/stores';
</script>

<header>
    <i style="cursor: pointer;" class='bx bx-menu'></i>
    {#if $page.status === 404}
        <p>ERROR</p>
    {/if}
    {#if $page.status !== 404}
        <h2 style="text-transform: capitalize;">
            <a class="text-black" href="/">Inicio</a>
            {#if $page.url.pathname !== '/'}
                /
                {$page.url.pathname.replace('/', '')}
            {/if}
        </h2>
    {/if}
</header>

<style lang="scss">
    header {
        min-height: 64px;
        padding: 0 1rem;
        background-color: var(--bg-card);
        display: flex;
        align-items: center;
        gap: 1rem;
        i{
            height: max-content;
        }
        h2 {
            text-decoration: none;
            color: #ff3e00;
            font-weight: bold;
        }
    }
</style>