const express = require('express');

const routerProgramacion = express.Router();



const { programacion } = require('../datos/cursos.js').infoCursos;



routerProgramacion.get('/', (req, res) => {
    res.send(JSON.stringify(programacion));
});

routerProgramacion.get('/:lenguaje', (req, res) => {
    const lenguaje = req.params.lenguaje;
  
    const resultados = programacion.filter(cursos => cursos.lenguaje === lenguaje);
    if (resultados.length === 0) {
        return res.status(404).send(`no se encontraron cursos con este lenguaje ${lenguaje}`);
    }
    res.send(JSON.stringify(resultados));
})

routerProgramacion.get('/:lenguaje/:nivel', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;

    const resultados = programacion.filter(cursos => cursos.lenguaje === lenguaje && cursos.nivel === nivel) ;
    if (resultados.length === 0) {
        return res.status(404).send(`no se encontraron cursos con este lenguaje ${lenguaje} de nivel ${nivel}`);
    }
    res.send(JSON.stringify(resultados));
})

module.exports = routerProgramacion;