<script>
    import { shopItems } from "../../stores/store.js";
    
    export let id;

    const shopItem = $shopItems.findIndex(item => item.id === id);
    console.log(shopItem);
</script>
    <h1>this is inspect</h1>
    {shopItem.name}
<style>

</style>