import swaggerAutogen from 'swagger-autogen';
const outputFile = './swagger_output.json'
const endpointsFiles = ['./src/routes/UsuariosRoutes.js']

swaggerAutogen(outputFile, endpointsFiles)