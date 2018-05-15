import express from 'express'
import productRouter from './routes/product'
const app = express()

app.use(express.static("dist"));
app.use('/api/items', productRouter);
app.listen(8080, function() {
    console.log('The server is runing on port 8080');
    
})