package com.example.arabictransliterator;

import java.io.BufferedReader;
import java.io.File;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.io.FileReader;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.ArrayList;
import java.io.Reader;
import java.util.Optional;
import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVRecord;
import org.springframework.boot.autoconfigure.graphql.GraphQlProperties.Schema.Printer;
import org.springframework.stereotype.Service;

// import org.springframework.boot.autoconfigure.pulsar.PulsarProperties.Reader;
// import com.opencsv.CSVParser;

@Service
public class Transliterator {
    private Map<String, String> arEnConsonantDict = new HashMap<>();
    private Map<String, String> arEnDiacriticDict = new HashMap<>();
    private Map<String, String> arEnGeneralDict = new HashMap<>();

    public Transliterator() {
        String basePath = Paths.get("").toAbsolutePath().getParent().getParent() + File.separator + "files" + File.separator;
        String consonantDictionaryPath = checkDictionaryFile(basePath + "Arabic Transliterator - Consonants.csv");
        String diacriticDictionaryPath = checkDictionaryFile(basePath + "Arabic Transliterator - Vowels.csv");

        extractDictionariesFromCsv(consonantDictionaryPath, diacriticDictionaryPath);
    }

    // check for dictionary file
    public static String checkDictionaryFile(String pathWithCSV) {

        // String pathWithCSV = Paths.get("").toAbsolutePath() + File.separator + filename;

        boolean fileOfPathWithCsv = new File(pathWithCSV).isFile();

        if (fileOfPathWithCsv) {
            System.out.printf("Dictionary file found with in directory %s\n", pathWithCSV);
            return pathWithCSV;
        } else {
            System.out.printf("No dictionary file found in directory %s\n", pathWithCSV);
            return "";
        }
    }

    // extract dictionary from csv
    public void extractDictionaryFromCsv(String csvFilePath, Map<String, String> dictionary) {
        try (Reader reader = new FileReader(csvFilePath);
                CSVParser csvParser = new CSVParser(reader, CSVFormat.DEFAULT.withFirstRecordAsHeader())) {
            for (CSVRecord record : csvParser) {
                String arabic = record.get("Arabic");
                String latin = record.get("Latin");
                dictionary.put(arabic, latin);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        // printDictionary("Dictionary", dictionary);
    }

    // extract all dictionaries from csv
    public void extractDictionariesFromCsv(String consonantsCsvFilePath, String diacriticsCsvFilePath) {
        extractDictionaryFromCsv(consonantsCsvFilePath, arEnConsonantDict);
        extractDictionaryFromCsv(diacriticsCsvFilePath, arEnDiacriticDict);
        extractDictionaryFromCsv(consonantsCsvFilePath, arEnGeneralDict);
        extractDictionaryFromCsv(diacriticsCsvFilePath, arEnGeneralDict);
    }

    // print the dictionary
    private void printDictionary(String dictionaryName, Map<String, String> dictionary) {
        System.out.println(dictionaryName + ":");
        System.out.println("Arabic\tLatin");
        dictionary.forEach((arabic, latin) -> System.out.println(arabic + "\t" + latin));
    }

    // transliterate one character
    public String transliterateCharacter(String arabicLetter, Map<String, String> dictionary) {
        return dictionary.getOrDefault(arabicLetter, "");
    }

    // transliterate arabic text
    public String transliterate(String arabicText, boolean consonantOnly) {
        Map<String, String> dictionary;
        ArrayList<String> arabicWords = new ArrayList<>();
        ArrayList<String> englishWords = new ArrayList<>();

        if (consonantOnly) {
            dictionary = arEnConsonantDict;
        } else {
            dictionary = arEnGeneralDict;
        }

        for (String word : arabicText.split(" ")) {
            arabicWords.add(word);
        }

        for (String arabicWord : arabicWords) {
            StringBuilder temp = new StringBuilder();

            for (char letter : arabicWord.toCharArray()) {
                temp.append(transliterateCharacter(String.valueOf(letter), dictionary));
            }

            englishWords.add(temp.toString());
        }
        return String.join(" ", englishWords);
    }

    // transliterate consonants and diacritics (set consonantOnly to false)
    public String transliterate(String arabicText) {
        return transliterate(arabicText, false);
    }

}
