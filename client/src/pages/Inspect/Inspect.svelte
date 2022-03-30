<script>
  import { toasts } from "svelte-toasts";
  import {
    shopItems,
    isLoggedIn,
    cart,
    idIncrement,
  } from "../../stores/store.js";
  import { useNavigate } from "svelte-navigator";
  export let id;

  const navigate = useNavigate();

  const shopItem = $shopItems.find((item) => item.id === Number(id));

  function handleAddtoCart() {
    const sizeSelect = document.getElementById("size-select");
    const size = sizeSelect.options[sizeSelect.selectedIndex].value;

    if (!$isLoggedIn) {
      toasts.error("Please login to add to cart");
      navigate("/login");
    } else {
      if (size === "default") {
        toasts.error("Please select a size");
        return;
      }
      shopItem.selectedSize = size;
      toasts.success("Added to cart");

      const cartItem = {
        id: $idIncrement,
        name: shopItem.name,
        size: shopItem.selectedSize,
        price: shopItem.price,
        image: shopItem.image,
      };

      $cart[$cart.length] = cartItem;
      $idIncrement++;
    }
  }
</script>

<div class="container">
  <div class="spec-container">
    <div class="item-heading">
      <h1>{shopItem.name}</h1>
      <h2>{shopItem.price} DKK</h2>
    </div>

    <hr />
    <div class="item-description">
      <p>{shopItem.description}</p>
    </div>

    <hr />
    <div class="item-actions">
      <select name="size" id="size-select">
        <option value="default" selected disabled hidden>Select size</option>
        {#each shopItem.sizes as size}
          <option value={size}>{size}</option>
        {/each}
      </select>
      <button on:click={handleAddtoCart} class="add-cart-btn"
        >Add to Cart</button
      >
    </div>
  </div>
  <div class="image-container">
    <img src={shopItem.image} alt="item-pic" class="item-image" />
  </div>
</div>

<style>
  hr {
    width: 100%;
    color: var(--nav-color);
    margin: 10px 0;
  }
  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 70vw;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .item-heading {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 5px;
  }

  .item-actions {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 5px;
  }

  #size-select {
    border: 1px solid var(--nav-color);
    border-radius: 5px;
    padding: 5px;
    width: 100px;
  }

  .add-cart-btn {
    border: 1px solid var(--nav-color);
    border-radius: 5px;
    padding: 5px;
    width: 100px;
    background-color: var(--nav-color);
    color: white;
    cursor: pointer;
  }

  .image-container {
    border: 2px solid var(--nav-color);
    padding: 2px;
    border-radius: 15px;
    cursor: pointer;
    margin: 0 50px;
  }

  .item-image {
    width: 100%;
  }
</style>
