// Imports
const express = require('express')
const app = express() 
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const chalk =require('chalk');

const Port = 8000

// DotENV Confing
dotenv.config({ path: './env'})

// Static files
app.use(express.static('assets'))
app.use('/css', express.static(__dirname + 'assets/css'))
app.use('/js', express.static(__dirname + 'assets/js'))
app.use('/images', express.static(__dirname + 'assets/images')) 
// Auth Css/Jss/Image
app.use('/auth/css', express.static(__dirname + '/assets/css'))
app.use('/auth/js', express.static(__dirname + '/assets/js'))
app.use('/auth/images', express.static(__dirname + '/assets/images'))

app.set('view engine', 'hbs')

//Encoded
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

// Define Routes
app.use('/', require('./routes/pages')); 
app.use('/auth', require('./routes/auth')); 


// App listening on specified port
app.listen(Port, () => {
    console.log(chalk.green.bold.inverse(`Server is running at http://localhost:${Port}`));
});

