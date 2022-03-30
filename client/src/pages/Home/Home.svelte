<script>
</script>

<main>
  <div class="container">
    <div class="thumbnail">
      <img src="images/profile.jpg" alt="" class="home-img" />
    </div>
    <div class="home-content">
      <div>
        <h1>Hi, i am granny</h1>
      </div>
      <hr />
      <div>
        <h2>This is a webshop containing my most valuable merchandise</h2>
      </div>
    </div>
  </div>
</main>

<style>
  .container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70vw;
    height: 50vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .thumbnail {
    position: relative;
    width: 300px;
    height: 300px;
    overflow: hidden;
    border-radius: 50%;
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
  .home-img {
    width: 100%;
    height: auto;
  }

  .home-content {
    display: flex;
    flex-direction: column;
  }

  .home-content > * {
    margin: 4px;
  }
</style>
