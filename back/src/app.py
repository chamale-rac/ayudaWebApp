# .\venv\Scripts\acti
from flask import Flask, request, jsonify
from flask_pymongo import PyMongo, ObjectId
from flask_cors import CORS

from bson import ObjectId

app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb+srv://cls:holaholahola@ayudawebappcluster.0rl3k.mongodb.net/events_db?retryWrites=true&w=majority&ssl=true&ssl_cert_reqs=CERT_NONE'
mongo = PyMongo(app)

CORS(app)

db = mongo.db.event_records

# CREAR


@app.route('/users', methods=['POST'])
def create_users():
    id = db.insert_one({
        'creator': request.json['creator'],
        'title': request.json['title'],
        'location': request.json['location'],
        'descrip': request.json['descrip']
    })
    return jsonify(str(ObjectId(id)))


# Obtener


@app.route('/users', methods=['GET'])
def get_users():
    users = []
    for doc in db.find():
        users.append({
            '_id': str(ObjectId(doc['_id'])),
            'creator': doc['creator'],
            'title': doc['title'],
            'location': doc['location'],
            'descrip': doc['descrip']
        })
    return jsonify(users)


@app.route('/users/<id>', methods=['GET'])
def getUser(id):
    user = db.find_one({'_id': ObjectId(id)})
    print(user)
    return jsonify({
        '_id': str(ObjectId(user['_id'])),
        'creator': user['creator'],
        'title': user['title'],
        'location': user['location'],
        'descrip': user['descrip']
    })


@app.route('/users/<id>', methods=['DELETE'])
def deleteUser(id):
    db.delete_one({'_id': ObjectId(id)})
    return jsonify({'message': 'User Deleted'})


@app.route('/users/<id>', methods=['PUT'])
def updateUser(id):
    print(request.json)
    db.update_one({'_id': ObjectId(id)}, {"$set": {
        'title': request.json['title'],
        'location': request.json['location'],
        'descrip': request.json['descrip']
    }})
    return jsonify({'message': 'User Updated'})


if __name__ == "__main__":
    app.run(debug=True)
