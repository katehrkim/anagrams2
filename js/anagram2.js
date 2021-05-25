function anagramsFor(word, listOfWords) {
  let output = [];
  for (let m = 0; m < listOfWords.length; ++m) {
    let raw1 = listOfWords[m].toLowerCase().split(" ").join("");
    let raw2 = word.toLowerCase().split(" ").join("");
    let list1 = [];
    let list2 = [];
    for (let i = 0; i < raw1.length; ++i) {
      list1.push(raw1[i]);
    }
    for (let j = 0; j < raw2.length; ++j) {
      list2.push(raw2[j]);
    }
    list1.sort();
    list2.sort();
    if (list1.length == list2.length) {
      let counter = 0;
      for (let k = 0; k < list1.length; ++k) {
        if (list1[k] == list2[k]) {
          ++counter;
        }
      }
      if (counter == list1.length) {
        output.push(listOfWords[m]);
      }
    }
  }
  return output;
};

module.exports = anagramsFor

