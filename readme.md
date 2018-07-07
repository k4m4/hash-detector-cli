# hash-detector-cli [![Build Status](https://travis-ci.org/k4m4/hash-detector-cli.svg?branch=master)](https://travis-ci.org/k4m4/hash-detector-cli)

> Detect the possible hash-types corresponding to a string, right from your terminal.

---

## Install

```
~ ❯❯❯ npm install -g hash-detector
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
    ~ ❯❯❯ hash-detect 17413f944145f37dcaa9bc55d9a201a248a08aae
    ✔ SHA-1, RIPEMD, Tiger, HAVAL-160, HAS-160
```


## Supported Hashes

- `MD2`, `MD4`, `MD5`, `MD6`
- `SHA-1`, `SHA-224`, `SHA-256`, `SHA-384`, `SHA-512`
- `HAVAL-128`, `HAVAL-160`, `HAVAL-192`, `HAVAL-224`, `HAVAL-256`
- `Tiger`, `Tiger-128`, `Tiger-192`
- `RIPEMD`, `RIPEMD-180`, `RIPEMD-256`, `RIPEMD-320`
- `Snerfu-128`, `Snerfu-256`
- `Streebog-256`, `Streebog-512`
- `FNV-1-32`, `FNV-1-64`
- `FNV-1a-32`, `FNV-1a-52`, `FNV-1a-64`, `FNV-1a-1024`, `FNV-1a-128`, `FNV-1a-512`
- `HAS-160`
- `GOST`
- `MDC-2`
- `BLAKE-512`
- `Whirpool`
- `Spectral Hash`


## Related

- [hash-detector](https://github.com/k4m4/hash-detector) - API for this module


## License

MIT © [Nikolaos Kamarinakis](https://nikolaskama.me)
