using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using CsvHelper;
using System.Globalization;
using System.Text;

public class Transliterator
{
    private static Dictionary<char, string> arEnConsonantDict = new Dictionary<char, string>();

    public static void ExtractConsonantDictionaryFromCsv(string csvFilePath)
    {
        using (var reader = new StreamReader(csvFilePath, Encoding.UTF8))
        using (var csv = new CsvReader(reader, CultureInfo.InvariantCulture))
        {
            var records = csv.GetRecords<DictionaryRecord>().ToList();
            foreach (var record in records)
            {
                arEnConsonantDict[record.Arabic[0]] = record.Latin;
            }
        }

        Console.WriteLine("Dictionary:");
        Console.WriteLine("Arabic\tLatin");
        foreach (var entry in arEnConsonantDict)
        {
            Console.WriteLine($"{entry.Key}\t{entry.Value}");
        }
    }

    public static string TransliterateConsonantsOnly(string arabicWord)
    {
        return string.Concat(arabicWord.Select(c => arEnConsonantDict.TryGetValue(c, out var value) ? value : c.ToString()));


    }

    public class DictionaryRecord
    {
        public string Arabic { get; set; }
        public string Latin { get; set; }
    }
}

