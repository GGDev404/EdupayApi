import swaggerAutogen from 'swagger-autogen';
const outputFile = './src/swagger-output.json'
const endpointsFiles = ['./src/routes/UsersRoutes.js','./src/routes/GradesRoutes.js','./src/routes/PeriodosRoutes.js','./src/routes/GruposRoutes.js']
const doc = {
    info: {
      title: 'Edupay Api',
      description: 'Api para el servicio de la aplicacion edupay'
    },
    host: 'localhost:2077/api'
  };

swaggerAutogen(outputFile, endpointsFiles, doc)