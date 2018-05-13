import express from 'express'
import productRouter from './routes/product'
import searchRouter from './routes/search'
const app = express()


app.use('/items', productRouter)
app.use('/search', searchRouter)

app.listen(3000, function() {
    console.log('eppepew');
    
})