const Bookings = require('../models/Bookings')
const path = require('path')
module.exports = async (req,res) => {

   //console.log(req.body)
   
    Bookings.create({

        customerName: req.body.customerName,
        timeLength: req.body.timeLength,
        parkingSlot: req.body.parkingSlot,
        email: req.body.email
        
    })

          
            res.redirect('/');
        }
