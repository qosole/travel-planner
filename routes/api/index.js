const router = require('express').Router()
const travellerRoutes = require('./travellerRoutes.js')
const tripRoutes = require("./tripRoutes.js")
const locationRoutes = require('./locationRoutes.js')

router.use('/travellers', travellerRoutes)
router.use('/trips', tripRoutes)
router.use('/locations', locationRoutes)

module.exports = router;