const express = require('express');
const morgan = require('morgan');
const app = express();

const { mongoose } = require('./database');

//settings

//configuracion del servidor
app.set('port', process.env.PORT || 3000)

//middlewares
app.use(morgan('dev'))
app.use(express.json())

//routes
//app.use(require('./routes/HomePage'));
app.use('/user',require('./routes/user.routes'))
//app.use(require('./routes/Notification'))
app.use('/activity', require('./routes/activity.routes'))
app.use('/message' ,require('./routes/message.routes'))
//app.use(require('./routes/Payments'))
app.use('/reservation',require('./routes/reservation.routers'))



//starting server 
app.listen(app.get('port'), () =>{
    console.log(`Server on port ${app.get('port')}`);  
})