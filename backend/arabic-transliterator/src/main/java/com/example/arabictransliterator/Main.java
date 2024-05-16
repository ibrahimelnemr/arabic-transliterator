package com.example.arabictransliterator;
public class Main {

    public static void main(String[] args) {
        Transliterator transliterator = new Transliterator();
        String defaultArabicWord = "اهلا وسهلا يا غالي";

        String consonantDictionaryPath = transliterator.checkDictionaryFile("Arabic Transliterator - Consonants.csv");
        String diacriticDictionaryPath = transliterator.checkDictionaryFile("Arabic Transliterator - Vowels.csv");

        transliterator.extractConsonantDictionaryFromCsv(consonantDictionaryPath);
        transliterator.extractDiacriticDictionaryFromCsv(diacriticDictionaryPath);

        System.out.println("Default demo word: " + defaultArabicWord);
        System.out.println("Default word transliterated: " + transliterator.transliterateConsonantsOnly(defaultArabicWord));
    }
}