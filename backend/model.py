# import cv2
# import numpy as np
# import tensorflow as tf

# # Load your trained model
# model = tf.keras.models.load_model("defect_aerothon_final.h5")

# # Function to enhance and resize image
# def enhance_resize_image(image, target_size=(128, 128)):
#     # Convert to float32 and normalize
#     image = tf.image.convert_image_dtype(image, tf.float32)
#     # Apply sharpening filter
#     kernel = np.array([[0, -1, 0], [-1, 5,-1], [0, -1, 0]])
#     image = cv2.filter2D(np.array(image * 255, dtype=np.uint8), -1, kernel)
#     # Resize image
#     image = tf.image.resize(image, target_size)
#     return image

# def preprocess_image(image):
#     """
#     Preprocess the input image to the format required by your model.
#     """
#     # Enhance and resize the image
#     image = enhance_resize_image(image)
    
#     # Add a batch dimension
#     image = tf.expand_dims(image, axis=0)
    
#     return image

# def detect_fault(image):
#     """
#     Detect faults using the loaded machine learning model.
#     """
#     # Preprocess the image
#     processed_image = preprocess_image(image)
    
#     # Run inference
#     predictions = model.predict(processed_image)
    
#     # Process the predictions to generate a description
#     # This will depend on your specific model and task
#     # Here, we'll assume the model output is a simple description string
    
#     # Example: converting model output to a description
#     description = f"Detected fault with confidence: {predictions[0]}"
    
#     return description




import numpy as np
from tensorflow.keras.models import load_model
import tensorflow as tf
import cv2

def scale_resize_image(image):
    if image.mode == 'RGBA':
        image = image.convert('RGB')
    image = tf.image.convert_image_dtype(image, tf.float32)
    image = tf.image.resize(image, (128,128))
    image /= 255.0
    image = np.expand_dims(image, axis=0)
    return (image)


def prediction(image,model):
    output_map = ['crack','Dent']
    pred  = model.predict(image)
    val = pred.flatten()
    conf = val[np.argmax(pred)] * 100
    predictions = output_map[np.argmax(pred)]
    return predictions,conf

def read_img(file_path):
    img = cv2.imread(file_path)
    return img

model = load_model('defect_aerothon_final.h5')

# def detect_fault(image):
#     scal = scale_resize_image(image)
#     pred = prediction (scal, model)
#     # print('Model has identified {0} in Aircraft with {1} % confidence'.format(pred[0],pred[1]))
#     description = 'Model has identified {0} in Aircraft with {1} % confidence'.format(pred[0],pred[1])
#     return description


def detect_fault(image):
    scal = scale_resize_image(image)

    pred = prediction (scal, model)
    # print('Model has identified {0} in Aircraft with {1} % confidence'.format(pred[0],pred[1]))
    confidence = pred[1]
    if confidence >= 85:
        problem_level = 'High problem. Repair rework as to be followed along with recalculation of factor of safety of the components using analytical and FEM methods. The reserve factor should be greater than 1 after the component has absorbed the impact from dent.'
    elif 70 <= confidence < 85:
        problem_level = 'Intermediate problem. The dent should be given a smooth contour through machining process to match the contour of the actual component without damaging the part.'
    else:
        problem_level = 'Low problem. Therefore, No repair necessary. The dent is acceptable without any repair.'
        
    # description = 'Model has identified {0} in Aircraft with {1} % confidence'.format(pred[0],pred[1])
    description = 'Model has identified {0} in Aircraft with {1:.2f}% confidence ({2})'.format(pred[0], confidence, problem_level)
    return description




