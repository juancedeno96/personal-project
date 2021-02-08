require("dotenv").config();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const massive = require("massive");
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;
const session = require("express-session");
const express = require("express");
const authCtrl = require("./controllers/authController");
const pc = require('./controllers/productController')

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cookieParser())

// const { sendEmail } = require('./mail');


// app.post('/api/sendMail', (req, res)=>{
//   console.log(req.body)
//   sendEmail(req.body.email, req.body.first_name, 'hello')
// })



massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
}).then((db) => {
  app.set("db", db);
  console.log("db connected");
  app.listen(SERVER_PORT, () => console.log(`running on port ${SERVER_PORT}`));
});

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 365 },
  })
);

// Auth Endpoints

app.post("/api/register", authCtrl.register);
app.post('/api/login', authCtrl.login)
app.get('/api/me', authCtrl.getUser)
app.post('/api/logout', authCtrl.logout)

// Product Endpoints
app.get('/api/all', pc.getAllProduct)
app.post('/api/add', pc.addOrder)
