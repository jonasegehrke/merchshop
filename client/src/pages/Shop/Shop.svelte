<script>
    import ShopItem from '../../components/ShopItem.svelte'
</script>

<div class="container">
    <ShopItem imgUrl="images/item.png" itemName="Shirt" itemSizes="XL, L, M"/>
    <ShopItem imgUrl="images/item.png" itemName="Shirt" itemSizes="XL, L, M"/>
    <ShopItem imgUrl="images/item.png" itemName="Shirt" itemSizes="XL, L, M"/>
  </div>

  <style>
      .container{
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
      }
  </style>