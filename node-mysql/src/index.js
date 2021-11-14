///Me quedat min 20

const express = require('express');
const morgan = require('morgan');

//Initializations
const app = express();

//Settings
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(morgan('dev'));

//Global Variables


//Routes
app.use(require('./routes/'));

//Public

//Starting the Server
//npm run dev
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
