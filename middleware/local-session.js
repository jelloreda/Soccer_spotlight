const localSession = (req, res, next) => {
    if (req.session.currentUser) {
        res.local.currentUser = req.session.currentUser
    } else {
        res.local.currentUser = null
    }
    next()
}

module.exports = { localSession }