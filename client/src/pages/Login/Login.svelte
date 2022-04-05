<script>
  import { isLoggedIn, responseData } from "../../stores/store";
  import { useNavigate, useLocation } from "svelte-navigator";
  import { toasts } from "svelte-toasts";

  const navigate = useNavigate();
  const location = useLocation();

  async function handleLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const url = `http://localhost:3000/api/auth`;

    const data = { username: username, password: password };

    await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((data) => {
        isLoggedIn.set(data.isLoggedIn);
        responseData.set(data);
      });

    if ($isLoggedIn) {
      toasts.success("Successfully logged in");
      navigate("/", {
        state: { from: $location.pathname },
        replace: true,
      });
    } else {
      toasts.error($responseData.message);
    }
  }

  const onKeyPress = (e) => {
    if (e.charCode === 13) {
      handleLogin();
    }
  };
</script>

<div class="container">
  <h1 class="login-heading">Login</h1>
  <input
    type="text"
    class="username"
    id="username"
    placeholder="username"
    on:keypress={onKeyPress}
  />

  <input
    type="password"
    class="password"
    id="password"
    placeholder="password"
    on:keypress={onKeyPress}
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

  .login-heading {
    margin-bottom: 20px;
  }

  input {
    padding: 5px;
    margin: 10px;
    border-radius: 20px;
    text-indent: 10px;
  }

  .login-btn {
    border: 1px solid var(--nav-color);
    border-radius: 5px;
    padding: 5px;
    width: 100px;
    background-color: var(--nav-color);
    color: white;
    cursor: pointer;
  }
</style>
