const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const massive = require('massive')

//controllers
const AuthCtrl = require('./controller/AuthCtrl')
const CartCtrl = require('./controller/CartCtrl')
const ProductCtrl = require('./controller/ProductCtrl')

require('dotenv').config()

const app = express()
const port = 4200

massive ( process.env.CONNECTION_STRING ).then( db => {
    app.set('db', db)
    console.log(`Never gonna run around and desert db!`)
}).catch( err => console.log(err) )

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
}))
app.use(bodyParser.json())

// app.use(express.static(`${__dirname}/../build`))


// auth endpoints
app.get('/api/callback', AuthCtrl.auth)
app.get('/api/currentUser', AuthCtrl.currentUser)
app.delete('/api/logout', AuthCtrl.logout)

// product endpoints
app.get('/api/products/shirt', ProductCtrl.getShirt)
app.get('/api/products/jacket', ProductCtrl.getJacket)
app.get('/api/products/acc', ProductCtrl.getAcc)
// app.get('/api/products/:type', ProductCtrl.getProduct)

// cart endpoints
// app.get('/api/cart', CartCtrl.getCart)
// app.post('/api/cart/product/:id', CartCtrl.addToCart)
// app.put('/api/cart/quantity', CartCtrl.updateQuantityCart)
// app.delete('/api/cart/delete/:id', CartCtrl.deleteFromCart)

// app.post('/api/checkout)



// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../build/index.html'));
// });

app.listen( port, () => {
    console.log(`Never gonna give ${port} up, Never gonna let ${port} down.`)
})