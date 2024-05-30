package com.example.arabictransliterator;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ArabicTransliteratorApplication {

	public static void main(String[] args) {
		SpringApplication.run(ArabicTransliteratorApplication.class, args);
		
        Transliterator transliterator = new Transliterator();
        String defaultArabicText = "اهلا وسهلا يا غالي";
        String arabicTextWithDiacritics = "أهلاً وسهلاً يا غالي";

        String consonantDictionaryPath = transliterator.checkDictionaryFile("Arabic Transliterator - Consonants.csv");
        String diacriticDictionaryPath = transliterator.checkDictionaryFile("Arabic Transliterator - Vowels.csv");

        transliterator.extractConsonantDictionaryFromCsv(consonantDictionaryPath);
        transliterator.extractDiacriticDictionaryFromCsv(diacriticDictionaryPath);

        System.out.println("Default arabic text: " + defaultArabicText);
        System.out.println("Default text transliterated: " + transliterator.transliterateConsonantsOnly(defaultArabicText));

        System.out.println("Arabic text with diacritics: " + arabicTextWithDiacritics);
        System.out.println("Text with diacritics transliteratedd: " + transliterator.transliterateConsonantsOnly(arabicTextWithDiacritics));
	}

}
