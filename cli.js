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
	  ~ ❯❯❯ hash-detect 1abcb33beeb811dca15f0ac3e47b88d9
	  ${logSymbols.success} md5
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