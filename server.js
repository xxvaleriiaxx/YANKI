let express = require(`express`);
let app = express();
let cors = require('cors')
let port = 3000;
app.listen(port, function () {
    console.log(`Сервер запущен: http://localhost:${port}`)
});

app.use(cors())
app.use(express.json())
app.use(express.static('public'));



// Настройка БД
let mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/yanki');


// Схема пользователя
let schema_user = new mongoose.Schema({
    email: String,
    password: String
});
let User = mongoose.model('user', schema_user);
// Схема корзины
let schema_userBasket = new mongoose.Schema({
    email: String,
    password: String,
    basket: [{}]
});
let User_Basket = mongoose.model('basket', schema_userBasket);
// Схема понравившегося
let schema_userFavourites = new mongoose.Schema({
    email: String,
    password: String,
    favourites: [{}]
});
let User_Favourites = mongoose.model('favourite', schema_user);

let schema_product = new mongoose.Schema({
    title: String,
    img: String,
    images: Array,
    description: String,
    structure: String,
    price: String,
    colors: Array,
    sizes: Array,
    category: String,
    statusNew: Boolean
});
let Product = mongoose.model('product', schema_product);

app.post(`/authorization`, async function (req, res) {
    let email = req.body.email
    let password = req.body.password
    console.log(email, password)
    let data = await User.findOne({email: email, password: password})
    console.log(data)
    res.send(data)
});

app.post(`/registration`, async function (req, res) {
    let email = req.body.email
    let password = req.body.password
    console.log("регистрация", email, password)
    let data = await User.findOne({email: email, password: password})
    console.log("Полученные юзер", data)
    if (!data) {
        let user = new User ({
            email: email,
            password: password
        })
        console.log("Новый юзер", user)
        await user.save()
    }
    else {
        console.log("Вы есть")
    }
    data = await User.findOne({email: email, password: password})
    res.send(data)
});

app.post(`/basket`, async function (req, res) {
    let email = req.body.email
    let password = req.body.password
    console.log(email, password)
    let data = await User_Basket.findOne({email: email, password: password})
    console.log(data)
    res.send(data)
});

app.post(`/favourites`, async function (req, res) {
    let email = req.body.email
    let password = req.body.password
    console.log(email, password)
    let data = await User_Favourites.findOne({email: email, password: password})
    console.log(data)
    res.send(data)
});

app.post(`/delete`, async function (req, res) {
    let email = req.body.email
    let password = req.body.password
    let index_product = req.body.index_product
    console.log(email, password, "Индекс", index_product)
    let data = await User_Basket.findOne({email: email, password: password})
    console.log(data)
    data.basket.splice(index_product, 1)
    console.log("кОРЗИНА:", data.basket)
    await data.save()
    res.send(data)
});

app.get(`/catalog`, async function (req, res) {
    let data = await Product.find()
    console.log(data)
    res.send(data)
});

app.post(`/count_product`, async function (req, res) {
    let email = req.body.email
    let password = req.body.password
    let index_product = req.body.index_product
    let count = req.body.count
    console.log(email, password, "Индекс", index_product, count)
    let user_basket_update = await User_Basket.findOne({email: email, password: password})
    console.log(user_basket_update)
    user_basket_update.basket[index_product].count = String(Number(user_basket_update.basket[index_product].count) + Number(count))
    user_basket_update.markModified('basket')
    await user_basket_update.save()
    console.log("Изменение:", user_basket_update)
    user_basket_update = await User_Basket.findOne({email: email, password: password})
    console.log("После изменение:", user_basket_update)
    res.send(user_basket_update)
});

app.post(`/favourites`, async function (req, res) {
    let email = req.body.email
    let password = req.body.password
    let data = await User_Favourites.findOne({email: email, password: password})
    console.log(data)
    res.send(data)
});

