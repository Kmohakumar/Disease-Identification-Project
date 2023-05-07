import requests

url = "http://localhost:8000/predict"

with open("./resized_image.jpg", "rb") as image_file:
    files = {"image": image_file}
    response = requests.post(url, files=files)


print(response.json())
print(response.status_code)
print(response.content)