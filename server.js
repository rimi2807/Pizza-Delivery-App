const express = require("express");
const Pizza = require('./models/pizzaModel')

const app = express();
const dotenv = require("dotenv");
const db = require("./db.js")
app.use(express.json());
const path = require('path')
const pizzasRoute = require('./routes/pizzasRoute')
const userRoute = require('./routes/userRoute')
const ordersRoute = require('./routes/ordersRoute')



dotenv.config();

app.use('/api/pizzas/', pizzasRoute)
app.use('/api/users/' , userRoute)
app.use('/api/orders/' , ordersRoute)


if(process.env.NODE_ENV ==='production')
{
    app.use('/' , express.static('frontend/build'))

    app.get('*' , (req , res)=>{

        res.sendFile(path.resolve(__dirname  , 'frontend/build/index.html'))

    })
}






const port = process.env.PORT || 8000;

app.listen(port, () => `Server running on port port 🔥`)