const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const slotSchema = new Schema({
    name: {
        type: String,
        required: true
      },
    price: {
   type: Number,
   required: true
 },
 path: {
    type: String,
   
  },
  description: {
    type: String,
    required: false
  },
});

const Slots = mongoose.model('Slots', slotSchema, 'slots');
module.exports = Slots;