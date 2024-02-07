const Slots = require('../models/Slots')
const path = require('path')

module.exports = async (req, res) => {
    console.log(req.body);
    console.log(req.files);

    if (!req.files) {
        await Slots.updateOne({ _id: req.body._id }, {
            name: req.body.name,
            price: req.body.price,
            description: req.body.description
        })
    } else {

        let myfile = req.files.myfile;
        myfile.mv[path.resolve(__dirname,'../public/images',myfile.name)]


        await Slots.updateOne({ _id: req.body._id }, {
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            path: '/images/'+myfile.name
        })    }

        res.redirect('/');
}
