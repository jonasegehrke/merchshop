<script>
	import { Router, Link, Route } from "svelte-navigator";
	import Home from "./pages/Home/Home.svelte";
	import Shop from "./pages/Shop/Shop.svelte";
	import Item from "./pages/Item/Item.svelte";
	import Cart from "./pages/Cart/Cart.svelte";
	import NavBar from "./components/NavBar.svelte";
</script>

<Router>
	<NavBar />
	<div>
		<Route path="/" component={Home} />
		<Route path="/shop" component={Shop} />
		<Route path="/item" component={Item} />
		<Route path="/cart" component={Cart} />
	</div>
</Router>

<style>
	:root {
		--background-color: #ffffff !important;
		--nav-color: rgba(0, 0, 0, 0.7);

		--color-neon-yellow: #ffc400;
		--color-neon-cyan: #00ffef;
		--color-neon-pink: #f700ff;
		--color-neon-turquoise: #0fb;
		--color-neon-purple: #7c00ff;
		--color-neon-red: #ff0200;
		--color-neon-orange: #ff7800;
		--color-neon-green: #9cff00;

		--primary-color: var(--color-neon-cyan);
		--nav-font-color: rgb(0, 0, 0);
		--primary-font-color: #fff;
		--primary-font: "Poppins", sans-serif;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	
</style>
