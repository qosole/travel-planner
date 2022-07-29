const Location = require('./Location');
const Traveller = require('./Traveller');
const Trip = require('./Trip');


Trip.hasOne(Location, {
  foreignKey: 'location_id',
  onDelete: 'CASCADE',
});

Location.belongsTo(Trip, {
    foreignKey: 'location_id',
  });


Trip.hasMany(Traveller, {
  foreignKey: 'traveller_id',
  onDelete: 'CASCADE',
});

Traveller.belongsTo(Trip, {
  foreignKey: 'traveller_id',
});


module.exports = { Location, Traveller, Trip };
