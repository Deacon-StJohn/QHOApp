
const Slots = require('../models/Slots')
module.exports = async (req,res) => {
    const slotItems = [
             {name: 'Watch', price: 50, path: ''},
             {name: 'Ring', price: 60, path: ''}
            ]
            const newSlots = new Slots(slotItems)
          // await Slots.insertMany(slotItems)
          await Slots.deleteMany()
            res.send('Succesfully added');
        }