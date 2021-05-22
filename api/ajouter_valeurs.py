def ajouter_Utilisateurs(user,nom,mycursor,mydb):
	val = (user,nom)
	try:
		mycursor.execute("INSERT INTO Utilisateurs (user,nom) VALUES ("+",".join(["%s"]*len(val))+")", val)
	except Exception as e:
		return {"statut":False,"erreur":"pas reussi a insert into"}
	try:
		mydb.commit()
	except:
		return {"statut":False,"erreur":"pas reussi a commit"}
	return {"statut":True}

