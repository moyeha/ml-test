import "babel-polyfill"
import express from 'express'
import productRouter from './routes/product'
import path from 'path'
const app = express()

app.use(express.static("dist"));
app.use('/api/items', productRouter);
app.get('*', (req, res) => res.sendFile(path.resolve('dist/index.html')))
app.listen(8080, function() {
    console.log('The server is runing on port 8080');
    
})