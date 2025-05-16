<script lang="ts">
    export let padding: { header: boolean; body: boolean } = { header: true, body: true };
    export let title: string = '';
    export let icon: string = '';
</script>

<div class="card">
    {#if $$slots.header}
        <div class="card_header" class:isPadding={padding.header}>
            <slot name="header" />
        </div>
        {:else if title.length > 0}
        <div class="card_header" class:isPadding={true}>
            <h3>
                {#if icon}
                    <i class={icon}></i>
                {/if}
                {title}
            </h3>
        </div>
    {/if}

    <div class="content_card" class:isPadding={padding.body}>
        <slot />
    </div>
</div>

<style lang="scss">
.card {
    background-color: var(--bg-card);
    border-radius: var(--rounded-global);
    border: 1px solid var(--bg-primary-200);
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    .card_header {
    border-bottom: 1px solid var(--bg-primary-200);
        h3 {
            color: var(--primary-500);
            display: flex;
            align-items: center;
            gap: 5px;
                i {
                    padding: 8px;
                    width: 32px;
                    text-align: center;
                    height: 32px;
                    border-radius: 50%;
                    background-color: var(--primary-500-hover);
                    color: var(--primary-500);
                }
        }
    }
    .content_card{
        flex: 1;
    }
    .isPadding {
        padding: 15px;
    }
}
</style>