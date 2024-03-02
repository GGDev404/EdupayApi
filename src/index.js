
import express from 'express'
import UsersRoutes from "./routes/UsersRoutes.js"
import authRoutes from "./routes/login.js"
import GradesRoutess from "./routes/GradesRoutes.js"
import swaggerAutogen from 'swagger-autogen';
import periodosroutes from './routes/PeriodosRoutes.js';
import GruposRoutes from './routes/GruposRoutes.js';


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

app.use(`/api`,UsersRoutes)
app.use(`/api`, authRoutes)
app.use(`/api`, GradesRoutess)
app.use(`/api`, periodosroutes)
app.use('/api', GruposRoutes )

app.use('/uploads', express.static('/src/uploads'));




app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerDocument));

app.listen(2077)
console.log('server on port ', 2077);