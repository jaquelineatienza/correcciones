// TODO: Importar el modelo y controladores de reservas, luego vincular rutas con controladores
const express = require('express');
const router = express.Router();
const { eliminarTareas, actualizarTareas, obtenerTareas, crearTareas} = require('../controllers/controllers')

// ==========================================
//         Rutas para renderizar vistas
// ==========================================

//vista General
router.get('/tareas',(req,res)=>{
    res.render('index')
})
//Vista Crear

router.get('/tareas/create',(req,res)=>{
    res.render('crear')
})
//vista editar
router.get('/tareas/editar/:id', (req, res) => {
    res.render('editar', { id: req.params.id });
});








// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
router.get('/api/tareas/', obtenerTareas);
// Formulario para crear una reserva

router.post('/api/tareas/create',  crearTareas);
// Formulario para actualizar una reserva

router.put('/api/tareas/editar/:id', actualizarTareas);
// Formulario para eliminar una reserva 

router.delete('/api/tareas/:id', eliminarTareas);

 
 
 module.exports = router;