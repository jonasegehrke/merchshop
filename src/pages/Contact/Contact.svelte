<script>

</script>

<div class="container">
    <form action="mailto:jonasegehrke@gmail.com" class="form">
        <input type="email" class="input email" placeholder="Your email">
        <input type="text" class="input subject" placeholder="Subject">
        <textarea type="text" cols="40" rows="5" class="input text" placeholder="Text Content"></textarea>
        <input type="submit" class="submit-btn">
    </form>
</div>

<style>
    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        
        height: 100%;
    }
    .form{
        display: flex;
        width: 30vw;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .input{
        padding: 5px;
        margin: 10px;
        border-radius: 20px;
        text-indent: 10px;
    }

    .email{
        width: 45%;
    }

    .subject{
        width: 45%;
    }

    .text{
        text-align: start;
        width: 100%;
        height: 200px;
    }

    .submit-btn{
        border: none;
        margin-left: 10px;
        background: rgba(70, 70, 70, 0.507);
        border-radius: 25px;
        padding: 5px 20px;
        cursor: pointer;
    }

    .submit-btn:hover{
        box-shadow: 0 0 0 1px black;
    }
</style>