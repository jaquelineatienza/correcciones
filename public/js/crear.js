const nuevaTarea = document.querySelector('#nuevaTarea')
nuevaTarea.addEventListener('submit',async(e)=>{
        e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const codigo = document.getElementById('codigo').value;

      

    if (!nombre || !apellido || !codigo) {
        Swal.fire({
            icon: 'error',
            title: 'Campos requeridos',
            text: 'Por favor, completa todos los campos requeridos.'
        });
        return;
    }

    const nuevaTarea ={
        nombre,
        apellido,
        codigo
    };

    try{
        const res = await fetch(`http://localhost:3005/api/tareas/create`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',

            },
            body:JSON.stringify(nuevaTarea)

        });
        const data = await res.json();
        console.log({data});

        Swal.fire({
            icon:'success',
            title:'tarea creada',
            text:'la tarea fue creada correctamente'
        })
        setTimeout(()=>{
            window.location.href ='/tareas';
        },2000);

      
    }catch(error){
        console.log(error);
        Swal.fire({
            icon:'error',
            title:'error',
            text:error.message
        })
    }
});
