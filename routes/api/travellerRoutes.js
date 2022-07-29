const router = require('express').Router()
const {Traveller, Location, Trip} = require('../../models')

//return all traveller data without associated trips/locations
router.get('/', async (req, res) => {
    try {
        const travellerData = await Traveller.findAll({
            include: [{ model: Traveller}],
        })
        res.status(200).json(travellerData)
    }catch (err) {
        res.status(500).json(err)
    }
})

//creates traveller data
router.post('/', async (req, res) => {
    try {
        const travellerData = await Traveller.create(req.body)
        res.status(200).json(travellerData)
    }catch (err){
        res.status(400).json(err)
    }
})

// get a single travellers data with associated trips and locations
router.get('/:id', async (req, res) => {
    try {
        const travellerData = await Traveller.findbyPK({
            include: [{model: Traveller}, {model: Trip}, {model: Location}]
        })
        res.status(200).json(travellerData)
    }catch (err) {
        res.status(500).json(err)
    }
})

//delete a traveller by id
router.delete('/:id', async (req, res) =>{
    try {
        const travellerData = await Traveller.destroy({
            where: {
                id: req.params.id
            }
        })

        if (!travellerData) {
            res.status(404).json({message: "No traveller found at that id"})
        }
        
        res.status(200).json(travellerData)
    }catch (err){
        res.status(500).json(err)
    }
})