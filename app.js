const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const { sequelize } = require('./database/db');
const { Sequelize } = require('sequelize');
const app = express(); // Corregido

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
require('ejs');
app.set('view engine', 'ejs'); // Corregido
app.use(require('./routes/routes'));

sequelize.authenticate()
    .then(() => console.log('Conexion a la base de datos exitosa'))
    .catch((error) => console.log('Error al conectar a la base de datos'))

const port = process.env.PORT || 3000;

// TODO: Si la petición no coincide con ninguna de las rutas declaradas, mostrar error 404
app.use((req, res, next) => {
    res.write(`<div>
        <h1>404 - Ruta no encontrada</h1>
        <hr>
        <p>La pagina que intentas buscar no existe</p>
        <p>Redireccionando a la página de inicio...</p>
        <script>
        (
          () => setTimeout(() => {
            window.location.href='http://localhost:${port}/tareas';
           }, 3000)           
        )();
        </script>
    </h1>`)
});

app.listen(port, () => console.log(`servidor corriendo en http://localhost:${port}/tareas`));
