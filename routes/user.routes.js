const express = require('express')
const { isLoggedIn } = require('../middleware/route-guards')
const { userIsAdmin } = require('../utils')
const router = express.Router()

router.get('/', isLoggedIn, (req, res, next) => {
    res.render('users/users-list')
})

router.get('/profile', isLoggedIn, (req, res, next) => {
    res.render('users/user-profile', { user: req.session.currentUser })
})

module.exports = router

