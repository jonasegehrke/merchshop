<script>
    import { Link } from "svelte-navigator";
    import { shopItems } from "../../stores/store";

    import ShopItem from "../../components/ShopItem.svelte";
</script>

<div class="container">
    <Link to="/inspect/1" class="svelte-link">
        <ShopItem
            imgUrl="images/item.png"
            itemName={$shopItems[0].name}
            itemPrice={$shopItems[0].price}
        />
    </Link>
    <Link to="/inspect/2" class="svelte-link">
        <ShopItem
            imgUrl="images/item.png"
            itemName={$shopItems[1].name}
            itemPrice={$shopItems[1].price}
        />
    </Link>
    <Link to="/inspect/3" class="svelte-link">
        <ShopItem
            imgUrl="images/item.png"
            itemName={$shopItems[2].name}
            itemPrice={$shopItems[2].price}
        />
    </Link>
</div>

<style>
    .container {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
