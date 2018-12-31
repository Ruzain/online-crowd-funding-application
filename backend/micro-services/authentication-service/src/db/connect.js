<<<<<<< HEAD
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/authenction-service', { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', (error)=> { console.log(error); });
db.once('open', ()=> {
    console.log("App and mongoDb are connected succefully" );//+ $'date');

});
=======
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/authenction-service', { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', (error)=> { console.log(error); });
db.once('open', ()=> {
    console.log("App and mongoDb are connected succefully" );//+ $'date');

});
>>>>>>> 9ccc97cea3050b9f0f5f81a332f5e35036aaa049
