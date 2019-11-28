require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');

//Inicializaciones
const app = express();
require('./database');

//configuracion
app.set('port',process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
const storage = multer.diskStorage({
    destination: path.join(__dirname,'publica/subidas'),
    filename(req, file, cb){
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
})
app.use(multer({storage}).single('image'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Rutas
app.use('/api/libros',require('./rutas/libros'));

//Archivos estaticos
app.use(express.static(path.join(__dirname,'publica')));

//iniciar el servidor
app.listen(app.get('port'),()=>{
    console.log('Server on port', app.get('port'));
})
