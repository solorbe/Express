const express = require('express');
const app = express();

const { infoCursos } = require('./datos/cursos.js');

//router
const routerProgramacion = require('./routers/programacion.js');
app.use('/cursos/programacion', routerProgramacion);

const routerMatematicas = require('./routers/matematicas.js');
app.use('/cursos/matematicas', routerMatematicas);

//routing
app.get('/', (req, res) => {
    res.send('Mi primer servidor en express ');
});

app.get('/cursos', (req, res) => {
    res.send(JSON.stringify(infoCursos));
});

const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando el puerto ${PUERTO}`);
})
