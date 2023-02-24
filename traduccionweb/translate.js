const fetch = require('node-fetch');

exports.handler = async function (event, context) {
  const pageHtml = event.body;
  const langCode = 'hi';
  const apiKey = process.env.GOOGLE_TRANSLATE_API_KEY;

  const apiUrl = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      q: pageHtml,
      target: langCode,
    }),
  });

  const data = await response.json();

  const translatedHtml = data.data.translations[0].translatedText;

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: translatedHtml,
  };
};
