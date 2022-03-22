<script>
  import { Router, Link, Route } from "svelte-navigator";
  import Home from "./pages/Home/Home.svelte";
  import Shop from "./pages/Shop/Shop.svelte";
  import Cart from "./pages/Cart/Cart.svelte";
  import Login from "./pages/Login/Login.svelte";
  import Contact from "./pages/Contact/Contact.svelte";
  import NavBar from "./components/NavBar.svelte";
</script>

<Router>
  <NavBar />
  <main>
    <div class="wrapper">
      <Route path="/" component={Home} />
      <Route path="/shop" component={Shop} />
      <Route path="/contact" component={Contact} />
      <Route path="/cart" component={Cart} />
      <Route path="/login" component={Login} />

      <!-- <Route path="/logout" component={Logout} /> -->
    </div>
  </main>
</Router>

<style>
</style>
