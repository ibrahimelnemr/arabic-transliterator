package scripts;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

public class Transliterator {
    private Map<String, String> arEnConsonantDict;
    private Map<String, String> arEnDiacriticDict;

    public Transliterator() {
        this.arEnConsonantDict = new HashMap<>();
        this.arEnDiacriticDict = new HashMap<>();
    }

    public String checkDictionaryFile(String filename) {
        String currentDirectory = System.getProperty("user.dir");
        String parentDirectory = new File(currentDirectory).getParent();
        String parentOfParentDirectory = new File(parentDirectory).getParent();

        String currentDirectoryFilePath = currentDirectory + File.separator + filename;
        String parentOfParentDirectoryFilePath = parentOfParentDirectory + File.separator + filename;
        if (new File(currentDirectoryFilePath).isFile()) {
            System.out.println("Dictionary file found at " + currentDirectoryFilePath);
            return currentDirectoryFilePath;
        } else if (new File(parentOfParentDirectoryFilePath).isFile()) {
            System.out.println("Dictionary file found at " + parentOfParentDirectoryFilePath);
            return parentOfParentDirectoryFilePath;
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

    public void extractConsonantDictionaryFromCsv(String csvFilePath) {
        try (BufferedReader br = new BufferedReader(new FileReader(csvFilePath))) {
            String line;
            while ((line = br.readLine()) != null) {
                String[] data = line.split(",");
                arEnConsonantDict.put(data[0], data[1]);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        System.out.println("Consonant Dictionary:");
        System.out.println("Arabic\tLatin");
        for (Map.Entry<String, String> entry : arEnConsonantDict.entrySet()) {
            System.out.println(entry.getKey() + "\t" + entry.getValue());
        }
    }

    public void extractDiacriticDictionaryFromCsv(String csvFilePath) {
        try (BufferedReader br = new BufferedReader(new FileReader(csvFilePath))) {
            String line;
            while ((line = br.readLine()) != null) {
                String[] data = line.split(",");
                arEnDiacriticDict.put(data[0], data[1]);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        System.out.println("Diacritic Dictionary:");
        System.out.println("Arabic\tLatin");
        for (Map.Entry<String, String> entry : arEnDiacriticDict.entrySet()) {
            System.out.println(entry.getKey() + "\t" + entry.getValue());
        }
    }

    public String transliterateConsonantsOnly(String arabicWord) {
        StringBuilder englishWord = new StringBuilder();
        for (char c : arabicWord.toCharArray()) {
            englishWord.append(transliterateConsonant(String.valueOf(c)));
        }
        return englishWord.toString();
    }
}
