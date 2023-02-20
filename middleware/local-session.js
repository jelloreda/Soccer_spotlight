const localSession = (req, res, next) => {
    if (req.session.currentUser) {
        res.locals.currentUser = req.session.currentUser
    } else {
        res.locals.currentUser = null
    }
    next()
}

module.exports = { localSession }