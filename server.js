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
let User_Favourites = mongoose.model('favourite', schema_userFavourites);

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

let schema_personalData = new mongoose.Schema({
    email: String,
    password: String,
    data: {
        firstName: String,
        lastName: String,
        phoneNumber: String,
        address: String
    }
});
let PersonalData = mongoose.model('dataset', schema_personalData);

let schema_orders = new mongoose.Schema({
    email: String,
    password: String,
    orders: Array
});
let Orders = mongoose.model('order', schema_orders);
//Авторизация
app.post(`/authorization`, async function (req, res) {
    let email = req.body.email
    let password = req.body.password
    console.log(email, password)
    let data = await User.findOne({email: email, password: password})
    console.log(data)
    res.send(data)
});

//Регистрация
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
        let new_data = new User_Basket({
            email: email,
            password: password,
            basket: [{}]
        })
        await new_data.save()
        new_data = new User_Favourites({
            email: email,
            password: password,
            favourites: [{}]
        })
        await new_data.save()
        new_data = new PersonalData({
            email: email,
            password: password,
            data: {
                firstName: "",
                lastName: "",
                phoneNumber: "",
                address: ""
            }
        })
        await new_data.save()
        new_data = new Orders({
            email: email,
            password: password,
            orders: []
        })
        await new_data.save()
    }
    else {
        console.log("Вы есть")
    }
    data = await User.findOne({email: email, password: password})
    res.send(data)
});

//Получение товаров в корзине
app.post(`/basket`, async function (req, res) {
    let email = req.body.email
    let password = req.body.password
    console.log(email, password)
    let data = await User_Basket.findOne({email: email, password: password})
    console.log(data)
    res.send(data)
});

//Получение понравившихся товаров
app.post(`/favourites`, async function (req, res) {
    let email = req.body.email
    let password = req.body.password
    console.log(email, password)
    let data = await User_Favourites.findOne({email: email, password: password})
    console.log(data)
    res.send(data)
});

//Удаление из корзины
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

//Получение каталога
app.post(`/catalog`, async function (req, res) {
    let {sort_size, sort_price, sort_color, sort_category} = req.body
    console.log(sort_size, sort_price, sort_color, sort_category)
    sort_price = Number(sort_price)
    let search = {}
    let search_string = ""
    if (sort_color && sort_color!="Цвет") {
        search['colors.color_text'] = sort_color
    }
    if (sort_size && sort_size!="Размер") {
        search['sizes'] = sort_size
    }
    if (sort_category) {
        search['category'] = sort_category
    }
    console.log(search)
    console.log(sort_price)
    let data = await Product.find(search).sort({price: sort_price})
    res.send(data)

});

//Изменение количества продукта
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

//Добавление в корзину
app.post(`/addBasket`, async function (req, res) {
    let email = req.body.email
    let password = req.body.password
    let product = req.body.product
    let size = req.body.size
    let flag = false
    console.log(email, password, product)
    let data = await User_Basket.findOne({email: email, password: password})
    for (let i = 0; i < data.basket.length; i++) {
        if (data.basket[i]._id == product._id && data.basket[i].size == size && data.basket[i].color == product.colors[0].color) {
            data.basket[i].count = String(Number(data.basket[i].count) + 1)
            console.log(data.basket[i].count)
            flag = true
            data.markModified('basket')
            await data.save()
        }
    }
    if (flag == false) {
        let addProduct = {
            _id: product._id,
            image: product.img,
            title: product.title,
            color: product.colors[0].color,
            size: size,
            count: "1",
            price: product.price,
        }
        data.basket.unshift(addProduct)
        await data.save()
    }

    console.log(data)
    res.send(data)
});
//Удаление избранного
app.post(`/deleteFavourite`, async function (req, res) {
    console.log(1)
    let email = req.body.email
    let password = req.body.password
    let favourite_index = req.body.favourite_index
    console.log(email, password, "Индекс избранного", favourite_index)
    let data = await User_Favourites.findOne({email: email, password: password})
    data.favourites.splice(favourite_index, 1)
    console.log("Избранное:", data.favourites)
    await data.save()
    res.send(data)
    console.log(data)

});

//Добавление в избранное
app.post(`/addFavourite`, async function (req, res) {
    console.log(1)
    let email = req.body.email
    let password = req.body.password
    let favourite = req.body.favourite
    console.log(email, password, "B избранное", favourite)
    let data = await User_Favourites.findOne({email: email, password: password})
    data.favourites.unshift(favourite)
    console.log("Избранное:", data.favourites)
    await data.save()
    res.send(data)
    console.log(data)

});

//Получение персональных данных
app.post(`/personalData`, async function (req, res) {
    let email = req.body.email
    let password = req.body.password
    console.log(email, password)
    let data = await PersonalData.findOne({email: email, password: password})
    console.log("Получение персональных данных", data)
    res.send(data)
});
//Получение старых заказов
app.post(`/orders`, async function (req, res) {
    let email = req.body.email
    let password = req.body.password
    console.log(email, password)
    let data = await Orders.findOne({email: email, password: password})
    console.log("Получение старых заказов", data)
    res.send(data)
});
//Изменение персональных данных
app.post(`/update_personal_data`, async function (req, res) {
    let email = req.body.email
    let password = req.body.password
    let personalData = req.body.personalData
    console.log("update данных: ", email, password, personalData)
    let data = await PersonalData.findOne({email: email, password: password})
    console.log(data)
    data.email = personalData.email
    data.data.firstName = personalData.firstName
    data.data.lastName = personalData.lastName
    data.data.phoneNumber = personalData.phoneNumber
    data.data.address = personalData.address
    res.send(data.email)
    await data.save()
    data = await User.findOne({email: email, password: password})
    data.email = personalData.email
    await data.save()
    data = await User_Basket.findOne({email: email, password: password})
    data.email = personalData.email
    await data.save()
    data = await User_Favourites.findOne({email: email, password: password})
    data.email = personalData.email
    await data.save()
    data = await Orders.findOne({email: email, password: password})
    data.email = personalData.email
    await data.save()
});
//Добавление заказа
app.post(`/registration_order`, async function (req, res) {
    let email = req.body.email
    let password = req.body.password
    let basket = req.body.basket
    let personalData = req.body.personalData
    let total = req.body.total
    let delivery = req.body.delivery
    let payment = req.body.payment
    let data_order = new Date()
    let data_order_string = String(data_order.getDate()) +"."+ String(data_order.getMonth()+1) +"."+ String(data_order.getFullYear())
    console.log(email, password, basket, personalData, total, delivery, payment)
    console.log("Дата:", data_order_string)
    let data = await Orders.findOne({email: email, password: password})
    data.orders.unshift({
        total: total,
        status: "В сборке",
        date: data_order_string,
        products: basket,
        data: {
            firstName: personalData.firstName,
            lastName: personalData.lastName,
            phoneNumber: personalData.phoneNumber,
            emailUser: personalData.email,
            address: personalData.address,
            delivery: delivery,
            payment: payment
        }
    })
    console.log("Получение заказов", data)
    await data.save()
    res.send(data)
});
