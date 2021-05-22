import requests
url = "http://127.0.0.1:1234/"

def testeur(route,arguments,type_):
	global url
	if type_ == "get":
		response = requests.get(url+route,arguments)
	if type_ == "put":
		response = requests.put(url+route,arguments)
	if type_ == "post":
		response = requests.post(url+route,arguments)
	if type_ == "delete":
		response = requests.delete(url+route,arguments)
	return response.json()


##############################   user   ##############################

s = testeur("user1",{"user":"string","nom":"string"},"post")
print(s)

s = testeur("user2",{"nom":"string"},"post")
print(s)

s = testeur("user3",{"user":"string"},"post")
print(s)

s = testeur("user4",{"user":"string","nom":"string"},"post")
print(s)

