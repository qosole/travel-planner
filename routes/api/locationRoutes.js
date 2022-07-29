const router = require('express').Router()
const {Location} = require('../../models')

//get all location data

router.get('/', async (req, res) =>{
    try {
        const locationData = await Location.findAll(
            {
                include: [{model: Location}]
            }
        )
        
    } catch (err) {
        res.status(500).json(err)
    }
})
// post location data
router.post('/', async (req, res) => {
    try {
        const locationData = await Location.create(req.body)
        res.status(200).json(locationData)
    } catch (err){
        res.status(500).json(err)
    }
})
// get a single location 
router.get('/:id', async (req, res) =>{
    try {
        const locationData = await Location.findbyPK(req.params.id,
            {
                include: [{model: Location}]
            }
        )
        if (!locationData) {
            res.status(404).json({message: 'No location found with that id!'})
            return;
            
        }

        res.status(200).json(locationData)
    } catch (err) {
        res.status(500).json(err)
    }
})
// delete location data
router.delete('/:id', async (req, res) => {
    try {
        const locationData = await Location.destroy({
            where: {
                id: req.params.id,
            },
        })

        if (!locationData) {
            res.status(404).json({message: 'No reader found with that id!'})
            return;
            
        }
        res.status(200).json(locationData)
    } catch (err){
        res.status(500).json(err)
    }
})

module.exports = router;