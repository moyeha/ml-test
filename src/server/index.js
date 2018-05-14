import express from 'express'
import productRouter from './routes/product'
// import searchRouter from './routes/search'
const app = express()


// app.use('/items', productRouter)
// app.use('/search', searchRouter)

app.use(express.static("dist"));
app.use('/api/items', productRouter);
app.listen(8080, function() {
    console.log('eppepew');
    
})