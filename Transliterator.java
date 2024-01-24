import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;


public class Transliterator {

    private static Map<Character, Character> arEnConsonantDict = new HashMap<>();
    private static Map<Character, Character> arEnDiacriticDict = new HashMap<>();

    static {
        
        arEnConsonantDict.put('ب', 'b');

        
        arEnDiacriticDict.put('\u064E', '\u0301'); // fathah to acute accent
        arEnDiacriticDict.put('\u0651', '\u0304'); // shaddah to macron
    }

    public static String removeDiacritics(String str) {
        StringBuilder result = new StringBuilder();
        for (char c : str.toCharArray()) {
            result.append(arEnDiacriticDict.getOrDefault(c, c));
        }
        return result.toString();
    }

    public static char getBaseCharacter(char c) {
        final char[] result = { c }; // Temporary variable

        while (arEnDiacriticDict.keySet().stream().anyMatch(diacritic -> String.valueOf(result[0]).contains(String.valueOf(diacritic)))) {
            result[0] = removeDiacritics(String.valueOf(result[0])).charAt(0);
        }
        return arEnConsonantDict.getOrDefault(result[0], result[0]);
    }

    public static char transliterateConsonant(char arabicChar) {
        return arEnConsonantDict.getOrDefault(arabicChar, arabicChar);
    }

    public static char transliterateDiacritic(char arabicDiacritic) {
        return arEnDiacriticDict.getOrDefault(arabicDiacritic, arabicDiacritic);
    }

    public static void extractConsonantDictionaryFromCsv(String csvFilePath) {
        try (BufferedReader reader = new BufferedReader(new FileReader(csvFilePath))) {
            String line;
            while ((line = reader.readLine()) != null) {
                String[] parts = line.split(",");
                if (parts.length == 2) {
                    arEnConsonantDict.put(parts[0].charAt(0), parts[1].charAt(0));
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        System.out.println("Dictionary:");
        System.out.println("Arabic\tLatin");
        for (Map.Entry<Character, Character> entry : arEnConsonantDict.entrySet()) {
            System.out.println(entry.getKey() + "\t" + entry.getValue());
        }
    }

    public static String transliterate(String arabicWord) {
        StringBuilder englishEquivalent = new StringBuilder();
        for (char c : arabicWord.toCharArray()) {
            englishEquivalent.append(getBaseCharacter(c));
        }
        return englishEquivalent.toString();
    }

    public static String transliterateConsonantsOnly(String arabicWord) {
        StringBuilder englishWord = new StringBuilder();
        for (char c : arabicWord.toCharArray()) {
            englishWord.append(transliterateConsonant(c));
        }
        return englishWord.toString();
    }

    public static void main(String[] args) {
        String arabicWordDiacritics = "بَّ";
        String arabicWordConsonantsOnly = "اهلا وسهلا يا غالي";

        extractConsonantDictionaryFromCsv("Dictionary.csv");

        // Simulating user input
        String arabicWordInput = "بَّ";
        if (arabicWordInput != null && !arabicWordInput.isEmpty()) {
            System.out.println("You entered: " + arabicWordInput);
            System.out.println("The transliteration of the word you entered is: " + transliterateConsonantsOnly(arabicWordInput));
        } else {
            System.out.println("You did not enter a word. Transliterating default word.");
        }

        System.out.println("Transliterating arabic word with consonants only");
        System.out.println("Original word: " + arabicWordConsonantsOnly);
        System.out.println("Transliterated: " + transliterateConsonantsOnly(arabicWordConsonantsOnly));
    }
}
