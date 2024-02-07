const Slots = require('../models/Slots')
const path = require('path')
module.exports = async (req,res) => {

   // console.log(req.body)
   let myfile = req.files.myfile;
   myfile.mv[path.resolve(__dirname,'../public/images',myfile.name)]
    Slots.create({

        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        path: '/images/'+myfile.name
    })

          
            res.redirect('/');
        }
