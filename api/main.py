from flask import Flask
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS

from routes.user import user1,user2,user3,user4

app = Flask(__name__)
CORS(app)
api = Api(app)


api.add_resource(user1,"/user1") #&2
api.add_resource(user2,"/user2") #&2
api.add_resource(user3,"/user3") #&2
api.add_resource(user4,"/user4") #&2

if __name__ == "__main__":
	app.run(debug=True,port=5000,host='0.0.0.0')