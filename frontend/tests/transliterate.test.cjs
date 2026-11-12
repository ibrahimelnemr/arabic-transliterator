const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { transliterate } = require('../src/lib/transliterate');
const { dictionaryFromCsv, parseCsv } = require('../scripts/generate-dictionary.cjs');
const dictionaries = require('../src/data/transliteration.json');

test('uses every consonant mapping from the original CSV', () => {
  for (const [arabic, latin] of Object.entries(dictionaries.consonants)) {
    assert.equal(transliterate(arabic), latin, arabic);
  }
});

test('includes optional vowel marks using the CSV mappings', () => {
  for (const [arabic, latin] of Object.entries(dictionaries.vowels)) {
    assert.equal(transliterate(`ب${arabic}`), `b${latin}`, arabic);
    assert.equal(transliterate(`ب${arabic}`, { includeDiacritics: false }), 'b', arabic);
  }
  assert.equal(transliterate('بَ'), 'b́');
  assert.equal(transliterate('بَ', { includeDiacritics: false }), 'b');
  assert.equal(transliterate('بَّ'), 'b̄́');
  assert.equal(transliterate('بَّ', { includeDiacritics: false }), 'b');
});

test('preserves punctuation, Latin text, digits, emoji, and line breaks', () => {
  assert.equal(transliterate('مرحبا، world! 123\nب🙂'), 'mrḥba، world! 123\nb🙂');
  assert.equal(transliterate('  ب  ت\n'), '  b  t\n');
  assert.equal(transliterate(''), '');
});

test('normalizes Arabic presentation forms and ignores decorative tatweel', () => {
  assert.equal(transliterate('ﻻ'), transliterate('لا'));
  assert.equal(transliterate('سـلام'), transliterate('سلام'));
});

test('checked-in dictionaries match the frontend CSV files', () => {
  for (const name of ['consonants', 'vowels']) {
    const source = fs.readFileSync(path.resolve(__dirname, `../src/data/${name}.csv`), 'utf8');
    assert.deepEqual(dictionaryFromCsv(source), dictionaries[name]);
  }
});

test('CSV parsing handles BOM, CRLF, quoted commas and escaped quotes', () => {
  assert.deepEqual(dictionaryFromCsv('\uFEFFArabic,Latin\r\nب,"b,b"\r\n'), { ب: 'b,b' });
  assert.deepEqual(parseCsv('a,"b""c"'), [['a', 'b"c']]);
  assert.throws(() => dictionaryFromCsv('Wrong,Headers\na,b'), /columns/);
  assert.throws(() => parseCsv('a,"unterminated'), /Unterminated/);
});
