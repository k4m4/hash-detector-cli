#!/usr/bin/env node
'use strict';
const meow       = require('meow');
const getStdin   = require('get-stdin');
const logSymbols = require('log-symbols');
const hashDetect = require('hash-detector');

const cli = meow(`
	Usage
	  ~ ❯❯❯ hash-detect <string>
	  ~ ❯❯❯ echo <string> | hash-detect
	  ~ ❯❯❯ cat <file> | hash-detect
	Example
	  ~ ❯❯❯ hash-detect 17413f944145f37dcaa9bc55d9a201a248a08aae
	  ${logSymbols.success} SHA-1, RIPEMD, Tiger, HAVAL-160, HAS-160
`);

const input = cli.input[0];

function display (hashType) {
	if (hashType != 'Hash type could not be detected') {
		console.log(`${logSymbols.success} ` + hashType.join(', '))
	} else {
		console.log(`${logSymbols.error} Hash type could not be detected`);
	}
}

if (!input && process.stdin.isTTY) {
	console.log('Specify a hash to identify its type');
	process.exit(1);
}
if (input) {
	hashDetect(input.trim())
		.then(hashType => {
			display(hashType);
		})
} else {
	getStdin().then(stdin => {
		hashDetect(stdin.trim()).then(hashType => {
			display(hashType);
		})
	})
}