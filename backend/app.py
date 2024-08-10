from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from PIL import Image
import os
import io
import model
import model2


app = Flask(__name__)
CORS(app, supports_credentials=True, resources={r"/detect": {"origins": "*"}}, origins="*")



@app.route('/detect', methods=['POST'])
@cross_origin(supports_credentials=True)
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


@app.route('/detect2', methods=['POST'])
@cross_origin(supports_credentials=True)
def detect_fault2():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'})
    
    file = request.files['file']
    
    if file.filename == '':
        return jsonify({'error': 'No selected file'})
    
    if file:
        image = Image.open(io.BytesIO(file.read()))
        description = model2.detect_fault2(image)
        return jsonify({'description': description})





if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)