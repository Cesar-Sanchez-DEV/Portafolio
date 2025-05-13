<script lang="ts">
    import { onMount, getContext } from "svelte";
    import { fade, fly } from "svelte/transition";
    import { get } from "svelte/store";
    import type { Writable } from "svelte/store";
    import { createEventDispatcher } from "svelte";
	import Card from "./Card.svelte";
    
    export let tabTitle = "";
    export let titleCard = "";
    export let icon = '';
    export let active = false;
    export let disabled = false;
    export let contentCard: boolean = true;
    
    const dispatch = createEventDispatcher<{ isActive: boolean }>();
    
    interface TabsContext {
        registerTab: (tab: {title: string, disabled: boolean}) => {
            activeTabTitle: Writable<string>
        }
    }
    
    let tabs = getContext<TabsContext>('tabs');
    let activeTabTitleStore;
    
    function setActive(isActive: boolean) {
        if (!disabled) {
            active = isActive;
            dispatch('isActive', active);
        }
    }
    
    onMount(() => {
        if (tabs) {
            const { activeTabTitle } = tabs.registerTab({
                title: tabTitle,
                disabled
            });
            
            activeTabTitleStore = activeTabTitle;
            
            const unsubscribe = activeTabTitle.subscribe((activeTitle: string) => {
                active = activeTitle === tabTitle;
                if (active) {
                    dispatch('isActive', true);
                }
            });
            
            return unsubscribe;
        }
    });
</script>

{#if active && !disabled && contentCard}
    <Card title={titleCard} icon={icon}>
        <slot />
    </Card>
    {:else if active && !disabled && !contentCard}
    <div class="tab-content">
        <slot></slot>
    </div>
{/if}
