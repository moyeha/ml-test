import express from 'express'
import axios from 'axios'
import R from 'ramda'
const SEARCH_ENDPOINT = 'https://api.mercadolibre.com/sites/MLA/search'
const ITEM_ENDPOINT = 'https://api.mercadolibre.com/items'

const router = express.Router({
    mergeParams: true
})

const searchMap = item => ({
    author: {
        name: 'Pedro',
        lastname: 'Moyano'
    },
    id: item.id,
    title: item.title,
    price: {
        currency: item.currency_id,
        amount: item.price,
        decimal: 0
    },
    picture: item.thumbnail,
    condition: item.condition,
    free_shipping: item.shipping.free_shipping
})

const itemMap = item => ({
    author: {
        name: 'Pedro',
        lastname: 'Moyano'
    },
    id: item.id,
    title: item.title,
    price: {
        currency: item.currency_id,
        amount: item.price,
        decimal: 0
    },
    picture: item.thumbnail,
    condition: item.condition,
    free_shipping: item.free_shipping
})


router.all('/', (req, res) => {
    axios
        .get(`${SEARCH_ENDPOINT}?q=${req.query.q}`)
        .then(response => {
            res.send(R.map(searchMap,response.data.results))
        })
        .catch(error => {
            console.log('error', error)
            res.send(error)
        });
})
router.get('/:id', (req, res) => {
    // res.send(`${ITEM_ENDPOINT}/${req.params.id}`)
    // return
    axios
        .get(`${ITEM_ENDPOINT}/${req.params.id}`)
        .then(response => {
            res.send(itemMap(response.data))
            // res.send(R.map(searchMap,response.data.results))
        })
        .catch(error => {
            console.log('error', error)
            res.send(error)
        });
})

router.get('/:id/:description', (req, res) => {
    res.send(req.params)
})

export default router