import express from "express";
import helmet from "helmet";
import session from "express-session";
import bcrypt from "bcrypt";
import rateLimit from "express-rate-limit";
import dotenv from 'dotenv'
import cors from 'cors'
import nodemailer from 'nodemailer'

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors())
app.use(express.static("public"));
app.use(helmet()); //https://www.npmjs.com/package/helmet


const baseLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

app.use(baseLimiter);

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 6, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

app.use("/auth", authLimiter);

const mailLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 2, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

app.use('/mail' ,mailLimiter)

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

//Test data as we dont have a DB set up yet
const username = "jonasegehrke"
const password = "pass"
let hashedPass = '$2b$12$55YDSc/ZpkGJGy2BcUJXdufWm5eqAStKouzAORwFOmK4hBq3yvtIi'

/* Encrypt password, used for creating profile */
async function encryptPassword(req, res, next){
    const saltRounds = 12; //set to 12 for this project. in real life it should be random

    hashedPass = await bcrypt.hash(password, saltRounds);

    console.log("encryptPassword >>> ", hashedPass)
    next();
}


/* compare sent password to the one in the hashed password in the database */
async function comparePasswords(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');

    if(username != req.query.username){
        console.log("username didnt match")
        res.send({ message: "Permission denied: username did not match", isLoggedIn: false });
        return
    }

    //TODO: Fetch password from databse here and store it as hashedPass
    const isSame = await bcrypt.compare(req.query.password, hashedPass);

    console.log("isSame >>> ", isSame)

    if(isSame){
        req.session.isLoggedIn = true;
    }

    next();
}


app.get('/auth', comparePasswords, (req, res) => {
    

    if(!req.session.isLoggedIn){
      res.send({ message: "Permission denied: password did not match", isLoggedIn: false });
        return
    }
    res.send({ isLoggedIn: true });
})

app.post("/mail" , (req, res) =>{
  console.log(req.body)

  const transporter = nodemailer.createTransport({
    service: process.env.MAIL_SERVICE,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS
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

app.get("*", (req, res) => {
  res.send("<h1>Page not found: 404</h1>");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("Running on server", PORT));
