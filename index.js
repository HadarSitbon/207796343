const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const sql = require('./DB/db.js')
const port = 3000;
const CreateDB = require('./DB/createDB.js');
const CRUD_functions = require("./DB/CRUD_functions.js");
const csv = require('csvtojson');


app.use(express.static('static'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.get('/ContactUs', (req, res) => {
    res.render('ContactUs');
})


app.get('/HomePage', (req, res) => {
    res.render('HomePage');
})

app.get('/OurCompany', (req, res) => {
    res.render('OurCompany');
})

app.get('/OurShows', (req, res) => {
    res.render('OurShows');
})

app.get('/SearchTicket', (req, res) => {
    res.render('SearchTicket');
})

app.get('/SellTickets', (req, res) => {
    res.render('SellTickets');
})

app.get('/SignIn', (req, res) => {
    res.render('SignIn');
})

app.get('/Profile', (req, res) => {
    res.render('Profile');
})


app.get('/SignUp', (req, res) => {
    res.render('SignUp');
})

app.get('/DeleteUser', (req, res) => {
    res.render('DeleteUser');
})


app.get('/', (req, res) => {
    res.redirect("/HomePage");
})

app.listen(port, () => {
    console.log("server is running on port" + port);
})

//CRUD
app.post('/createNewUser', CRUD_functions.createNewUser);
app.post('/createNewTicket', CRUD_functions.createNewTicket);
app.post('/createNewMessage', CRUD_functions.createNewMessage);
app.post('/UpdateUser', CRUD_functions.UpdateUser);
app.post('/DeleteUser', CRUD_functions.DeleteUser);
app.get('/FindUser', CRUD_functions.FindUser);
app.get('/FindTicket', CRUD_functions.FindTicket);



//createDB
//Create Tables

app.get('/CreateTicketForShow', CreateDB.CreateTicketForShow);
app.get('/CreateUser', CreateDB.CreateUser);
app.get('/CreateContactUs', CreateDB.CreateContactUs);

//Show Tables
app.get('/ShowAllUsers', CreateDB.ShowAllUsers);
app.get('/ShowAllTickets', CreateDB.ShowAllTickets);
app.get('/ShowAllMessages', CreateDB.ShowAllMessages);

//Drop Tables
app.get('/DropTicketT', CreateDB.DropTicketT);
app.get('/DropUsersT', CreateDB.DropUsersT);
app.get('/DropMessagesT', CreateDB.DropMessagesT);

//Insert Tables
app.get('/InsertUserData', CreateDB.InsertUserData);
app.get('/InsertTicketData', CreateDB.InsertTicketData);
app.get('/InsertMessageData', CreateDB.InsertMessageData);