from flask import Flask, render_template
from google.cloud import translate_v2 as translate

translate_client = translate.Client.from_service_account_json('ruta/al/archivo/de/clave-api.json')


app = Flask(__name__)


def translate_text(text, target_language):
    result = translate_client.translate(text, target_language=target_language)
    return result['translatedText']

  
  
@app.route('/')
def index():
    with open('templates/index.html') as file:
        html = file.read()

    hindi_html = translate_text(html, 'hi')

    return hindi_html


if __name__ == '__main__':
    app.run()
