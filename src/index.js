
import express from 'express'
import UsuariosRoutes from "./routes/UsuariosRoutes.js"
import authRoutes from "./routes/auth.js"
import swaggerAutogen from 'swagger-autogen';

import swaggerUi from 'swagger-ui-express';
import fs from 'fs';

const swaggerDocument = JSON.parse(fs.readFileSync('./src/swagger-output.json', 'utf-8'));




const doc = {
    info: {
      title: 'Edupay Api',
      description: 'Api para el servicio de la aplicacion edupay'
    },
    host: 'localhost:2077/api'
  };



const app = express()


app.use(express.json())

app.use(`/api`,UsuariosRoutes)
app.use(`/api`, authRoutes)

const outputFile = './swagger-output.json';
const routes = ['./routes/UsuariosRoutes.js'];

swaggerAutogen()(outputFile, routes, doc);

app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerDocument));

app.listen(2077)
console.log('server on port ', 2077);