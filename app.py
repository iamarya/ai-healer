import json
from flask import Flask, request, jsonify

app = Flask(__name__, static_url_path='/static')

@app.route('/chat', methods=['POST'])
def chat():
    print(request.json)
    record = request.json
    return jsonify({'message': record["message"]})

app.run(debug=True)


