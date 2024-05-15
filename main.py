from Transliterator import Transliterator 
import os

def main():
    transliterator = Transliterator()
    default_arabic_word = "اهلا وسهلا يا غالي"

    consonant_dictionary_path = transliterator.check_dictionary_file("Arabic Transliterator - Consonants.csv")
    diacritic_dictionary_path = transliterator.check_dictionary_file("Arabic Transliterator - Vowels.csv")
    
    transliterator.extract_consonant_dictionary_from_csv(consonant_dictionary_path)
    transliterator.extract_diacritic_dictionary_from_csv(diacritic_dictionary_path)

    print(f"Default demo word: {default_arabic_word}")
    print(f"Default word transliterated: {transliterator.transliterate_consonants_only(default_arabic_word)}")

main()