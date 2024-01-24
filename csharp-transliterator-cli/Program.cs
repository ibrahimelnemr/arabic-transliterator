using IronPython.Hosting;
using Microsoft.Scripting.Hosting;

class Program
{
    static void Main()
    {
        var engine = Python.CreateEngine();
        var scope = engine.CreateScope();
        string pythonCode = "print('Hello from IronPython!')";
        engine.Execute(pythonCode, scope);
        try
        {
            // Load and execute the Python script
            engine.ExecuteFile("Transliterator.py", scope);
            
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error executing Python script: {ex.Message}");
        }

        // string arabicWordDiacritics = "بَّ";
        // string arabicWordConsonantsOnly = "اهلا وسهلا يا غالي";

        // Transliterator.ExtractConsonantDictionaryFromCsv("../Dictionary.csv");

        // Console.Write("Enter an Arabic word: ");
        // string arabicWordInput = Console.ReadLine();

        // if (!string.IsNullOrEmpty(arabicWordInput))
        // {
        //     Console.WriteLine($"You entered: {arabicWordInput}");
        //     Console.WriteLine($"The transliteration of the word you entered is: {Transliterator.TransliterateConsonantsOnly(arabicWordInput)}");
        // }
        // else
        // {
        //     Console.WriteLine("You did not enter a word. Transliterating default word.");
        // }

        // Console.WriteLine("Transliterating Arabic word with consonants only");
        // Console.WriteLine($"Original word: {arabicWordConsonantsOnly}");
        // Console.WriteLine($"Transliterated: {Transliterator.TransliterateConsonantsOnly(arabicWordConsonantsOnly)}");
    }
}
