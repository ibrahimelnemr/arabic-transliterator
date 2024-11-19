# arabic-transliterator

This project was made to showcase the Direct Correspondence method of Arabic transliteration.

The Direct Correspondence transliteration system is intended to essentially allow for transliterating Arabic text into Roman letters, using both latin letters and unicode accents or modifiers, with a one-to-one correspondence between each Arabic letter or diacritic and its romanized counterpart.

In order to factor for ease of reading, the DC system also allows for several modes, including the exclusion of diacritics, the use of letters as aliases for diacritics, and the direct use of diacritics. This effectively strikes a balance between being easy to read, being easy to comprehend, and being internally consistent with a direct correspondence to the Arabic text.

## Without diacritics
```
الوقت كالسيف، إن لم تقطعه قطعك
```
```
alwqt kalsy̤f a̜n lm tqṭạh qṭạk
```

## With diacritics - accent vowels

```
الوَقْتُ كَالسَّيْفِ، إِنْ لَمْ تَقْطَعْهُ قَطَعَكَ
```

```
alẃq̊t̆ ḱalś̄ẙ̤f̀ à̜n̊ ĺm̊ t́q̊ṭ́ạ̊h̆ q́ṭ́ạ́ḱ
```

## With diacritics - separate character vowels

```
الوَقْتُ كَالسَّيْفِ، إِنْ لَمْ تَقْطَعْهُ قَطَعَكَ
```

```
alwa̱q̊tu̱ ka̱alsa̱ẙ̤fi̱ a̜n̊ la̱m ta̱q̊ṭa̱ạ̊hu̱ qa̱ṭa̱ạa̱ka̱
```


# Transliteration Table - Consonants

| Arabic | Latin | Arabic Unicode (UTF-16) | Latin Unicode (UTF-16) |
|--------|-------|--------------------------|-------------------------|
| ء      | ǝ     | \u0621                  | \u01dd                 |
| ا      | a     | \u0627                  | \u0061                 |
| ب      | b     | \u0628                  | \u0062                 |
| ت      | t     | \u062a                  | \u0074                 |
| ث      | ṯ     | \u062b                  | \u1e6f                 |
| ج      | g     | \u062c                  | \u0067                 |
| ح      | ḥ     | \u062d                  | \u1e25                 |
| خ      | ḵ     | \u062e                  | \u1e35                 |
| د      | d     | \u062f                  | \u0064                 |
| ذ      | ḏ     | \u0630                  | \u1e0f                 |
| ر      | r     | \u0631                  | \u0072                 |
| ز      | z     | \u0632                  | \u007a                 |
| س      | s     | \u0633                  | \u0073                 |
| ش      | s̱    | \u0634                  | \u0073\u0331           |
| ص      | ṣ     | \u0635                  | \u1e63                 |
| ض      | ḍ     | \u0636                  | \u1e0d                 |
| ط      | ṭ     | \u0637                  | \u1e6d                 |
| ظ      | ẓ     | \u0638                  | \u1e93                 |
| ع      | ạ     | \u0639                  | \u1ea1                 |
| غ      | g̣    | \u063a                  | \u0067\u0323           |
| ف      | f     | \u0641                  | \u0066                 |
| ق      | q     | \u0642                  | \u0071                 |
| ك      | k     | \u0643                  | \u006b                 |
| ل      | l     | \u0644                  | \u006c                 |
| م      | m     | \u0645                  | \u006d                 |
| ن      | n     | \u0646                  | \u006e                 |
| ه      | h     | \u0647                  | \u0068                 |
| و      | w     | \u0648                  | \u0077                 |
| ي      | y̤    | \u064a                  | \u0079\u0324           |
| أ      | ả    | \u0623                  | \u0061\u0309           |
| إ      | a̜    | \u0625                  | \u0061\u031c           |
| ؤ      | w̉    | \u0624                  | \u0077\u0309           |
| ئ      | ỷ    | \u0626                  | \u0079\u0309           |
| آ      | ã    | \u0622                  | \u0061\u0303           |
| ٱ      | a͊    | \u0671                  | \u0061\u034a           |
| ة      | t̤    | \u0629                  | \u0074\u0324           |
| ى      | y     | \u0649                  | \u0079                 |

# Transliteration Table - Vowels

| Arabic | Latin | Arabic Unicode (UTF-16) | Latin Unicode (UTF-16) |
|--------|-------|--------------------------|-------------------------|
| ٰ      | ̍     | \u0670                  | \u030d                 |
|        | ́̍    |                          | \u0301\u030d           |
| ٰٓ     | ̍̃    | \u0670\u0653            | \u030d\u0303           |
| ۡ      | ͛     | \u06e1                  | \u035b                 |
| ْ      | ̊     | \u0652                  | \u030a                 |
| َ      | ́     | \u064e                  | \u0301                 |
| ِ      | ̀     | \u0650                  | \u0300                 |
| ُ      | ̆     | \u064f                  | \u0306                 |
| ّ      | ̄     | \u0651                  | \u0304                 |
| َّ     | ̄́    | \u0651\u064e            | \u0304\u0301           |
| ِّ     | ̄̀    | \u0651\u0650            | \u0304\u0300           |
| ُّ     | ̄̆    | \u0651\u064f            | \u0304\u0306           |
| ً      | ̋     | \u064b                  | \u030b                 |
| ٍ      | ̏     | \u064d                  | \u030f                 |
| ٌ      | ̆̆    | \u064c                  | \u0306\u0306           |

# Sample Texts


# Backend Local Setup

To start app backend locally

`cd backend`

`mvn spring-boot:run`

# Frontend Local Setup

To start app frontend locally

`cd frontend`

`npm run dev`

