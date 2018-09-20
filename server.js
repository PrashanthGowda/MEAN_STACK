const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysqlConnection = require('./server/db-conn');
 
const employeeRouter = require('./server/routes/employee');



mysqlConnection.connect();

app.use(cors());
app.use('/api/employees', employeeRouter);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(path.join(__dirname, 'dist/mean-client')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/mean-client/index.html'));
  }); 


app.listen(3625, function () {
    console.log('Node app is running on port 3625');
});