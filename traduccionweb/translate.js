function translatePage() {
  const pageHtml = document.documentElement.outerHTML;
  const langCode = 'hi';
  const apiKey = 'TU_CLAVE_API_DE_GOOGLE_TRANSLATE';

  const apiUrl = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      q: pageHtml,
      target: langCode,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      const translatedHtml = data.data.translations[0].translatedText;
      document.documentElement.innerHTML = translatedHtml;
    })
    .catch((error) => console.error(error));
}

translatePage();
