const express = require('express'); 
const cors = require('cors');
const bodyParser = require('body-parser');
const {connectDB} = require('./db.js');

const app = express();

const PORT = 3001;

/* Manejador de JSON */
app.use(express.json());
/* Manejador de rutas cors */
app.use(cors());
app.use(bodyParser.json())

/* Conectar a la base de datos */
connectDB();

/* Rutas de acceso */
require('./routes/user')(app);
require('./routes/order')(app)

app.listen(PORT, ()=> {
    console.log(`Servidor levantado en el puerto ${PORT}`)
});

