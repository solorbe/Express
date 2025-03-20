const express = require('express');
const app = express();

const { infoCursos } = require('./cursos.js');

//router
const routerProgramacion = express.Router();
app.use('/cursos/programacion', routerProgramacion);

console.log(routerProgramacion);

const routerMatematicas = express.Router();
app.use('/cursos/matematicas', routerMatematicas);

//routing
app.get('/', (req, res) => {
    res.send('Mi primer servidor en express ');
});

app.get('/cursos', (req, res) => {
    res.send(JSON.stringify(infoCursos));
});

routerProgramacion.get('/', (req, res) => {
    res.send(JSON.stringify(infoCursos.programacion));
});

routerProgramacion.get('/:lenguaje', (req, res) => {
    const lenguaje = req.params.lenguaje;
  
    const resultados = infoCursos.programacion.filter(cursos => cursos.lenguaje === lenguaje);
    if (resultados.length === 0) {
        return res.status(404).send(`no se encontraron cursos con este lenguaje ${lenguaje}`);
    }
    res.send(JSON.stringify(resultados));
})

routerProgramacion.get('/:lenguaje/:nivel', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;

    const resultados = infoCursos.programacion.filter(cursos => cursos.lenguaje === lenguaje && cursos.nivel === nivel) ;
    if (resultados.length === 0) {
        return res.status(404).send(`no se encontraron cursos con este lenguaje ${lenguaje} de nivel ${nivel}`);
    }
    res.send(JSON.stringify(resultados));
})

routerMatematicas.get('/', (req,res) => {
    res.send(JSON.stringify(infoCursos.matematicas));
})

routerMatematicas.get('/:tema', (req, res) => {
    const tema = req.params.tema;
  
    const resultados = infoCursos.matematicas.filter(cursos => cursos.tema === tema);
    if (resultados.length === 0) {
        return res.status(404).send(`no se encontraron cursos con este tema ${tema}`);
    }
    res.send(JSON.stringify(resultados));
})



const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando el puerto ${PUERTO}`);
})