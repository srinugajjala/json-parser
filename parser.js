const fs = require('fs');
const parser = require('./PEG_Parser');

fs.readFile('maria_demo.json', 'utf8', function callback(err, data) {
  if (err) console.log(err);
  try {
    parser.parse(data);
    console.log('success');
  } catch (e) {
    console.log(e);
  }
});
