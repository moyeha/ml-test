import express from 'express'
import axios from 'axios'

const router = express.Router({
    mergeParams: true
})

router.all('/', (req, res) => {
    
    axios
        .get('https://api.mercadolibre.com/sites/MLA/search?q=' + req.query.q)
        .then(response => {
            console.log('response', response.data)
            res.send(response.data)
        })
        .catch(error => {
            console.log('error', error)
            res.send(error)
        });

    
    
})
router.get('/:id', (req, res) => {
    res.send('por id')
})

router.get('/:id/:description', (req, res) => {
    res.send(req.params)
})

export default router