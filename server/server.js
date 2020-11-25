const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

// Middleware nivel aplicación
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// Routes 
const userRoutes = require('./routes/users');
const tasksRoutes = require('./routes/tasks');

// HTTP Requests
app.use('/users', userRoutes);
app.use('/tasks', tasksRoutes);




 app.get('/api/hello', (req, res) => {
  res.send({ express: 'Get /api/hello desde Express' });
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `Llegó el req por POST. Data enviada por POST: ${req.body.post}`,
  );
});



// Server 
app.listen(port, () => console.log(`Listening on port ${port}`));