const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override')
const app = express();
const port = process.env.PORT || 5000;

 

// Middleware nivel aplicación
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({secret: 'Tareamania', resave: false, saveUninitialized: true}));
app.use(cookieParser());
app.use(methodOverride('_method'));


// Routes 
const userRoutes = require('./routes/users');
const tasksRoutes = require('./routes/tasks');

// HTTP Requests
app.use('/users', userRoutes);
app.use('/tasks', tasksRoutes);




// Server 
app.listen(port, () => console.log(`Listening on port ${port}`));