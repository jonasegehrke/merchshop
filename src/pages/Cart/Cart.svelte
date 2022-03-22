<script>
    import CartItem from '../Cart/CartItem.svelte'

</script>

<div class="container">
    <CartItem itemImg="images/item.png" productTitle="Shirt" productSize="L" productQuantity="1"/>
    <CartItem itemImg="images/item.png" productTitle="Shirt" productSize="L" productQuantity="1"/>
    <CartItem itemImg="images/item.png" productTitle="Shirt" productSize="L" productQuantity="1"/>
    <CartItem itemImg="images/item.png" productTitle="Shirt" productSize="L" productQuantity="1"/>
</div>

<style>
    .container{
        
        width: 50%;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

    }

</style>