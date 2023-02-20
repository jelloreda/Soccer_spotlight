const express = require('express')
const { isLoggedIn } = require('../middleware/route-guards')
const { userIsAdmin } = require('../utils')
const router = express.Router()



router.get('/fixture', (req, res, next) => {

    res.render('info/fixtures-list')

})


router.get('/fixture-details', (req, res, next) => {

    res.render('info/fixtures-details')

})



module.exports = router