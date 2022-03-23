<script>
    import { isLoggedIn } from "../../stores/store";
    import { useNavigate, useLocation } from "svelte-navigator";
    import {
        toasts,
        ToastContainer,
        FlatToast
    } from "svelte-toasts";

    const navigate = useNavigate();
    const location = useLocation();

    async function handleLogin() {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const url = `http://localhost:3000/auth`;

        const data = { username: username, password: password };

        const resp = await fetch(
            `${url}?username=${username}&password=${password}`
        );
        const respData = await resp.json();

        console.log("response >>>", respData);

        isLoggedIn.set(respData.isLoggedIn);

        if (respData.isLoggedIn) {
            toasts.success("Successfully logged in");
            navigate("/", {
                state: { from: $location.pathname },
                replace: true,
            });
        } else {
            toasts.error(respData.message);
        }
    }
</script>

{#if !$isLoggedIn}
<ToastContainer placement="bottom-right" let:data>
    <FlatToast {data} />
    <!-- Provider template for your toasts -->
</ToastContainer>
{/if}

<div class="container">
    <h1 class="login-heading">Login</h1>
    <input type="text" class="username" id="username" placeholder="username" />
    <input
        type="password"
        class="password"
        id="password"
        placeholder="password"
    />
    <button on:click={handleLogin} class="login-btn">Login</button>
</div>

<style>
    
    .container {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .login-heading{
        margin-bottom: 20px;
    }

    input {
        padding: 5px;
        margin: 10px;
        border-radius: 20px;
        text-indent: 10px;
    }

    .login-btn {
        border: none;
        margin-left: 10px;
        background: rgba(70, 70, 70, 0.507);
        border-radius: 25px;
        padding: 5px 20px;
        cursor: pointer;
    }
</style>
