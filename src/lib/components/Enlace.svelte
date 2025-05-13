<script>
    export let href = "/";
    export let label = "Link";
    export let currentPath = "/";
    export let icon = '';
</script>

<li class:active={currentPath === href}>
    <a href={href}><i class="{icon}"></i><p>{label}</p></a>
    <div class="borde"></div>
</li>

<style lang="scss">
    li{
        display: flex;
        align-items: center;
        position: relative;
        padding: 0 10px;
        a{
            width: 100%;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: .8rem;
            color: #666;
            padding: .6rem .8rem;
            border-radius: var(--rounded-global);
            &:hover {
                background-color: var(--bg-primary-200);
                +.borde{
                    background-color: var(--bg-primary-200);
                }
            }
        }
        &.active {
            a{
                background-color: var(--primary-500-hover);
                color: var(--primary-500);
                font-weight: bold;
                i, p{
                    color: var(--primary-500);
                }
                &:hover {
                    +.borde{
                        background-color: var(--primary-500-hover);
                    }
                }
            }
            .borde{
                background-color: var(--primary-500-hover);
            }
        }
        .borde{
            width: 2px;
            height: 85%;
            position: absolute;
            left: 0;
            border-radius: 0 var(--rounded-global) var(--rounded-global) 0;
        }
    }
</style>