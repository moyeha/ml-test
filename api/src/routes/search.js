import express from 'express'
// import db from './../db/index'
const router = express.Router({
    mergeParams: true
})

router.get('/', (req, res) => {
    res.send(req.query)
})

export default router