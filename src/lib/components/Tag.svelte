<script lang="ts">
    export let label: string = "";
</script>

<div class="tag">
    <p class="text-xs">{label}</p>
</div>
<style lang="scss">
.tag{
    transition: .15s;
    border-radius: 10px;
    border: 1px solid var(--bg-primary-200);
    width: max-content;
    padding: 0.125rem 0.625rem;
    font-weight: bold;
    align-content: center;
    background-color: var(--bg-tag);
    cursor: default;
    p{
        color: var(--text-primary);
    }
    &:hover{
        background-color: var(--primary-500);
        p{
            color: #fff;
        }
    }
}
</style>