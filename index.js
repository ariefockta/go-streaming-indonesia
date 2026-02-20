const SwaggerParser = require('@apidevtools/swagger-parser');

async function validateSpec() {
  try {
    const api = await SwaggerParser.validate('openapi.yaml');
    console.log('API validated:', api.info.title);
  } catch (err) {
    console.error('Validation error:', err.message);
  }
}

validateSpec();
