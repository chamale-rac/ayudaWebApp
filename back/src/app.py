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
db2 = mongo.db.relations

# CREAR


@app.route('/relations', methods=['POST'])
def create_relation():
    id = db2.insert_one({
        'seguidor': request.json['seguidor'],
        'seguido': request.json['seguido']
    })
    return "correct"


@app.route('/users', methods=['POST'])
def create_users():
    id = db.insert_one({
        'creator': request.json['creator'],
        'title': request.json['title'],
        'location': request.json['location'],
        'descrip': request.json['descrip'],
        'file': request.json['file'],
        'ticket1': request.json['ticket1'],
        'ticket2': request.json['ticket2'],
        'sta': request.json['sta'],
        'comments': [["", ""]]


    })
    return "Correct"


# Obtener
@app.route('/relations', methods=['GET'])
def get_relations():
    users = []
    for doc in db2.find():
        users.append({
            '_id': str(ObjectId(doc['_id'])),
            'seguidor': doc['seguidor'],
            'seguido': doc['seguido']
        })
    return jsonify(users)


@app.route('/users', methods=['GET'])
def get_users():
    users = []
    for doc in db.find():
        users.append({
            '_id': str(ObjectId(doc['_id'])),
            'creator': doc['creator'],
            'title': doc['title'],
            'location': doc['location'],
            'descrip': doc['descrip'],
            'file': doc['file'],
            'ticket1': doc['ticket1'],
            'ticket2': doc['ticket2'],
            'sta': doc['sta'],
            'comments': doc['comments']

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
        'descrip': user['descrip'],
        'file': user['file'],
        'ticket1': user['ticket1'],
        'ticket2': user['ticket2'],
        'sta': user['sta']
    })


@app.route('/search/<seguidor>+<seguido>', methods=['GET'])
def search(seguidor, seguido):
    user = db2.find_one({
        'seguidor': seguidor,
        'seguido': seguido
    })
    print(user)
    print("LOL")
    return jsonify({
        '_id': str(ObjectId(user['_id'])),
        'seguidor': user['seguidor'],
        'seguido': user['seguido']
    })


@app.route('/users/<id>', methods=['DELETE'])
def deleteUser(id):
    db.delete_one({'_id': ObjectId(id)})
    return jsonify({'message': 'User Deleted'})


@app.route('/relations/<id>', methods=['DELETE'])
def deleteRelation(id):
    db2.delete_one({'_id': ObjectId(id)})
    return jsonify({'message': 'User Deleted'})


@app.route('/update/<id>', methods=['PUT'])
def addComment(id):
    print(request.json)
    user = db.find_one({'_id': ObjectId(id)})
    allt = user['comments']
    a = [request.json['creator'], request.json['com']]
    allt.append(a)
    db.update_one({'_id': ObjectId(id)}, {"$set": {
        'creator': user['creator'],
        'title': user['title'],
        'location': user['location'],
        'descrip': user['descrip'],
        'file': user['file'],
        'ticket1': user['ticket1'],
        'ticket2': user['ticket2'],
        'sta': user['sta'],
        'comments': allt

    }})
    return jsonify({'message': 'User Updated'})


@app.route('/users/<id>', methods=['PUT'])
def updateUser(id):
    print(request.json)
    db.update_one({'_id': ObjectId(id)}, {"$set": {
        'creator': request.json['creator'],
        'title': request.json['title'],
        'location': request.json['location'],
        'descrip': request.json['descrip'],
        'file': request.json['file'],
        'ticket1': request.json['ticket1'],
        'ticket2': request.json['ticket2'],
        'sta': request.json['sta']
    }})
    return jsonify({'message': 'User Updated'})


'''
def getArray(id):
    user = db.find_one({'_id': ObjectId(id)})
    user = db.find_one_
    print(user)


getArray('619401de0ae3cc34efc91b40')'''


if __name__ == "__main__":
    app.run(debug=True)
