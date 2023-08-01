const formEditar = document.getElementById('formEditar');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const codigo = document.getElementById('codigo');

// Escuchar el evento submit
formEditar.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log("Enviando formulario...");

    const url = window.location.href;
    const parts = url.split('/');
    const id = parts[parts.length - 1];

    const data = {
        nombre: nombre.value,
        apellido: apellido.value,
    
        codigo: codigo.value
    };

    try {
        const response = await fetch(`http://localhost:3005/api/tareas/editar/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    
        const respToJson = await response.json();
    
        if (response.status !== 201 && response.status !== 200) {
            const errorMessage = respToJson && respToJson.message ? respToJson.message : 'Hubo un error al procesar la solicitud';
            Swal.fire({
                icon: 'error',
                title: errorMessage,
            });
            return;
        }
    
        Swal.fire({
            icon: 'success',
            title: 'Reserva actualizada con éxito',
            text: respToJson && respToJson.reservaActualizada ? respToJson.reservaActualizada.message : 'Reserva actualizada con éxito',
        });
    
        console.log(respToJson);
        setTimeout(() => {
            window.location.href = '/tareas';
        }, 2000);
    
    } catch (error) {
        console.log(error);
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Ha ocurrido un error al enviar el formulario'
        });
    }
});