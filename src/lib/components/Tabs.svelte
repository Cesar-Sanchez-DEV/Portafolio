<script lang="ts">
    import { setContext, onMount, createEventDispatcher } from "svelte";
    import { writable } from "svelte/store";
    
    export let type: "default" | "radio" | "modern" = "default";
    export let visible: boolean = true;
    
    type TabDefinition = {
        title: string;
        disabled: boolean;
    };
    
    const dispatch = createEventDispatcher();
    const tabs = writable<TabDefinition[]>([]);
    const activeTabTitle = writable<string>("");
    
    setContext('tabs', {
        registerTab: (tab: TabDefinition) => {
            tabs.update(all => {
                if (!all.find(t => t.title === tab.title)) {
                    return [...all, tab];
                }
                return all;
            });
            
            activeTabTitle.subscribe(value => {
                if (!value && tab.title && !tab.disabled) {
                    activeTabTitle.set(tab.title);
                }
            });
            
            return {
                activeTabTitle
            };
        }
    });
    
    function selectTab(tab: TabDefinition): void {
        // Si el tab está deshabilitado, no hacer nada
        if (tab.disabled) {
            const allTabs = $tabs;
            const currentIndex = allTabs.findIndex(t => t.title === tab.title);
            
            // Buscar el siguiente tab habilitado hacia adelante
            for (let i = currentIndex + 1; i < allTabs.length; i++) {
                if (!allTabs[i].disabled) {
                    activeTabTitle.set(allTabs[i].title);
                    dispatch('tabClicked', allTabs[i]);
                    return;
                }
            }
            
            // Si no hay siguiente, buscar hacia atrás
            for (let i = currentIndex - 1; i >= 0; i--) {
                if (!allTabs[i].disabled) {
                    activeTabTitle.set(allTabs[i].title);
                    dispatch('tabClicked', allTabs[i]);
                    return;
                }
            }
            return; // Si no hay tabs habilitados, no hacer nada
        }

        // Si el tab está habilitado, seleccionarlo
        activeTabTitle.set(tab.title);
        dispatch('tabClicked', tab);
    }
    
    onMount(() => {
        // Si no hay tabs activos, seleccionar el primero no deshabilitado
        const enabledTabs = $tabs.filter(tab => !tab.disabled);
        if (enabledTabs.length > 0) {
            selectTab(enabledTabs[0]);
        }
    });
    
    $: {
        // Sin necesidad de manejar active aquí
        if (activeTabTitle) {
            // Aquí puedes manejar cualquier lógica adicional si es necesario
        }
    }
</script>

<div class="tabs">
    <div class="d-flex justify-content-between align-items-end">
        <ul class="tab-titles" 
            class:isRadio={type === 'radio'} 
            class:isModern={type === 'modern'}>
            {#if visible}
                {#each $tabs as tab}
                    <button type="button" class:disabled={tab.disabled}
                        class:active={type !== 'radio' && tab.title === $activeTabTitle}
                        on:click={() => type !== 'radio' ? selectTab(tab) : null}>
                        {#if type === 'radio'}
                            <input
                                type="radio"
                                name="tabs"
                                class="form-check-input"
                                checked={tab.title === $activeTabTitle}
                                disabled={tab.disabled}
                                on:change={() => selectTab(tab)}>
                            <p>{tab.title}</p>
                        {:else}
                            {tab.title}
                        {/if}
                    </button>
                {/each}
            {/if}
        </ul>
    </div>
    <div class="tab-content">
        <slot />
    </div>
</div>

<style lang="scss">
.tabs {
    display: flex;
    flex-direction: column;
    gap: 15px;
    flex: 1;
    > div{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .tab-titles {
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        &.isRadio{
            button{
                cursor: default;
                display: flex;
                gap: 8px;
                &:hover{
                    background: none;
                }
                input{
                    cursor: pointer;
                    &:checked{
                        accent-color: var(--primary-500);
                    }
                    &:focus{
                        box-shadow: 0 0 1px 3px var(--bg-principal-hover);
                    }
                }
            }
        }
        &.isModern{
            width: 100%;
            background-color: var(--bg-card);
            padding: 5px;
            border-radius: var(--rounded-global);
            gap: 5px;
            justify-content: center;
            button{
                flex: 1;
                border-radius: var(--rounded-global);
                padding: 5px 10px;
                font-weight: 500;
                &:active{
                    transform: scale(0.97);
                }
                &.active{
                    color: #fff;
                    background-color: var(--primary-800);
                    animation: animActiveButton 1s forwards;
                }
                @keyframes animActiveButton {
                    0%{
                        transform: scale(1);
                    }
                    25%{
                        transform: scale(1.02);
                    }
                    50%{
                        transform: scale(0.98);
                    }
                    75%{
                        transform: scale(1.01);
                    }
                    100%{
                        transform: scale(1);
                    }
                }
            }
        }
        button{
            padding: 10px 20px;
            cursor: pointer;
            user-select: none;
            &:hover{
                background-color: var(--primary-500-hover);
            }
            &:first-of-type{
                border-top-left-radius: var(--rounded-global);
            }
            &:last-of-type{
                border-top-right-radius: var(--rounded-global);
            }
            &.active{
                background-color: var(--primary-500);
            }
            
            &.disabled{
                background-color:var(--bg-disabled);
                color: var(--color-disabled);
                cursor: not-allowed;
                input, p{
                    cursor: not-allowed;
                    color: var(--color-disabled);
                    opacity: 0.6;
                }
            }
        }
    }
}
@media (max-width: 700px) {
    .tabs{
        div{
            flex-direction: column-reverse;
        }
        .tab-titles{
            align-self: flex-start;
            button{
                &:last-of-type{
                    border-top-right-radius: 0;
                }
                &:nth-child(2){
                    border-top-right-radius: var(--rounded-global);
                }
            }
        }
    }
}
@media (max-width: 500px) {
    .tabs{
        .tab-titles{
            width: 100%;
            button{
                width: 50%;
            }
        }
    }
}
</style>
