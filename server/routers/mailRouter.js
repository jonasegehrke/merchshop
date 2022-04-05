import { Router } from 'express';
import nodemailer from 'nodemailer';

const router = Router();


// OBS: i did not create a function to send mail through "forgot password" & "thank you for your purchase" messages, 
// The reason why is that it would require the user to enter his email and his password to the email. I dont want to do that (security matters).
// If it is possible to do without requiring password to the email, i would love to know.

router.post("/api/mail" , (req, res) =>{
    console.log("mail >>> ", req.body)
    const transporter = nodemailer.createTransport({
      service: process.env.MAIL_SERVICE,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      }
    })
  
    const mailOptions = {
      from: req.body.email,
      to: 'grannymerch@gmail.com',
      subject: `Message from ${req.body.email}: ${req.body.subject}`,
      text: req.body.message
    }
  
    transporter.sendMail(mailOptions, (error, info) =>{
      if(error){
        console.log(error)
        res.send({ status: 'Error sending the mail' })
      }else{
        console.log("email sent")
        res.send( { status: "success" })
      }
    })
  });

  export default router