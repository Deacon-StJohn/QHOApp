const Slots = require('../models/Slots')
module.exports = async(req,res)=>{ 
    const slotItems = await Slots.find();
    //console.log(slotItems)
    res.render('parkYourCar',{slots:slotItems})
}