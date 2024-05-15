import csv
import os

class Transliterator:

    def __init__(self):
        self.ar_en_consonant_dict = {}
        self.ar_en_diacritic_dict = {}

    def check_dictionary_file(self, filename):
        current_directory = os.getcwd()
        parent_directory = os.path.abspath(os.path.join(current_directory, os.pardir))
        parent_of_parent_directory = os.path.abspath(os.path.join(parent_directory, os.pardir))

        current_directory_file_path = os.path.join(current_directory, filename)
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

    def remove_diacritics(self, char):
        return ''.join(self.ar_en_diacritic_dict.get(c, c) for c in char)
    
    def get_base_character(self, char):
        while any(diacritic in char for diacritic in self.ar_en_diacritic_dict):
            char = self.remove_diacritics(char)
        return self.ar_en_consonant_dict.get(char, char)
    
    def transliterate_consonant(self, arabic_char):
        return self.ar_en_consonant_dict.get(arabic_char, arabic_char)
    
    def transliterate_diacritic(self, arabic_diacritic):
        return self.ar_en_diacritic_dict.get(arabic_diacritic, arabic_diacritic)
    
    def extract_consonant_dictionary_from_csv(self, csv_file_path):
        with open(csv_file_path, newline='', encoding='utf-8') as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                arabic_char = row['Arabic']
                latin_char = row['Latin']
                self.ar_en_consonant_dict[arabic_char] = latin_char
        print("Consonant Dictionary:")
        print("Arabic\tLatin")
        for arabic_char, latin_char in self.ar_en_consonant_dict.items():
            print(f"{arabic_char}\t{latin_char}")
        
    def extract_diacritic_dictionary_from_csv(self, csv_file_path):
        with open(csv_file_path, newline='', encoding='utf-8') as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                arabic_char = row['Arabic']
                latin_char = row['Latin']
                self.ar_en_diacritic_dict[arabic_char] = latin_char
        print("Diacritic Dictionary:")
        print("Arabic\tLatin")
        for arabic_char, latin_char in self.ar_en_diacritic_dict.items():
            print(f"{arabic_char}\t{latin_char}")


    def transliterate_consonants_only(self, arabic_word):
        english_word = ''.join(self.transliterate_consonant(char) for char in arabic_word)
        
        return english_word    

