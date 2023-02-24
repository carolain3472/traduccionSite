const translate = require('@vitalets/google-translate-api');

exports.handler = async function(event, context) {
  const { queryStringParameters } = event;
  const { text } = queryStringParameters;
  
  try {
    const result = await translate(text, { to: 'hi' });
    return {
      statusCode: 200,
      body: JSON.stringify({ result: result.text })
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Translation failed' })
    }
  }
}
