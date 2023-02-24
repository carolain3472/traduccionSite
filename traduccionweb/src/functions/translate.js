const {Translate} = require('@google-cloud/translate').v2;
const translate = new Translate();

exports.handler = async (event, context) => {
  const {text} = JSON.parse(event.body);
  const [translation] = await translate.translate(text, 'hi');
  return {
    statusCode: 200,
    body: JSON.stringify({translation})
  };
};
