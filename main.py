from Transliterator import Transliterator 
import os

def main():
    transliterator = Transliterator()
    default_arabic_word = "اهلا وسهلا يا غالي"

    consonant_dictionary_path = transliterator.check_dictionary_file("Consonants.csv")
    modified_consonant_dictionary_path = transliterator.check_dictionary_file("ModifiedConsonants.csv")
    diacritic_dictionary_path = transliterator.check_dictionary_file("Vowels.csv")
    
    transliterator.extract_consonant_dictionary_from_csv(consonant_dictionary_path)
    transliterator.extract_diacritic_dictionary_from_csv(diacritic_dictionary_path)

    # arabic_word_input = input("Enter an arabic word: ")
    # arabic_word_input = ""

    # if arabic_word_input != "":
    #     print(f"You entered: {arabic_word_input}")
    #     print(f"The transliteration of the word you entered is: {Transliterator.transliterate_consonants_only(arabic_word_input)}")
    # else:
    #     print("You did not enter a word. Transliterating default word.")
        



main()