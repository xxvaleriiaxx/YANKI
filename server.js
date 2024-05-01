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


// Схемы
let schema = new mongoose.Schema({
    email: String,
    password: String,
    basket: Array,
    favourites: Array,
    earlier: Array
}, {
    _id: Boolean,
    timestamps: Boolean
});

let User = mongoose.model('user', schema);
app.post(`/users`, async function (req, res) {
    let email = req.body.email
    let password = req.body.password
    console.log(email, password)
    let data = await User.findOne({email: email, password: password})
    console.log(data)
    res.send(data)
});


