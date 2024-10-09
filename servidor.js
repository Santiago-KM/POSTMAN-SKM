//Imprtar modulo de express para el servidor
const express = require('express');
const app = express();

//Comunicacion al puerto
const PORT = 3000;
//Esto sirve para que el sevidor procese todas las peticiones en formato json
app.use(express.json());
/*
//Definicion de ruta como peticion
app.get('/api/greet',(req,rest)=>{
    //Esta es la respuesta a la peticon
    rest.json({message: 'Esta es la primer API'});
})

// Iniciar servidor

app.listen(PORT,() =>{
    console.log('Servidor corriente en http://localhost:$PORT');
})
*/

//Creacion de listas en formato de arreglo
app.use (express.json());
let estudiantes=[
    {id:1,nombre:'Juan Perez'},
    {id:2,nombre:'Monica Gomez'},
    {id:3,nombre:'Jose Ruiz'},
];
// GET:Obtener todos los estudiantes

app.get('/estudiantes',(req,rest)=>{
    rest.json(estudiantes);
})

//GET: Obtener un estudiante por ID

app.get('/estudiantes', (req,rest)=>{
    const id = parseInt (req.params.id);
    const estudiante = estudiantes.find(e=>e.id===id);
    
    if (estudiante){
        rest,json(estudiante);
    } else {
        rest.status(404).send('Estudiante no encontrado');
    }
})

//METODO POST
//POST.Crear un nuevo estudiante

app.post('/estudiantes',(req,res)=>{
    const nuevoEstudiante = {
        id:estudiantes.lenght + 1,
        nombre:req.body.nombre    
}
// 201 = a que fue creado
estudiantes.push(nuevoEstudiante);
res.status(201).json(nuevoEstudiante);
});


/*
//Metodo PUT Sintaxis 
// Actualizar un nombre existente por ID
app.put('/estudiantes/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const estudiante=estudiantes.find(e=>e.id===id);
    if(estudiante){
        estudiante.nombre=req.body.nombre;
        res.json(estudiante);
    }else{
        res.status(404).send('Estudiante no encontrado');
    }
});
*/
app.put('/estudiantes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const estudiante = estudiantes.find(e => e.id === id);
if (estudiante) {
    estudiante.nombre = req.body.nombre;
    res.json(estudiante);
} else {
    res.status(404).send('Estudiante no encontrado');
}
});

//Delete: eliminar un item por ID

app.delete('/estudiantes/:id', (req, res) => {
    const id = parseInt (req.params,id);
    const index = estudiantes.findIndex(e => e.id === id);
    if (estudiante == -1){
        estudiantes.splice(index, 1);
        res.send('Estudiante eliminado');
    } else {
        res.status(404).send('Estudiante no encontrado');
    }
});

app.listen(PORT,() =>{
    console.log('Servidor corriente en http://localhost:$PORT');
})