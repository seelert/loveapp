def fetchData(url):
	file = open(url, "r")
	return file.readlines()
	file.close()

def formatData(data):
	newList = []

	for sentence in data:
		newList.append(sentence.strip());

	return newList

def buildJSON(data):
	start = "[\n"
	end = "]"
	json = start

	for line in data:
		json += "{ \"text\": \"" + line + "\" },\n"


	json = json[:-2]
	json += "\n"
	json += end
	return json




fetch = fetchData("zitate.txt")
print(fetch)

formated = formatData(fetch)
print(formated)

json = buildJSON(formated)
print(json)

f = open("zitate.json", "w")
f.write(json)
f.close()

