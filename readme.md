# hash-detector-cli [![Build Status](https://travis-ci.org/k4m4/hash-detector-cli.svg?branch=master)](https://travis-ci.org/k4m4/hash-detector-cli)

> Detect the type of hash in a string.

---

## Install

```
~ ❯❯❯ npm install -g hash-detector-type
```


## Usage

```
~ ❯❯❯ hash-detect --help

  Detect hashes in a string.

  Usage
    ~ ❯❯❯ hash-detect <string>
    ~ ❯❯❯ echo <string> | hash-detect
    ~ ❯❯❯ cat <file> | hash-detect
  Example
    ~ ❯❯❯ hash-detect 1abcb33beeb811dca15f0ac3e47b88d9
    ✔ md5
```


## Supported Hashes

- [`Base64`](https://github.com/kevva/base64-regex)
- [`MD5`](https://github.com/k4m4/md5-regex)
- [`SHA1`](https://github.com/k4m4/sha-regex)
- [`SHA224`](https://github.com/k4m4/sha-regex)
- [`SHA256`](https://github.com/k4m4/sha-regex)
- [`SHA384`](https://github.com/k4m4/sha-regex)
- [`SHA512`](https://github.com/k4m4/sha-regex)


## Related

- [hash-detector](https://github.com/k4m4/hash-detector) - API for this module


## License

MIT © [Nikolaos Kamarinakis](https://nikolaskama.me)