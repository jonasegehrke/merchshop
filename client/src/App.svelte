<script>
  import { Router, Route } from "svelte-navigator";
  import PrivateRoute from "./components/PrivateRoute.svelte";
  import Logout from "./pages/Login/Logout.svelte";
  import Home from "./pages/Home/Home.svelte";
  import Shop from "./pages/Shop/Shop.svelte";
  import Cart from "./pages/Cart/Cart.svelte";
  import Login from "./pages/Login/Login.svelte";
  import Contact from "./pages/Contact/Contact.svelte";
  import NavBar from "./components/NavBar.svelte";
  import { toasts, ToastContainer, FlatToast } from "svelte-toasts";
import Inspect from "./pages/Inspect/Inspect.svelte";
</script>

<Router>
  <NavBar />
  <main>
    <div class="wrapper">
      <Route path="/" primary={false}>
        <Home />
      </Route>

      <Route path="/shop" primary={false}>
        <Shop />
      </Route>

      <Route path="inspect/:id" let:params>
        <Inspect id="{params.id}" />
      </Route>

      <Route path="/contact" primary={false}>
        <Contact />
      </Route>
      <PrivateRoute path="cart" let:location>
        <Cart />
      </PrivateRoute>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/logout">
        <Logout />
      </Route>

      <ToastContainer placement="bottom-right" let:data>
        <FlatToast {data} />
      </ToastContainer>
      
    </div>
  </main>
</Router>

<style>
</style>
