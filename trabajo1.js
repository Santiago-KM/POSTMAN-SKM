const express = require('express');
const app = express();

const PORT = 4000;

app.use(express.json());

let tareas=[
    {id:1,accion:'Ver la tele'},
    {id:2,accion:'Jugar videojuegos'},
    {id:3,accion:'Leer un libro'},
    {id:4,accion:'Cepillarse los dientes'},
    {id:5,accion:'Bañarse'},
];

app.get('/tareas',(req,rest)=>{
    rest.json(tareas);
})

app.get('/tareas', (req,rest)=>{
    const id = parseInt (req.params.id);
    const tarea = tareas.find(e=>e.id===id);
    
    if (tarea){
        rest,json(tarea);
    } else {
        rest.status(404).send('Tarea no encontrada');
    }
})

app.post('/tareas',(req,res)=>{
    const nuevaTarea = {
        id: tareas.length + 1,
        accion:req.body.accion    
}
// 201 = a que fue creado
    tareas.push(nuevaTarea);  
    res.status(201).json(nuevaTarea);
});

/* {
    "accion": "Hacer ejercicio"
}
*/


app.put('/tareas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const tarea = tareas.find(e => e.id === id);
    if (tarea) {
        tarea.accion = req.body.accion;
        res.json(tarea);
    } else {
        res.status(404).send('Tarea no encontrada');
    }
});

/* 
http://localhost:5000/tareas/3

{
    "accion": "Estudiar programación"
}
*/

app.delete('/tareas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = tareas.findIndex(e => e.id === id);
    if (index !== -1) {
        tareas.splice(index, 1);
        res.send('Tarea eliminada');
    } else {
        res.status(404).send('Tarea no encontrada');
    }
});

/* Solo es necesario con el id en la ruta
http://localhost:5000/tareas/3
*/

app.listen(PORT,() =>{
    console.log('Servidor corriendo en http://localhost:${PORT}');
})