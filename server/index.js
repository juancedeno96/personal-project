require("dotenv").config();
const massive = require("massive");
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;
const session = require("express-session");
const express = require("express");
// const path = require('path');
const authCtrl = require("./controllers/authController");
const pc = require('./controllers/productController')
const customer= require('./controllers/customerController')
const app = express();

app.use(express.json());

// app.use(express.static(__dirname + '/../build'))

// app.get('*', (req,res)=>{
  // res.sendFile(path.join(__dirname, '../build/index.html'))
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
app.post('/api/add/:product_id', pc.addOrder)
app.get('/api/cart/:customer_id', pc.getUserItems)
app.delete('/api/delete/:product_id', pc.deleteItem)
app.get('/api/total/:customer_id', pc.getTotal);

//Customer Endpoints
app.put('/api/update-info/:customer_id', customer.updateInfo )
