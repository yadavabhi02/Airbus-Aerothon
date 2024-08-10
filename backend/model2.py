from tensorflow.keras.models import load_model
import tensorflow as tf
import os
import cv2
import numpy as np
tf.compat.v1.logging.set_verbosity(tf.compat.v1.logging.ERROR)

model2=load_model('section_finalll.h5')# change model location

# def scale_resize_image(image):
#     image = tf.image.convert_image_dtype(image, tf.float32)
#     image = tf.image.resize(image, (128,128))
#     image /= 255.0
#     image = np.expand_dims(image, axis=0)
#     return (image)
def scale_resize_image(image):
    if image.mode == 'RGBA':
        image = image.convert('RGB')
    image = tf.image.convert_image_dtype(image, tf.float32) 
    image = tf.image.resize(image, (64,64)) 
    image=image/255.0
    image = np.expand_dims(image, axis=0)
    return (image)



def detect_fault2(image):
    img=scale_resize_image(image)
    pred2=model2.predict(img)
    model_map=['Engine_Nacelle','Fuselage','Nose','Wings']
    description = "The model has predicted image as :",model_map[np.argmax(pred2)]
    return description
