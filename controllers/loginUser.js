const Users = require('../models/Users');
const path = require('path');
const bcrypt = require('bcrypt');

module.exports = async (req, res) => {
    const user = await Users.findOne({ username: req.body.username });
    if (user) {
        const encryptedPassword = user.password;
        const unencryptedPassword = req.body.password;
        console.log('valid user');
        bcrypt.compare(unencryptedPassword, encryptedPassword, (error, same) => {
            if (same) {
                console.log('user login successfully');
                req.session.userid = user._id;
                res.redirect('/');
            } else {
                console.log('Invalid Username');
                res.render('LogInForm', {
                    invalidUserError: null,
                    invalidUserPassword: 'Invalid Password'
                });
            }
        });
    } else {
        //console.log('Invalid Username');
        res.render('LogInForm', {
            invalidUserError: 'Invalid User',
            invalidUserPassword: 'Invalid Password'
        });
    }
     //res.redirect('/');
};
