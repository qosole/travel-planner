const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Location, Traveller, Trip } = require('../../models');

// POST route for /api/trips
router.post('/', async (req, res) => {
    try {
        const tripData = await Trip.create(req.body);
        res.status(200).json(tripData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// DELETE route for /api/trips/:id
router.delete('/:id', async (req, res) => {
    try {
        const tripData = await Trip.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!tripData) {
            res.status(400).json({ message: 'No trip found with that ID!' });
            return;
        }
        
        res.status(200).json(tripData);
        
    } catch (err) {
        res.status(500).json(err);
    }
});