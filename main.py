from fastapi import FastAPI, File, UploadFile
from tensorflow.keras.preprocessing import image
from PIL import Image
import numpy as np
import tensorflow_addons as tfa
from tensorflow.keras.metrics import Metric
from tensorflow import keras

# print("hello")
from tensorflow.keras.models import load_model


model = load_model('./FV.h5')
model1 = load_model("./potato_pretrain_model.h5")
# model2 = load_model("./prueba2_mobilenet.h5")
# class_names = ['']*model.output_shape[1]

# class F1Score(Metric):
#     def __init__(self, name='f1_score', **kwargs):
#         super(F1Score, self).__init__(name=name, **kwargs)
#         self.f1_score = tfa.metrics.F1Score(num_classes=2)

#     def update_state(self, y_true, y_pred, sample_weight=None):
#         self.f1_score.update_state(y_true, y_pred, sample_weight=sample_weight)

#     def result(self):
#         return self.f1_score.result()

#     def reset_states(self):
#         self.f1_score.reset_states()

# with keras.utils.custom_object_scope({'F1Score': F1Score}):
#     model2 = load_model("./prueba2_mobilenet.h5")

app = FastAPI()

@app.post('/classify')
async def predict(image: UploadFile = File(...)):
    try:
        
        img = Image.open(image.file).convert('RGB')
        img = img.resize((224, 224))

        img = np.array(img)

        img = img / 255.0
        img = np.expand_dims(img, axis=0)

        predictions = model.predict(img)
        print(predictions)

        predicted_class_index = np.argmax(predictions[0])   
        class_names = ['apple', 'carrot','chilli pepper','cabbage','cabbage','tomato','pomegranate','lettuce','spinach','pear','apple','mango','raddish','watermelon' ,'pear','onion','capsicum','orange','grapes','orange','sweetpotato','orange','orange'] 
        print(predicted_class_index)

        predicted_class_name = class_names[predicted_class_index]

        return {'prediction': predicted_class_name}
    except Exception as e:
        print(e)
        return {'error': 'An error occurred'}


# @app.post('/potato-predict')
# async def predict_potato(image: UploadFile = File(...)):
#     try:
#         # img_resized.save('./orangeResize.jpg')
#         img = Image.open(image.file).convert('RGB')
#         img = img.resize((224, 224))

#         img = np.array(img)

#         img = img / 255.0
#         img = np.expand_dims(img, axis=0)

#         predictions = model1.predict(img)
#         print(predictions)

#         predicted_class_index = np.argmax(predictions[0])   
#         class_names = ['apple', 'carrot','chilli pepper','cabbage','cabbage','tomato','pomegranate','lettuce','spinach','pear','apple','mango','raddish','watermelon' ,'pear','onion','capsicum','orange','grapes','orange','sweetpotato','orange','orange'] 
#         print(predicted_class_index)

#         predicted_class_name = class_names[predicted_class_index]

#         return {'prediction': predicted_class_name}
#     except Exception as e:
#         print(e)
#         return {'error': 'An error occurred'}
    
# @app.post('/apple-predict')
# async def predict_apple(image: UploadFile = File(...)):
#     try:
        
#         img = Image.open(image.file).convert('RGB')
#         img = img.resize((224, 224))

#         img = np.array(img)

#         img = img / 255.0
#         img = np.expand_dims(img, axis=0)

#         predictions = model2.predict(img)
#         print(predictions)

#         predicted_class_index = np.argmax(predictions[0])   
#         class_names = ["Healthy","scab","powdery mildew","complex","Rust","Frog Eye leaf spot"] 
#         print(predicted_class_index)

#         predicted_class_name = class_names[predicted_class_index]

#         return {'prediction': predicted_class_name}
#     except Exception as e:
#         print(e)
#         return {'error': 'An error occurred'}




