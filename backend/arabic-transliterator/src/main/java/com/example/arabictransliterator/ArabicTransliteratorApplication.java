package com.example.arabictransliterator;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ArabicTransliteratorApplication {

	public static void main(String[] args) {
		SpringApplication.run(ArabicTransliteratorApplication.class, args);
		
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
