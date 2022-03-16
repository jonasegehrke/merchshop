<script>
    import { Link } from 'svelte-navigator'

    let menuOpen = false;
    function handleMenuOpen() {
        menuOpen = !menuOpen;
    }
</script>


<nav class="nav-bar">
    <div class="logo"><Link to="/" class="svelte-link" >FancyLogo</Link></div>
    <div class="menu-btn {menuOpen === true ? 'open' : ''}">
        <div on:click={handleMenuOpen} class="menu-btn_burger"></div>
    </div>
    <ul class="nav-links">
        <li class="nav-item"><Link to="/shop" class="svelte-link">Shirts</Link></li>
        <li class="nav-item"><Link to="/shop" class="svelte-link">Footwear</Link></li>
        <li class="nav-item"><Link to="/shop" class="svelte-link">Accessories</Link></li>
        <li class="nav-item"><Link to="/cart" class="svelte-link">Cart</Link></li>
    </ul>
</nav>



<style>

    :global(a){
        color: var(--nav-font-color)!important;
        text-decoration: none !important;;
    }
    
nav{
   
   position: relative;
   height: 10vh;
   background-color: var(--nav-color);
}
.logo{
    font-size: 20px;
    position: absolute;
    top:50%;
    left: 10%;
    transform: translate(-10%, -50%);
}

.nav-links{
    height: 100%;
    font-size: 20px;
    display: flex;
    list-style: none;
    width: 40%;
    justify-content: space-around;
    align-items: center;
    margin-left: auto;
}

.nav-links .nav-item{
    transition: all 0.3s ease 0s;
    text-decoration: none;
    color: var(--nav-font-color);
}

.svelte-link{
    color: black !important;;
}




.menu-btn{
    display: none;
}

.menu-btn_burger{
    width: 30px;
    height: 4px;
    background: var(--nav-font-color);
    border-radius: 5px;
    transition: all .3s ease-in-out;
}

.menu-btn_burger::before,
.menu-btn_burger::after{
    content: '';
    position: absolute;
    width: 30px;
    height: 4px;
    background: var(--nav-font-color);
    border-radius: 5px;
    transition: all .5s ease-in-out;
}

.menu-btn_burger::before{
    transform: translateY(-9px);
}

.menu-btn_burger::after{
    transform: translateY(9px);
}

.menu-btn.open .menu-btn_burger{
    transform: translateZ(-50px);
    background: transparent;
}
.menu-btn.open .menu-btn_burger::before{
    transform: rotate(45deg) ;
}

.menu-btn.open .menu-btn_burger::after{
    transform: rotate(-45deg) ;
}

@media (max-width: 767.98px) {
    nav{
        position: relative;
    }
    .menu-btn{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        cursor: pointer;
        transition: all .5s ease-in-out;
        position: absolute;
        right: 5%;
        top: 50%;
        transform: translate(-5%, -50%);
        margin-left: auto;
        z-index: 3;
    }
}

</style>