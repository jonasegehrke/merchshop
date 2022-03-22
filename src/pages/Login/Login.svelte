<script>


   async function handleLogin(){
      const username = document.getElementById('username').value
      const password = document.getElementById('password').value

    
      const url = `http://localhost:3000/auth`

      const data = { username: username, password: password }

      const resp = await fetch(`${url}?username=${username}&password=${password}`)
      const respData = await resp.json();

      console.log("response >>>", respData)
   }

</script>

<div class="container">
    <input type="text" class="username" id="username" placeholder="username">
    <input type="password" class="password" id="password" placeholder="password">
    <button on:click={handleLogin} class="login-btn">Login</button>

</div>

<style>
    .container{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        
    }

    input{
        padding: 5px;
        margin: 10px;
        border-radius: 20px;
        text-indent: 10px;
    }

    .login-btn{
        border: none;
        margin-left: 10px;
        background: rgba(70, 70, 70, 0.507);
        border-radius: 25px;
        padding: 5px 20px;
        cursor: pointer;
    }

</style>