<script>
  import { cart } from "../stores/store.js";
  import { toasts } from "svelte-toasts";

  export let item;

  function handleRemoveFromCart() {
    $cart = $cart.filter(function (value) {
      if (value.id != item.id) return value;
    });

    toasts.info("Removed from cart");
  }
</script>

<div class="item-container">
  <hr />
  <div class="cart-item">
    <div class="item-specs">
      <p class="product-title">{item.name}</p>
      <p class="product-size">Size: {item.size}</p>
      <p class="product-quantity">{item.price} DKK</p>
      <button on:click={handleRemoveFromCart} class="product-remove-btn">Del</button>
    </div>
    <div class="thumbnail">
      <img src={item.image} alt="item-pic" class="item-img" />
    </div>
  </div>
  <hr />
</div>

<style>
  .item-container {
    margin: 20px 0;
    width: 70%;
  }
  .cart-item {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
  }

  .item-specs {
    width: 80%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
  }

  .item-specs p {
    flex: 50%;
  }

  .product-size {
    text-align: end;
    padding-right: 7px;
  }

  .product-remove-btn {
    padding: 5px 20px;

    border: none;
    background: rgba(70, 70, 70, 0.507);
    border-radius: 25px;
    cursor: pointer;
  }

  .thumbnail {
    position: relative;
    width: 100px;
    height: 100px;
    overflow: hidden;
  }
  .thumbnail img {
    position: absolute;
    left: 40%;
    top: 50%;
    height: 100%;
    width: auto;
    -webkit-transform: translate(-40%, -50%);
    -ms-transform: translate(-40%, -50%);
    transform: translate(-40%, -50%);
  }
  .item-img {
    width: 100%;
    height: auto;
    border: 2px solid var(--nav-color);
    border-radius: 15px;
    padding: 5px;
  }
</style>
