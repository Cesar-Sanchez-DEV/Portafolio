<script lang="ts">
    import { page } from '$app/stores';
</script>

<p>ERROR: Página "{$page.url.pathname.replace('/', '')}" no encontrada</p>
<p>STATUS : {$page.status}</p>
<a href="/">Ir a inicio</a>