function translatePage() {
  const pageHtml = document.documentElement.outerHTML;
  const langCode = 'hi';
  const apiKey = 'AIzaSyBYKa3s4NaaaDwy8r9xLwQM7OBmL97zdlU';

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
