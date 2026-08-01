// fix-closing-fences.mjs
import fs from 'node:fs';

let src = fs.readFileSync('./examples.mjs', 'utf8');

// A closing fence is one immediately followed by a blank line or the
// string's closing quote — never followed directly by code. Strip the
// erroneous language tag from those specifically.
src = src
  .replace(/```(js|html|json)\\n\\n/g, '```\\n\\n')
  .replace(/```(js|html|json)"/g, '```"');

fs.writeFileSync('./examples.mjs', src);
console.log('Fixed closing fences — diff before committing.');