const fs = require('node:fs');
const path = require('node:path');

function parseCsv(source) {
  const rows = [];
  let row = [], field = '', quoted = false;
  for (let index = 0; index < source.length; index++) {
    const character = source[index];
    if (character === '"') {
      if (quoted && source[index + 1] === '"') { field += '"'; index++; }
      else quoted = !quoted;
    } else if (character === ',' && !quoted) {
      row.push(field); field = '';
    } else if ((character === '\n' || character === '\r') && !quoted) {
      if (character === '\r' && source[index + 1] === '\n') index++;
      row.push(field); rows.push(row); row = []; field = '';
    } else field += character;
  }
  if (quoted) throw new Error('Unterminated quoted CSV field');
  if (field || row.length) { row.push(field); rows.push(row); }
  return rows;
}

function dictionaryFromCsv(source) {
  const [header, ...rows] = parseCsv(source.replace(/^\uFEFF/, ''));
  const arabic = header.indexOf('Arabic'), latin = header.indexOf('Latin');
  if (arabic < 0 || latin < 0) throw new Error('CSV must contain Arabic and Latin columns');
  return Object.fromEntries(rows.filter(row => row[arabic]).map(row => {
    if (row[latin] === undefined) throw new Error('Missing Latin mapping');
    return [row[arabic], row[latin]];
  }));
}

function generate() {
  const directory = path.resolve(__dirname, '../src/data');
  const dictionaries = {};
  for (const name of ['consonants', 'vowels']) {
    dictionaries[name] = dictionaryFromCsv(fs.readFileSync(path.join(directory, `${name}.csv`), 'utf8'));
  }
  fs.writeFileSync(path.join(directory, 'transliteration.json'), JSON.stringify(dictionaries, null, 2) + '\n');
}

if (require.main === module) generate();
module.exports = { parseCsv, dictionaryFromCsv };
