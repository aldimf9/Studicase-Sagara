const express = require('express');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/routeTasks');
const userRoutes = require('./routes/routeUser');


const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/tasks', taskRoutes);
app.use('/users', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
