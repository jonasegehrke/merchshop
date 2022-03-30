<script>
  import CartItem from "../../components/CartItem.svelte";
  import { cart } from "../../stores/store.js";
</script>

<div class="container">
  {#each $cart as item}
    <CartItem {item} />
  {/each}
</div>

<style>
  .container {
    height: 90vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
