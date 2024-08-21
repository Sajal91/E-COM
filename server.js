require('dotenv').config()
const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');
app.use(cors());
const path = require('path');
const mongoose = require('mongoose');
const User = require('./Models/user.js');
const Product = require('./Models/product.js');
const Order = require('./Models/order.js');
const Review = require('./Models/review.js');

app.use(express.urlencoded({extended: true}));
// app.set("views",path.join(__dirname,"views"));
// app.set('view engine','ejs');
app.use(express.static('public'));
// app.engine('ejs',ejsMate);

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
}

app.listen(port, ()=>{
    console.log('server started');
})

app.get('/home', async(request,response)=>{
    let products = await Product.find();
    let users = await User.find();
    let orders = await Order.find();
    let reviews = await Review.find();
    response.json([products,users,orders,reviews]);
})

app.get('/product',(request,response)=>{
    // product1.save()
    // .then((result)=>{
    //     console.log(result);
    // }).catch((error)=>{
    //     console.log(error);
    // })
})

// const user1 = new User({
//     username: "sajal",
//     password: "sajal@123",
//     contactNo: 9582671770,
//     address: "2A/75 Geeta colony"
// })

// app.get('/user',(request,response)=>{
//     user1.save()
//     .then((result)=>{
//         console.log(result);
//     }).catch((error)=>{
//         console.log(error);
//     })
// })

app.get('/new-product',(request,response)=>{
    response.render('newProduct.ejs');
})

app.post('/new-product',(request,response)=>{
    let newProduct = new Product(request.body);
    newProduct.save()
    response.redirect('/home');
})