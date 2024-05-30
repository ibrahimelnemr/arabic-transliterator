package com.example.arabictransliterator.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.arabictransliterator.Transliterator;

@RestController
public class MainController {

    @Autowired
    private Transliterator transliterator;

    @GetMapping("/")
    public String index() {
        
        System.out.println("request made to base route \"/\"");

        String defaultArabicText = "اهلا وسهلا يا غالي";
        String arabicTextWithDiacritics = "أهلاً وسهلاً يا غالي";

        System.out.println("Default arabic text: " + defaultArabicText);

        System.out.println("Arabic text, consonants only: " + arabicTextWithDiacritics);
        System.out.println("Text with consonant only transliteration: " + transliterator.transliterate(arabicTextWithDiacritics, true));

        System.out.println("Text with diacritics transliterated: " + transliterator.transliterate(arabicTextWithDiacritics));

        return transliterator.transliterate(arabicTextWithDiacritics);

        // return "hello world";
    }
}
