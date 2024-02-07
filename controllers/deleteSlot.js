
const Slots = require('../models/Slots')
module.exports = async (req,res) => {
    console.log(req.params.id)
   await Slots.deleteOne({_id: req.params.id})

          res.redirect('/shop')
        }