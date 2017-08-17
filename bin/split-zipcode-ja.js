#!/usr/bin/env node

if (process.argv.length !== 3) {
  console.error('Usage: split-zipcode-ja destination-directory\n');
  process.exit(1);
}

const zipcodeJa = require('zipcode-ja');
const fs = require('fs');
const path = require('path');
const destdir = process.argv[2];

let zips = {};

for (let zipcode in zipcodeJa) {
  if (!zipcode.match(/^[0-9]{7}$/)) {
    continue;
  }

  let key = zipcode.substr(0, 3);

  if ('undefined' === typeof zips[key]) {
    zips[key] = [];
  }

  zips[key].push(zipcodeJa[zipcode]);
}

for (let key in zips) {
  let data = JSON.stringify(zips[key]);
  let dest = path.join(destdir, key + '.json');

  fs.writeFile(dest, data, (err) => {
    if (err) {
      console.error(err);
    }
  });
}








