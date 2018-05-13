import mongoose from 'mongoose'
const uri = 'mongodb://localhost:32769/ml'

const db = mongoose.connect(uri)

db.then(result => {
    console.log('mongoose ok');  
})

const itemSchema = mongoose.Schema({
    id: String,
    title: String,
    price: {
        currency: String,
        amount: Number,
        decimals: Number,
    },
    picture: String,
    condition: String,
    free_shipping: Boolean,
    sold_quantity, Number,
    description: String
})

const productsSchema =  mongoose.Schema({
    author: {
        name: String,
        lastname: String
    },
    categories: [String],
    items: [itemSchema]
})

const Products = mongoose.model('Pro')

export default db