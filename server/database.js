const mongoose = require('mongoose');

const URI = 'mongodb://localhost/PH-APP';

mongoose.connect(URI,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports=mongoose;