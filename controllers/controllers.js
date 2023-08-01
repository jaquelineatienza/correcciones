const ctrlTareas = {};


const Tarea = require('../models/Tarea');


ctrlTareas.obtenerTareas = async (req, res) => {
    try {
        const tareas = await Tarea.findAll({
            where: {
                estado: true,
            }
        });

        if (!tareas || tareas.length === 0) {
            throw ({
                status: 404,
                message: 'No hay tareas registradas'
            })
        }

        return res.json(tareas);
        
    } catch (error) {
        return res.status(error.status || 500).json({
            message: error.message || 'Error interno del servidor'
        });
    }
}
ctrlTareas.crearTareas = async(req,res)=>{
    const{nombre,apellido,codigo}= req.body

    try{
        const tareas = await Tarea.create({
            nombre,
            apellido,
            codigo

        });
        if (!tareas) {
            throw ({
                status: 400,
                message: 'No se pudo crear la reserva'
            })
        }

        return res.json(tarea);
    }catch(error){
        console.log(error);
        return res.status(error.status || 500 ).json(error.message || 'Error interno del servidor');

    }
};
ctrlTareas.actualizarTareas = async (req, res) => {
    const { id } = req.params;
    const { nombre, apellido,codigo } = req.body;
    console.log('Datos recibidos:', req.body);
    console.log('ID de Tarea:', req.params.id);
    try {
        const tareaAcualizada = await Tarea.update({
            nombre,
            apellido,
          
            codigo
        }, {
            where: {
                id:req.params.id,
            }
        });

        if (!tareaAcualizada) {
            throw ({
                status: 400,
                message: 'No se pudo actualizar la Reserva'
            })
        }

        return res.json({
            message: 'Reserva actualizada correctamente',
            tareaAcualizada
            
        });
    } catch (error) {
        return res.status(error.status || 500).json(error.message || 'Error interno del servidor');
    }
}




ctrlTareas.eliminarTareas = async (req, res) => {
    const { id } = req.params;

    try {
        const tareaEliminada = await Tarea.update({
            estado: false
        }, {
            where: {
                id,
                estado: true
            }
        });

        if (!tareaEliminada) {
            throw ({
                status: 400,
                message: 'No se pudo eliminar la reserva'
            })
        }

        return res.json({tareaEliminada, message: 'Reserva eliminada correctamente' });
    } catch (error) {
        return res.status(error.status || 500).json(error.message || 'Error interno del servidor');
    }
}
module.exports = ctrlTareas;