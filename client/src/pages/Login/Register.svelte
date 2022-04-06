<script>
    import { isLoggedIn, responseData } from '../../stores/store.js';
    import { useNavigate, useLocation } from "svelte-navigator";
    import { toasts } from 'svelte-toasts';

    const navigate = useNavigate();
    const location = useLocation();

    async function handleCreateAccount(e) {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const password2 = document.getElementById("password2").value;

        if( password !== password2 ) {
            toasts.error("Passwords do not match");
            return;
        }

        const url = `http://localhost:3000/api/auth/register`;

        const data = { username: username, password: password };

        await fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-type": "application/json; charset=UTF-8" },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                isLoggedIn.set(data.isLoggedIn);
                responseData.set(data);
            });

        console.log($responseData)
        
        if ($isLoggedIn) {
            toasts.success($responseData.message);
            navigate("/", {
                state: { from: $location.pathname },
                replace: true,
            });
        } else {
            toasts.error($responseData.message);
        }
        
    }
</script>

<div class="container">
    <h1>Create an account</h1>
    <form id="form">
        <input type="text" placeholder="username" id="username" />
        <input type="password" placeholder="password" id="password" />
        <input type="password" placeholder="reenter password" id="password2" />

        <button on:click={handleCreateAccount} id="signup-btn">Sign up</button>
    </form>
</div>

<style>
    .container {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    #form {
        width: 300px;
        height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    input {
        padding: 5px;
        margin: 10px;
        border-radius: 20px;
        text-indent: 10px;
    }

    #signup-btn {
        border: 1px solid var(--nav-color);
        border-radius: 5px;
        padding: 5px;
        width: 100px;
        background-color: var(--nav-color);
        color: white;
        cursor: pointer;
    }
</style>
