import express from 'express'
import axios from 'axios'
import R from 'ramda'
const SEARCH_ENDPOINT = 'https://api.mercadolibre.com/sites/MLA/search'
const ITEM_ENDPOINT = 'https://api.mercadolibre.com/items'
const ITEM_CATEGORY_ENDPOINT = 'https://api.mercadolibre.com/categories'

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

const getDetail = (item, description, path) => ({
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
    sold_quantity: item.sold_quantity,
    description,
    path: R.pluck('name')(path)
})

const getCategories = async (id) => axios.get(`${ITEM_CATEGORY_ENDPOINT}/${id}`)

const getCategoriesFromFilter = R.pipe(
    R.pluck('values'),
    R.flatten,
    R.pluck('path_from_root'),
    R.flatten,
    R.pluck('name'))

router.get('/', (req, res) => {
    axios
        .get(`${SEARCH_ENDPOINT}?q=${req.query.q}`)
        .then(response => {
            res.send({
                author: {
                    name: 'Pedro',
                    lastname: 'Moyano'
                },
                items: R.take(4, R.map(searchMap,response.data.results)),
                path: getCategoriesFromFilter(R.pathOr([], ['filters'], response.data))
            })
        })
        .catch(error => {
            res.send(error)
        });
})

router.get('/:id', async (req, res) => {
    try {
        const [ detail, description] = await Promise.all([
            axios.get(`${ITEM_ENDPOINT}/${req.params.id}`),
            axios.get(`${ITEM_ENDPOINT}/${req.params.id}/description`)]
        )
        const { data: { path_from_root: path } } = await getCategories(detail.data.category_id)
        res.send(getDetail(detail.data, description.data.plain_text, path))
        
    } catch (error) {
        res.send(error)
    }
})

export default router