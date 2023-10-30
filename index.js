const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const { User } = require("./models/User");
const config = require('./config/key');

//application/x-www-form-unlencoded
app.use(bodyParser.urlencoded({extended: true}));
//application/jspn
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI)
                .then(() => console.log('MongoDb Connected..'))
                .catch(err => console.log(err))




app.get('/', (req, res) => {
    res.send('Hello World!ㅇㅇ ㅎㅇㅎㅇsss')
})

app.post('/register', async (req, res) => {
    
    const user = new User(req.body) 
    await user.save().then(() => {
        res.status(200).json({
            success: true
        })
    })
    .catch((err) => {
        if(err) return res.json({success : false, err})
    })


})

  
app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})