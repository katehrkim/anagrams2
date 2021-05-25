// Can you translate this driver code to unit tests?

const ana = require("./anagram2"),
listOfWords = ["threads", "trashed", "hardest", "hatreds", "hounds"];

test('one', () => {
  expect(ana("threads", listOfWords).length).toEqual(4);
});

test('two', () => {
  expect(ana("threads", listOfWords)[0]).toEqual("threads");
});

test('three', () => {
  expect(ana("threads", listOfWords)[1]).toEqual("trashed");
});

test('four', () => {
  expect(ana("threads", listOfWords)[2]).toEqual("hardest");
});

test('five', () => {
  expect(ana("threads", listOfWords)[3]).toEqual("hatreds");
});

test('six', () => {
  expect(ana("apple", listOfWords).length).toEqual(0);
});
