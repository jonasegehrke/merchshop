import express from "express";
import helmet from "helmet";
import session from "express-session";
import rateLimit from "express-rate-limit";
import dotenv from 'dotenv'
import cors from 'cors'
import nodemailer from 'nodemailer'

import loginRouter from "./routers/loginRouter.js";
import mailRouter from "./routers/mailRouter.js";



dotenv.config();
const app = express();

app.use(express.json());
app.use(cors())
app.use(express.static("public"));
app.use(helmet()); //https://www.npmjs.com/package/helmet

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);


/* Login */
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 6, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

app.use("/api/auth", authLimiter);
app.use(loginRouter);


/* Mail */
const mailLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 2, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

app.use('/api/mail' ,mailLimiter)
app.use(mailRouter);


app.get("*", (req, res) => {
  res.send("<h1>Page not found: 404</h1>");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("Running on server", PORT));


