from flask import Flask, render_template, request, jsonify
from pymongo import MongoClient
from chat import get_response

app = Flask(__name__)

# Connecting to PyMongo client
# client = MongoClient("mongodb+srv://admin:admin@drthouse.qalor9c.mongodb.net/?retryWrites=true&w=majority")
# database = client.database
# collections = database.intents

@app.get("/")
def index_get():
    print("The website is running in http://127.0.0.1:5000/")
    return render_template("base.html")

@app.post("/predict")
def predict():
    text = request.get_json().get("message")
    response = get_response(text)
    message = {"answer": response}
    return jsonify(message)


if __name__ == "__main__":
    app.run(debug=True) 