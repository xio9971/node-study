const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://xio9971:wmfdldi5017@clusternode.zkwisj5.mongodb.net/?retryWrites=true&w=majority')
                .then(() => console.log('MongoDb Connected..'))
                .catch(err => console.log(err))




app.get('/', (req, res) => {
    res.send('Hello World!ㅇㅇ ㅎㅇㅎㅇ')
})
  
app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})