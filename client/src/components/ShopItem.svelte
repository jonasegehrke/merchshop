<script>
  export let imgUrl;
  export let itemName;
  export let itemPrice;
</script>

<div class="item">
  <img src={imgUrl} class="item-img" alt="product-pic" />
  <hr />
  <div class="item-desc">
    <p>{itemName}</p>
    <p>{itemPrice} DKK</p>
  </div>
</div>

<style>
  .item {
    width: 20vw;
    border: 2px solid var(--nav-color);
    padding: 2px;
    border-radius: 15px;
    cursor: pointer;
    margin: 0 50px;
  }

  .item-img {
    width: 100%;
  }

  .item-desc {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: black;
  }

  .item-desc p {
    margin: 10px 15px;
  }
</style>
