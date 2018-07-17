
const express = require('express');
const app = express();
const hbs = require('hbs');
// helpers
require('./hbs/helpers');

const port = process.env.PORT || 3000;

// middleware para hacer una carpeta publica y esa sera usada y servir los archivos
app.use( express.static( __dirname+'/public') );

// Express HBS engine
hbs.registerPartials( __dirname+ '/views/parciales' );
app.set('view engine','hbs');




// direccionamiento
app.get('/', (req,res)=>{

    res.render('home',{
        nombre:'Rolando',
        anio: new Date().getFullYear()
    });
});

app.get('/about', (req,res)=>{

    res.render('about',{
        anio: new Date().getFullYear()
    });
});

app.listen(port, () =>{
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});