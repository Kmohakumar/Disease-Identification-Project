from PIL import Image

img = Image.open('./download1111.jpeg')


img_resized = img.resize((224, 224))
print(img_resized)

img_resized.save('./orangeResize.jpg')

