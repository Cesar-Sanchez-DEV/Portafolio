<script lang="ts">
	import { onMount } from "svelte";

    export let isActive = false;
    export let txt: string | null = '';

    onMount(()=>{
        const cursorDot = document.querySelector('.cardHover') as HTMLElement;
        window.addEventListener('mousemove', function(e) {
            const posX = e.clientX;
            const posY = e.clientY;
            if (cursorDot) {
                cursorDot.animate({
                    left: `${posX}px`,
                    top: `${posY}px`
                }, { duration: 800, fill: "forwards"})
            }
        });
    })
</script>

<div class="cardHover {isActive ? 'active' : ''}">
    <div class="content">
        <p>{txt}</p>
    </div>
</div>

<style lang="scss">
    .cardHover{
        position: fixed;
        transition: none;
        border-radius: var(--rounded-global);
        z-index: 99;
        pointer-events: none;
        display: flex;
        align-items: center;
        overflow: hidden;
        .content{
            background-color: var(--primary-700-hover);
            backdrop-filter: blur(5px);
            padding: 5px 20px;
            transform: scaleY(0);
            transition: transform .2s;
        }
        &.active{
            .content{
                transform: none;
                p{
                    color: light-dark(var(--text-primary), var(--text-primary));
                }
            }
        }
    }
</style>