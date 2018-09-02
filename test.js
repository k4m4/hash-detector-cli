import test from 'ava'
import execa from 'execa'
import hashDetect from 'hash-detector'

test('success', async t => {
	const {stdout} = await execa('./cli.js', ['1abcb33beeb811dca15f0ac3e47b88d9'])
	await hashDetect('1abcb33beeb811dca15f0ac3e47b88d9').then(hashType => {
		t.is(stdout, (`✔ ` + hashType.join(', ')))
	})
})

test('fail', async t => {
	const {stdout} = await execa('./cli.js', ['unicorn'])
	await hashDetect('unicorn').then(hashType => {
		t.is(stdout, (`✖ ` + hashType))
	})
})