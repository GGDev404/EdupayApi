import swaggerAutogen from 'swagger-autogen';
const outputFile = './src/swagger-output.json'
const endpointsFiles = ['./src/routes/UsuariosRoutes.js','./src/routes/Grados.routes.js']

swaggerAutogen(outputFile, endpointsFiles)