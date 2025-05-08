<script>
    const cardHover = document.querySelector('.cardHover')

    if(cardHover){
        cardHover.classList.remove('active')
    }
</script>
<div class="cardHover active">
    <p>Hola</p>
</div>

<style lang="scss">
    .cardHover{
        position: fixed;
        filter: opacity(0);
        &.active{
            filter: opacity(1);
        }
    }
</style>