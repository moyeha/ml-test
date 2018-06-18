import express from 'express'
import axios from 'axios'
import R from 'ramda'
const SEARCH_ENDPOINT = 'https://api.mercadolibre.com/sites/MLA/search'
const ITEM_ENDPOINT = 'https://api.mercadolibre.com/items'

const router = express.Router({
    mergeParams: true
})

const searchMap = item => ({
    id: item.id,
    title: item.title,
    price: {
        currency: item.currency_id,
        amount: item.price,
        decimal: 0
    },
    location: item.address.state_name,
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
    picture: item.pictures[0].url,
    pictures: item.pictures.map(item => item.url),
    condition: item.condition,
    free_shipping: item.free_shipping,
    descriptions: item.descriptions
})


router.get('/', (req, res) => {
    console.log('/', `Entro`)
    const getCategories = R.ifElse(
        (filters) => !R.isEmpty(filters),
        (filters) => filters[0].values[0].path_from_root,
        () => []
    )
    axios
        .get(`${SEARCH_ENDPOINT}?q=${req.query.q}`)
        .then(response => {
            res.send({
                author: {
                    name: 'Pedro',
                    lastname: 'Moyano'
                },
                items: R.take(4, R.map(searchMap,response.data.results)),
                categories: getCategories(response.data.filters)
            })
        })
        .catch(error => {
            res.send(error)
        });
})

router.get('/:id/:description?', (req, res) => {
    // console.log('/:id...', req.params)
    const path = R.ifElse(
        R.propSatisfies(description => !R.isNil(description), 'description'),
        (obj) => `${obj.id}/${obj.description}`,
        (obj) => `${obj.id}`
    )
    axios
        .get(`${ITEM_ENDPOINT}/${path(req.params)}`)
        .then(response => {
            console.log('response', response.data)
            res.send(itemMap(response.data))
        })
        .catch(error => {
            console.log('error', error)
            res.send(error)
        });
})

export default router