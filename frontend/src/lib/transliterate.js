// The original Direct Correspondence CSV mappings are bundled at build time.
const dictionaries = require('../data/transliteration.json');

const normalizeKey = (key) => key.normalize('NFKC');
const consonants = new Map(Object.entries(dictionaries.consonants).map(([key, value]) => [normalizeKey(key), value]));
const vowels = new Map(Object.entries(dictionaries.vowels).map(([key, value]) => [normalizeKey(key), value]));
const all = new Map([...consonants, ...vowels]);
const keys = [...all.keys()].sort((a, b) => b.length - a.length);
const arabicMark = /^[\u064B-\u065F\u0670\u06D6-\u06ED]+$/u;

function transliterate(text, { includeDiacritics = true } = {}) {
  const input = text.normalize('NFKC');
  let output = '';
  let index = 0;
  while (index < input.length) {
    const position = index;
    const key = keys.find(candidate => input.startsWith(candidate, position));
    if (key) {
      output += includeDiacritics || consonants.has(key) ? all.get(key) : '';
      index += key.length;
    } else {
      const character = String.fromCodePoint(input.codePointAt(index));
      // Preserve punctuation, whitespace, numbers, and non-Arabic text.
      if (character !== '\u0640' && (includeDiacritics || !arabicMark.test(character))) output += character;
      index += character.length;
    }
  }
  return output;
}

module.exports = { transliterate };
