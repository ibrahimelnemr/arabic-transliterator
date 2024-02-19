import csv
import os
import sys

def test_function():
    return f"this is running from the python script test function. current working directory is {os.getcwd()} and current file is {os.path.abspath(__file__)}" 

class TestClass:
    def test_class_function(self):
        return f"this is running from the python script class, TestClass, running test_class_function. current working directory is {os.getcwd()} and current file is {os.path.abspath(__file__)}"

class Transliterator:

    ar_en_consonant_dict = {
        'ب': 'b',               # ب to "b
    }

    ar_en_diacritic_dict = {
        '\u064E': '\u0301',          # fathah to acute accent
        '\u0651': '\u0304',          # shaddah to macron
    }
    
    @classmethod
    def check_dictionary_file(filename):
        current_directory = os.getcwd()
        parent_directory = os.path.abspath(os.path.join(current_directory, os.pardir))
        parent_of_parent_directory = os.path.abspath(os.path.join(parent_directory, os.pardir))

        current_directory_file_path = os.path.join(current_directory, filename)
        parent_directory_file_path = os.path.join(parent_directory, filename)
        parent_of_parent_directory_file_path = os.path.join(parent_of_parent_directory, filename)
        if os.path.isfile(current_directory_file_path):
            print(f"Dictionary file found at {current_directory_file_path}")
            return current_directory_file_path
        elif os.path.isfile(parent_of_parent_directory_file_path):
            print(f"Dictionary file found at {parent_of_parent_directory_file_path}")
            return parent_of_parent_directory_file_path 
        else:
            print(f"No file found with name {filename} in current or parent of parent directory")
            return ""
    
    @classmethod
    def remove_diacritics(cls, char):
        return ''.join(cls.ar_en_diacritic_dict.get(c, c) for c in char)
    
    @classmethod
    def get_base_character(cls, char):
        while any(diacritic in char for diacritic in cls.ar_en_diacritic_dict):
            char = cls.remove_diacritics(char)
        return cls.ar_en_consonant_dict.get(char, char)
    
    @classmethod
    def transliterate_consonant(cls, arabic_char):
        return cls.ar_en_consonant_dict.get(arabic_char, arabic_char)
    
    @classmethod
    def transliterate_diacritic(cls, arabic_diacritic):
        return cls.ar_en_diacritic_dict.get(arabic_diacritic, arabic_diacritic)

    
    @classmethod
    def extract_consonant_dictionary_from_csv(cls, csv_file_path):
        with open(csv_file_path, newline='', encoding='utf-8') as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                arabic_char = row['Arabic']
                latin_char = row['Latin']
                cls.ar_en_consonant_dict[arabic_char] = latin_char
        print("Consonant Dictionary:")
        print("Arabic\tLatin")
        for arabic_char, latin_char in cls.ar_en_consonant_dict.items():
            print(f"{arabic_char}\t{latin_char}")

    @classmethod
    def extract_diacritic_dictionary_from_csv(cls, csv_file_path):
        with open(csv_file_path, newline='', encoding='utf-8') as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                arabic_char = row['Arabic']
                latin_char = row['Latin']
                cls.ar_en_diacritic_dict[arabic_char] = latin_char
        print("Diacritic Dictionary:")
        print("Arabic\tLatin")
        for arabic_char, latin_char in cls.ar_en_diacritic_dict.items():
            print(f"{arabic_char}\t{latin_char}")


    @classmethod
    def transliterate(cls, arabic_word):
        english_equivalent = ''.join(cls.get_base_character(char) for char in arabic_word)
        
        return english_equivalent
    
    @classmethod
    def transliterate_consonants_only(cls, arabic_word):
        english_word = ''.join(cls.transliterate_consonant(char) for char in arabic_word)
        
        return english_word
    

def main():
    print("Starting transliterator")
    arabic_word_diacritics = "بَّ"

    arabic_word_consonants_only = "اهلا وسهلا يا غالي"

    print(f"Current directory: {os.getcwd()}")

    consonant_dictionary_path = Transliterator.check_dictionary_file("Dictionary.csv")
    

    Transliterator.extract_consonant_dictionary_from_csv(consonant_dictionary_path)

    # arabic_word_input = input("Enter an arabic word: ")
    arabic_word_input = ""

    if arabic_word_input != "":
        print(f"You entered: {arabic_word_input}")
        print(f"The transliteration of the word you entered is: {Transliterator.transliterate_consonants_only(arabic_word_input)}")
    else:
        print("You did not enter a word. Transliterating default word.")

    print("Transliterating arabic word with consonants only")

    print(f"Original word: {arabic_word_consonants_only}")

    print(f"Transliterated: {Transliterator.transliterate_consonants_only(arabic_word_consonants_only)}")

main()