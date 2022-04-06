<script>
  import { toasts } from "svelte-toasts";

  const validateEmail = (email) => {
    return email.value.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  async function handleSendMail(e) {
    e.preventDefault();
    
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    /* validate inputs */
    if (!validateEmail(email)) {
      toasts.error("Email not valid");
      return;
    }
    if (subject.value === '') {
      toasts.error("Subject cannot be empty");
      return;
    }
    if (message.value === "") {
      toasts.error("Message cannot be empty");
      return;
    }

    const formData = {
      email: email.value,
      subject: subject.value,
      message: message.value
    };

    const url = `http://localhost:3000/api/mail`;

    try {
      await fetch(url, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      })
        .then((response) => response.json())
        .then((responseText) => {
          if (responseText.status === "success") {
            toasts.success("Mail sent successfully");

            document.getElementById('form').reset();

          } else {
            toasts.error("Something went wrong");
          }
        });
    } catch (error) {
      toasts.error("Too many requests");
    }
  }
</script>

<div class="container">
  <form id="form">
    <input
      type="email"
      class="input email"
      id="email"
      placeholder="Your email"
    />
    <input
      type="text"
      class="input subject"
      id="subject"
      placeholder="Subject"
    />
    <textarea
      type="text"
      cols="40"
      rows="5"
      class="input text"
      id="message"
      placeholder="Message"
    />
    <input
      on:click={handleSendMail}
      type="submit"
      value="Submit"
      class="submit-btn"
    />
  </form>
</div>

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
  }
  #form {
    display: flex;
    width: 30vw;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .input {
    padding: 5px;
    margin: 10px;
    border-radius: 20px;
    text-indent: 10px;
  }

  .email {
    width: 45%;
  }

  .subject {
    width: 45%;
  }

  .text {
    text-align: start;
    width: 100%;
    height: 200px;
  }

  .submit-btn {
    border: 1px solid var(--nav-color);
    border-radius: 5px;
    padding: 5px;
    width: 100px;
    background-color: var(--nav-color);
    color: white;
    cursor: pointer;
  }

  .submit-btn:hover {
    box-shadow: 0 0 0 1px black;
  }
</style>
