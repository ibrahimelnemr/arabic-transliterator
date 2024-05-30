package com.example.arabictransliterator;

import java.io.BufferedReader;
import java.io.File;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.io.FileReader;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.io.Reader;
import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVRecord;

// import org.springframework.boot.autoconfigure.pulsar.PulsarProperties.Reader;
// import com.opencsv.CSVParser;

public class Transliterator {
    private Map<String, String> arEnConsonantDict;
    private Map<String, String> arEnDiacriticDict;

    public Transliterator() {
        this.arEnConsonantDict = new HashMap<>();
        this.arEnDiacriticDict = new HashMap<>();
    }

    public String checkDictionaryFile(String filename) {

        String pathWithCSV = Paths.get("").toAbsolutePath().getParent().getParent() + File.separator + "files"
                + File.separator + filename;

        boolean fileOfPathWithCsv = new File(pathWithCSV).isFile();

        if (fileOfPathWithCsv) {
            System.out.printf("Dictionary file found with name %s in directory %s\n", filename, pathWithCSV);
            return pathWithCSV;
        } else {
            System.out.println("No file found with name " + filename + " in current or parent of parent directory");
            return "";
        }

    }

    public String removeDiacritics(String character) {
        StringBuilder result = new StringBuilder();
        for (char c : character.toCharArray()) {
            result.append(arEnDiacriticDict.getOrDefault(String.valueOf(c), String.valueOf(c)));
        }
        return result.toString();
    }

    public String getBaseCharacter(String character) {
        while (character.chars().anyMatch(c -> arEnDiacriticDict.keySet().contains(String.valueOf((char) c)))) {
            character = removeDiacritics(character);
        }
        return arEnConsonantDict.getOrDefault(character, character);
    }

    public String transliterateConsonant(String arabicCharacter) {
        return arEnConsonantDict.getOrDefault(arabicCharacter, arabicCharacter);
    }

    public String transliterateDiacritic(String arabicDiacritic) {
        return arEnDiacriticDict.getOrDefault(arabicDiacritic, arabicDiacritic);
    }

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
        printDictionary("Dictionary", dictionary);
    }

    public void extractConsonantDictionaryFromCsv(String csvFilePath) {
        extractDictionaryFromCsv(csvFilePath, arEnConsonantDict);
    }

    public void extractDiacriticDictionaryFromCsv(String csvFilePath) {
        extractDictionaryFromCsv(csvFilePath, arEnDiacriticDict);
    }

    private void printDictionary(String dictionaryName, Map<String, String> dictionary) {
        System.out.println(dictionaryName + ":");
        System.out.println("Arabic\tLatin");
        dictionary.forEach((arabic, latin) -> System.out.println(arabic + "\t" + latin));
    }

    public String transliterateConsonantsOnly(String arabicWord) {
        StringBuilder englishWord = new StringBuilder();
        for (char c : arabicWord.toCharArray()) {
            englishWord.append(transliterateConsonant(String.valueOf(c)));
        }
        return englishWord.toString();
    }
}
