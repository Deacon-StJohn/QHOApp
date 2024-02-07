const Slots = require('../models/Slots')

module.exports = async (req,res) => {

    // console.log(req.params.id)
          const result = await Slots.findById(req.params.id)
 
          // res.redirect('/shop')
           res.render('updateSlotForm', {slot: result})

         }