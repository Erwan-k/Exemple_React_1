from flask_restful import Api, Resource, reqparse
import os
from sqlalchemy.engine.url import make_url
import mysql.connector

def getMysqlConnection():
	url = make_url(os.getenv('DATABASE_URL'))
	mydb = mysql.connector.connect(host=url.host,user=url.username,passwd=url.password,database=url.database)
	return mydb

def mycursor_execute(sql,mycursor):
	try:
		mycursor.execute(sql)
		return {"statut":True}
	except Exception as e:
		return {"statut":False,"erreur":e}

def mycursor_fetchall(mycursor):
	try:
		s = mycursor.fetchall()
		return {"statut":True,"retour":s}
	except Exception as e:
		return {"statut":False,"erreur":e}

def mydb_commit(mydb):
	try:
		mydb.commit()
		return {"statut":True}
	except Exception as e:
		return {"statut":False,"erreur":e}

from ajouter_valeurs import *


user1_post_args = reqparse.RequestParser()
user1_post_args.add_argument("user",type=str,required=True)
user1_post_args.add_argument("nom",type=str,required=True)
user2_post_args = reqparse.RequestParser()
user2_post_args.add_argument("nom",type=str,required=True)
user3_post_args = reqparse.RequestParser()
user3_post_args.add_argument("user",type=str,required=True)
user4_post_args = reqparse.RequestParser()
user4_post_args.add_argument("user",type=str,required=True)
user4_post_args.add_argument("nom",type=str,required=True)

class user1(Resource):
	def post(self): #aj_user
		body = user1_post_args.parse_args()
		[user,nom] = [body[i] for i in body]
		mydb = getMysqlConnection()
		mycursor = mydb.cursor()

		ajouter_Utilisateurs(user,nom,mycursor,mydb)

		mycursor.close()
		mydb.close()

		return {"retour":"ok"}


class user2(Resource):
	def post(self): #recup_user
		body = user2_post_args.parse_args()
		[nom] = [body[i] for i in body]
		mydb = getMysqlConnection()
		mycursor = mydb.cursor()

		mycursor.execute("SELECT user,nom FROM Utilisateurs")
		resultat = [{"user":i[0],"nom":i[1]} for i in mycursor.fetchall()]

		mycursor.close()
		mydb.close()

		return {"retour":"ok","valeurs":resultat}


class user3(Resource):
	def post(self): #suppr_user
		body = user3_post_args.parse_args()
		[user] = [body[i] for i in body]
		mydb = getMysqlConnection()
		mycursor = mydb.cursor()

		mycursor.execute("DELETE FROM Utilisateurs WHERE user = \""+user+"\"")
		mydb.commit()

		mycursor.close()
		mydb.close()

		return {"retour":"ok"}


class user4(Resource):
	def post(self): #edit_user
		body = user4_post_args.parse_args()
		[user,nom] = [body[i] for i in body]
		mydb = getMysqlConnection()
		mycursor = mydb.cursor()

		mycursor.execute("UPDATE Utilisateurs SET nom = \""+nom+"\"")
		mydb.commit()

		mycursor.close()
		mydb.close()

		return {"retour":"ok"}


