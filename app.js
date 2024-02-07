const express = require('express')
const path = require('path')
const app = express()
const ejs = require('ejs')
app.set('view engine','ejs')
app.use(express.static('public'))

//express sessions
const session = require('express-session')
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
  }))

  const dotenv = require('dotenv')
  dotenv.config();
 // console.log(process.env.PORT)


const fileUload = require('express-fileupload')
app.use(fileUload())
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
const mongoose = require('mongoose')
//mongoose.connect('mongodb://127.0.0.1/gift_store').then(()=>{
   // console.log('connection successfull')
//});
//let mongodb_uri = process.env.MONGODB_URI_LOCAL
let mongodb_uri = process.env.MONGODB_URI_ATLAS
mongoose.connect(mongodb_uri).then(()=>{
    console.log('connection successfull')
    
});

const  Slots = require('./models/Slots')
const  Bookings = require('./models/Bookings')

//global var
global.loggedin= null;
app.use('/',(req,res,next)=> { 
    loggedin = req.session.userid;
    console.log(loggedin);
    next()
})

const homeController = require('./controllers/home')
app.get('/',homeController)

//app.get('/',(req,res)=> { 
//    console.log(`Received request method = ${req.method}, and URL = ${req.url}`);
//    res.render('index')
//})

const shopController = require('./controllers/shop')
app.get('/shop',shopController)

const bookButtonController = require('./controllers/bookButton')
app.post('/bookButton',bookButtonController)

const bookWithUsController = require('./controllers/bookWithUs')
app.post('/bookWithUs',bookWithUsController)

const userRegistrationFormController = require('./controllers/userRegistrationForm')   
app.get('/userRegistrationForm',userRegistrationFormController) 

const parkYourCarController = require('./controllers/parkYourCar')   
app.get('/parkYourCar',parkYourCarController) 

const loginFormController = require('./controllers/loginForm')   
app.get('/loginForm',loginFormController) 

const newSlotFormController = require('./controllers/newSlotForm')   
app.get('/new/slotForm',newSlotFormController)

const bookWithUsFormController = require('./controllers/bookWithUsForm')   
app.get('/bookWithUsForm',bookWithUsFormController) 

const slotValidationMiddleware = (req, res, next) => {
    if (
        req.body.name == null ||
        req.body.price == null ||
        req.files.myfile == null ||
        req.body.description == null
    ) {
        console.log("Sorry, all the fields are mandatory");
        return res.redirect('/new/slotForm');
    }
    next();
};

app.use('/addNewSlot',slotValidationMiddleware)



const addNewSlotController = require('./controllers/addNewSlot')   
app.post('/addNewSlot',addNewSlotController)  

const registerUserController = require('./controllers/registerUser')   
app.post('/registerUser',registerUserController) 

const loginUserController = require('./controllers/loginUser')   
app.post('/loginUser',loginUserController) 

const logoutController = require('./controllers/logout')   
app.get('/logout',logoutController)

const addSlotsController = require('./controllers/addSlots')
app.get('/addSlots',addSlotsController)

const deleteSlotsController = require('./controllers/deleteSlot')
app.get('/slot/delete/:id',deleteSlotsController)

const updateSlotFormController = require('./controllers/updateSlotForm')
app.get('/updateSlotForm/:id',updateSlotFormController)

const updateSlotController = require('./controllers/updateSlot')
app.post('/updateSlot',updateSlotController)  



const getSlotsController = require('./controllers/getSlots')
app.get('/getSlots',getSlotsController)

const testimonialController = require('./controllers/testimonial')
app.get('/testimonial',testimonialController)


const whyController = require('./controllers/why')
app.get('/why',whyController)

const contactController = require('./controllers/contact')
app.get('/contact',contactController)

const bookingValidationMiddleware = (req, res, next) => {
    const { customerName, timeLength, parkingSlot, email } = req.body;

    if (!customerName || !timeLength || !parkingSlot || !email) {
        console.log("Sorry, all the fields are mandatory");
        return res.redirect('bookWithUsForm');
    }
    next();
};

app.use(bookingValidationMiddleware);


const port =process.env.PORT;
const hostname = process.env.HOSTNAME;

app.listen(port, () => {
    console.log("welcome to my shop")


})