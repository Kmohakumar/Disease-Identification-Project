const fs = require('fs');
const AWS = require('aws-sdk');
const ID = '';
const SECRET = '';

// The name of the bucket that you have created
const BUCKET_NAME = 'test-bucket';

const s3 = new AWS.S3({
    accessKeyId: ID,
    secretAccessKey: SECRET
});
const uploadFile = (fileName) => {
  // Read content from the file
  const fileContent = fs.readFileSync(fileName);

  // Setting up S3 upload parameters
  const params = {
      Bucket: BUCKET_NAME,
      Key: 'cat.jpg', // File name you want to save as in S3
      Body: fileContent
  };

  // Uploading files to the bucket
  s3.upload(params, function(err, data) {
      if (err) {
          throw err;
      }
      console.log(`File uploaded successfully. ${data.Location}`);
  });
};


# from tensorflow.keras.models import load_model
# from tensorflow.keras.preprocessing import image
# import numpy as np
# from flask import Flask, request, jsonify

# # Load the model
# model = load_model('./FV.h5')

# # Define the Flask app
# app = Flask(__name__)

# # Define a route to handle image input
# @app.route('/predict', methods=['POST'])
# def predict():
#     try:
#         # Get the image data from the request
#         file = request.files['image']
#         img = image.load_img(file, target_size=(224, 224))
#         img = image.img_to_array(img)
#         img = np.expand_dims(img, axis=0)

#         # Preprocess the input image
#         img = img / 255.0

#         # Make predictions using the loaded model
#         predictions = model.predict(img)

#         # Return the predictions as JSON
#         return jsonify({'predictions': predictions.tolist()})
#     except Exception as e:
#         print(e)
#         return jsonify({'error': 'An error occurred'})

# # Start the Flask app
# if __name__ == '__main__':
#     app.run(debug=True)






# from fastapi import FastAPI, File, UploadFile
# from tensorflow.keras.models import load_model
# from tensorflow.keras.preprocessing import image
# import numpy as np

# model = load_model('./FV.h5')

# app = FastAPI()
# # img=""
# @app.post('/predict')
# async def predict(image: UploadFile = File(...)):
#     try:
        
#         img = image.file.read()
#         # print(img.shape)

#         img = image.load_img(img, target_size=(224, 224))
#         img = image.img_to_array(img)
#         img = np.expand_dims(img, axis=0)

#         img = img / 255.0

#         predictions = model.predict(img)

#         return {'predictions': predictions.tolist()}
#     except Exception as e:
#         print(e)
#         # print(img.shape)

#         return {'error': 'An error occurred'}





# from fastapi import FastAPI, File, UploadFile
# from tensorflow.keras.models import load_model
# from tensorflow.keras.preprocessing import image
# from PIL import Image
# import numpy as np

# # Load the model
# model = load_model('./FV.h5')

# # Define the FastAPI app
# app = FastAPI()

# # # Define a route to handle image input
# # @app.post('/predict')
# # async def predict(image: UploadFile = File(...)):
# #     try:
# #         # Load the image using PIL
# #         img = Image.open(image.file).convert('RGB')
# #         img = img.resize((224, 224))

# #         # Convert the PIL image to a numpy array
# #         img = np.array(img)

# #         # Preprocess the input image
# #         img = img / 255.0
# #         img = np.expand_dims(img, axis=0)

# #         # Make predictions using the loaded model
# #         predictions = model.predict(img)

# #         # Return the predictions as JSON
# #         return {'predictions': predictions.tolist()}
# #     except Exception as e:
# #         print(e)
# #         return {'error': 'An error occurred'}



@app.post('/predict')
# async def predict(image: UploadFile = File(...)):
#     try:
#         img = Image.open(image.file).convert('RGB')
#         img = img.resize((224, 224))

#         img = np.array(img)

#         img = img / 255.0
#         img = np.expand_dims(img, axis=0)

#         predictions = model.predict(img)

#         class_label = np.argmax(predictions)

#         if class_label == 0:
#             return {'predictions': 'apple'}
#         elif class_label == 1:
#             return {'predictions': 'banana'}
#         elif class_label == 21:
#             return {'predictions': 'orange'}
#         else:
#             return {'predictions': 'unknown'}
#     except Exception as e:
#         print(e)
#         return {'error': 'An error occurred'}


