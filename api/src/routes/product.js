import express from 'express'
const router = express.Router({
    mergeParams: true
})

router.all('/', (req, res) => {
    console.log('ENTRO');
    
})
router.get('/pepe', (req, res) => {
    res.send('peperino')
})

export default router