<script>
  export let itemImg;
  export let productTitle;
  export let productSize;
  export let productQuantity;
</script>

<div class="item-container">
  <hr />
  <div class="cart-item">
    <div class="item-specs">
      <p class="product-title">{productTitle}</p>
      <p class="product-size">Size: {productSize}</p>
      <p class="product-quantity">Quantity: {productQuantity}</p>
      <button class="product-remove-btn">Del</button>
    </div>
    <div class="thumbnail">
      <img src={itemImg} alt="item-pic" class="item-img" />
    </div>
  </div>
  <hr />
</div>

<style>

    .item-container{
        margin: 20px 0;
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
