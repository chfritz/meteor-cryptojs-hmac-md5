meteor-cryptojs
===============

[https://code.google.com/p/crypto-js/]

exports `CryptoJS` with only one method `HmacMD5(text, secret)` which will generate the MD5 hash of `text` using `secret` as a passphrase. Use `toString()` of the returned result to get the string (doh!).

Example:
```
CryptoJS.HmacMD5("test", "notverysecure").toString();
```
