<script>
  import { Link } from "svelte-navigator";
  import { isLoggedIn } from "../stores/store";
</script>

<nav class="nav-bar">
  <div class="logo">
    <Link to="/" class="svelte-link">FancyLogo</Link>
  </div>
  <ul class="nav-links">
    <li class="nav-item">
      <Link to="/shop" class="svelte-link">Shop</Link>
    </li>
    <li class="nav-item">
      <Link to="/contact" class="svelte-link">Contact</Link>
    </li>
    <li class="nav-item">
      <Link to="/cart" class="svelte-link">Cart</Link>
    </li>
    {#if $isLoggedIn}
      <li class="nav-item">
        <Link to="/logout" class="svelte-link">Logout</Link>
      </li>
    {:else}
      <li class="nav-item">
        <Link to="/login" class="svelte-link">Login</Link>
      </li>
    {/if}
  </ul>
</nav>

<style>
  :global(.svelte-link) {
    color: var(--nav-font-color) !important;
    text-decoration: none !important;
  }

  nav {
    position: relative;
    height: 10vh;
    background-color: var(--nav-color);
  }
  .logo {
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 10%;
    transform: translate(-10%, -50%);
  }

  .nav-links {
    height: 100%;
    font-size: 20px;
    display: flex;
    list-style: none;
    width: 40%;
    justify-content: space-around;
    align-items: center;
    margin-left: auto;
  }

  .nav-links .nav-item {
    transition: all 0.3s ease 0s;
    text-decoration: none;
    color: var(--nav-font-color);
  }
</style>
