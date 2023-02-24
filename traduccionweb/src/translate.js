const apiKey = process.env.GOOGLE_TRANSLATE_API_KEY;

const translateContent = async () => {
  const originalContent = document.documentElement.innerHTML;
  const response = await fetch(`https://translation.googleapis.com/language/translate/v2?key=${apiKey}`, {
    method: "POST",
    body: JSON.stringify({
      q: originalContent,
      target: "hi"
    }),
    headers: {
      "Content-Type": "application/json"
    }
  });
  const translatedContent = await response.json();
  document.documentElement.innerHTML = translatedContent.data.translations[0].translatedText;
};

translateContent();
