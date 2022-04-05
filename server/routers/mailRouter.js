import { Router } from 'express';
import nodemailer from 'nodemailer';

const router = Router();

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