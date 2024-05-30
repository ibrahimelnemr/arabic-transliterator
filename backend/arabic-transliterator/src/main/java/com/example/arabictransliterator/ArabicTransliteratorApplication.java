package com.example.arabictransliterator;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.File;
import java.nio.file.Paths;

@SpringBootApplication
public class ArabicTransliteratorApplication {

	public static void main(String[] args) {
		SpringApplication.run(ArabicTransliteratorApplication.class, args);
		

        String defaultArabicText = "اهلا وسهلا يا غالي";
        String arabicTextWithDiacritics = "أهلاً وسهلاً يا غالي";

        String consonantDictionaryFileName = "Arabic Transliterator - Consonants.csv";
        String diacriticDictionaryFileName = "Arabic Transliterator - Vowels.csv";
        
        String basePath = Paths.get("").toAbsolutePath().getParent().getParent() + File.separator + "files" + File.separator;

        String consonantDictionaryPath = Transliterator.checkDictionaryFile(basePath + consonantDictionaryFileName);
        String diacriticDictionaryPath = Transliterator.checkDictionaryFile(basePath + diacriticDictionaryFileName);

        System.out.println("checked dictionary files");
        Transliterator transliterator = new Transliterator(consonantDictionaryPath, diacriticDictionaryPath);

        System.out.println("Default arabic text: " + defaultArabicText);

        System.out.println("Arabic text, consonants only: " + arabicTextWithDiacritics);
        System.out.println("Text with consonant only transliteration: " + transliterator.transliterate(arabicTextWithDiacritics, true));

        System.out.println("Text with diacritics transliterated: " + transliterator.transliterate(arabicTextWithDiacritics));
	}

}
