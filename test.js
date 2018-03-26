import test from 'ava';
import execa from 'execa';
import hashDetect from 'hash-detector';

test('success', async t => {
	const {stdout} = await execa('./cli.js', ['1abcb33beeb811dca15f0ac3e47b88d9']);
	t.is(stdout, (`✔ ` + await hashDetect('1abcb33beeb811dca15f0ac3e47b88d9')));
});

test('fail', async t => {
	const {stdout} = await execa('./cli.js', ['unicorn']);
	t.is(stdout, (`✖ ` + await hashDetect('unicorn')));
});