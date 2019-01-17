//const mongoose = require('mongoose');

//const URI = 'mongodb://localhost/PH-APP';

//ongoose.connect(URI,{
  //  useCreateIndex: true,
   // useNewUrlParser: true,
   // useFindAndModify: false
//})
  //  .then(db => console.log('DB is connected'))
    //.catch(err => console.error(err));

//module.exports=mongoose;

const mysql = require('mysql');


const config={
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'example_node',
    port: 3306
};

const pool = mysql.createPool(config);
//conection.connect((errorr) =>{
 //   if(errorr){
   //     throw errorr;
   // }else{
    //    console.log('conexion correcta');
   // }
//})z
module.exports= pool;