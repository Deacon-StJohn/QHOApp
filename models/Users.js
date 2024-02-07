const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')
const userSchema = new Schema({
    name: {
        type: String,
        required: true
      },
    username: {
   type: String,
   required: true
 },
  password: {
    type: String,
    required: true
  },
});

userSchema.pre('save', function (next){
  const user=this;
  const salt=15;
  bcrypt.hash(user.password, 15, function (error, hash) {
    user.password = hash
    next()
  } )
})





const Users = mongoose.model('Users', userSchema, 'users');
module.exports = Users;