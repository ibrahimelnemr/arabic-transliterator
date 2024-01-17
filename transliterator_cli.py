
ar_en_consonant_dict = {
    'ب': 'b',               # ب to "b
}

ar_en_diacritic_dict = {
    '\u064E': '\u0301',          # fathah to acute accent
    '\u0651': '\u0304',          # shaddah to macron
}



arabic_word = "بَّ"

def remove_diacritics(char):
    return ''.join(ar_en_diacritic_dict.get(c, c) for c in char)

def get_base_character(char):
    while any(diacritic in char for diacritic in ar_en_diacritic_dict):
        char = remove_diacritics(char)
    return ar_en_consonant_dict.get(char, char)

english_equivalent = ''.join(get_base_character(char) for char in arabic_word)
print(english_equivalent)
