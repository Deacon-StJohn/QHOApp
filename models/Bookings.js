const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bookingsSchema = new Schema({
 "customerName": String,
  "timeLength": Number,
  "parkingSlot": Number,
  "email": String
});

const Bookings = mongoose.model('Bookings', bookingsSchema, 'bookings');
module.exports = Bookings;