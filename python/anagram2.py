# Don't forget to run the tests (and create some of your own)

def anagrams_for(word, list_of_words):
	output = []
	for element in list_of_words:
		raw1 = element.lower().replace(" ", "")
		raw2 = word.lower().replace(" ", "")
		list1 = []
		list2 = []
		for letter in raw1:
			list1.append(letter)
		for letter in raw2:
			list2.append(letter)
		if sorted(list1) == sorted(list2):
			output.append(element)
	return output
