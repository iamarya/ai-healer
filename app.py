import json
from flask import Flask, request, jsonify
import chat

print("In module products __package__, __name__ ==", __package__, __name__)

app = Flask(__name__, static_url_path='/static')

@app.route('/chat', methods=['POST'])
def talk():
    print(request.json)
    record = request.json
    response = chat.say(record["message"])
    print("response ", response)
    return jsonify({'message': response})

app.run(debug=True)


