from flask import Flask, request, jsonify
from flask_cors import CORS
from PIL import Image
import io
import model

app = Flask(__name__)
CORS(app, resources={r"/detect": {"origins": "*"}})

@app.route('/detect', methods=['POST'])
def detect_fault():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'})
    
    file = request.files['file']
    
    if file.filename == '':
        return jsonify({'error': 'No selected file'})
    
    if file:
        image = Image.open(io.BytesIO(file.read()))
        description = model.detect_fault(image)
        return jsonify({'description': description})

if __name__ == '__main__':
    app.run(debug=True)
