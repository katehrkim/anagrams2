# Can you translate this driver code to unit tests?
import unittest
from anagram2 import anagrams_for 

list_of_words = ["threads", "trashed", "hardest", "hatreds", "hounds"]

class Anagram2TestCase(unittest.TestCase):
    """Tests for anagram2.py"""
    def test_one(self):
        self.assertEqual(anagrams_for("threads", list_of_words), ["threads", "trashed", "hardest", "hatreds"])
    def test_two(self):
        self.assertEqual(anagrams_for("apple", list_of_words), [])

if __name__ == '__main__':
    unittest.main()
