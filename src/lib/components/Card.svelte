<script lang="ts">
    export let padding: boolean = true;
    export let title: string = '';
    export let icon: string = '';
</script>

<div class="card" class:isPadding={padding}>
    {#if title.length > 0}
        <div class="card_header">
            <h3>
                {#if icon}
                    <i class={icon}></i>
                {/if}
                {title}
            </h3>
        </div>
    {/if}
    <div class="content_card">
        <slot />
    </div>
</div>
<style lang="scss">
    .card{
        background-color: var(--bg-card);
        border-radius: var(--rounded-global);
        border: 1px solid var(--bg-primary-200);
        width: 100%;
        .card_header{
            padding: 15px;
            border-bottom: 1px solid var(--bg-primary-200);
            h3{
                color: var(--primary-500);
                display: flex;
                align-items: center;
                gap: 5px;
                i{
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
        &.isPadding{
            .content_card{
                padding: 15px;
            }
        }
    }
</style>