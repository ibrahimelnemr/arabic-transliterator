# coding: utf-8
from __future__ import print_function

import csv

class Transliterator:

    ar_en_consonant_dict = {
        u'\u0628': 'b',               # ب to "b
    }

    ar_en_diacritic_dict = {
        u'\u064E': u'\u0301',          # fathah to acute accent
        u'\u0651': u'\u0304',          # shaddah to macron
    }
    
    @classmethod
    def remove_diacritics(cls, char):
        return u''.join(cls.ar_en_diacritic_dict.get(c, c) for c in char)
    
    @classmethod
    def get_base_character(cls, char):
        while any(diacritic in char for diacritic in cls.ar_en_diacritic_dict):
            char = cls.remove_diacritics(char)
        return cls.ar_en_consonant_dict.get(char, char)

    
    @classmethod
    def transliterate_diacritic(cls, arabic_diacritic):
        return cls.ar_en_diacritic_dict.get(arabic_diacritic, arabic_diacritic)

    @classmethod
    def transliterate(cls, arabic_word):
        english_equivalent = u''.join(cls.get_base_character(char) for char in arabic_word)
        
        return english_equivalent
    
    @classmethod
    def transliterate_consonant(cls, arabic_char):
        return cls.ar_en_consonant_dict.get(arabic_char, arabic_char)
    
    @classmethod
    def transliterate_consonants_only(cls, arabic_word):
        english_word = u''.join(cls.transliterate_consonant(char) for char in arabic_word)
        print(english_word)
        return english_word    

    @classmethod
    def extract_consonant_dictionary_from_csv(cls, csv_file_path):
        with open(csv_file_path, 'rb') as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                arabic_char = row['Arabic'].decode('utf-8')
                latin_char = row['Latin'].decode('utf-8')
                cls.ar_en_consonant_dict[arabic_char] = latin_char
        print("Dictionary:")
        print("Arabic\tLatin")
        for arabic_char, latin_char in cls.ar_en_consonant_dict.items():
            print(u"{}\t{}".format(arabic_char, latin_char))


def main():
    arabic_word_diacritics = u"بَّ"

    arabic_word_consonants_only = u"اهلا وسهلا يا غالي"

    Transliterator.extract_consonant_dictionary_from_csv("Dictionary.csv")

    arabic_word_input = raw_input("Enter an arabic word: ")
    
    arabic_word_input_unicode = unicode(arabic_word_input, 'utf-8')

    if arabic_word_input != "":
        print(u"You entered: {}".format(arabic_word_input_unicode))
        
        print("Raw input:"+arabic_word_input_unicode)

        print("Starting transliteration")
        Transliterator.transliterate_consonants_only(arabic_word_input_unicode)
        print("Transliterated")
        
        print(u"The transliteration of the word you entered is: {}".format(Transliterator.transliterate_consonants_only(arabic_word_input_unicode)))
    else:
        print("You did not enter a word. Transliterating default word.")

    print("Transliterating arabic word with consonants only")
    print(arabic_word_consonants_only)
    
    print(u"Original word: {}".format(arabic_word_consonants_only))

    print(u"Transliterated: {}".format(Transliterator.transliterate_consonants_only(arabic_word_consonants_only)))

main()
