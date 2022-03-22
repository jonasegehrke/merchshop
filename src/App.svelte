<script>
  import { Router, Link, Route } from "svelte-navigator";
  import PrivateRoute from "./private-routes/PrivateRoute.svelte";
  import Logout from './pages/Login/Logout.svelte'
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
      <Route path="/">
        <Home />
      </Route>

      <PrivateRoute path="shop" let:location>
        <Shop />
      </PrivateRoute>

      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>


    

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/logout">
        <Logout />
      </Route>

      <!-- <Route path="/logout" component={Logout} /> -->
    </div>
  </main>
</Router>

<style>
</style>
