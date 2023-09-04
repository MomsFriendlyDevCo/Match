@MomsFriendlyDevCo/Match
========================
Simple string matching / globbing / RegEx matching.

* Isomorphic, "just works" functionality in the browser / node - already minified, upstream shims already applied
* Works with arrays of patterns
* Compatibility with `*.globs` / `"/regexp/"`
* Returns a simple matcher function without object / classing overhead
* Both ESM and CJS support


Why
---
I couldn't find a library that did what I wanted:

* [micromatch](https://github.com/micromatch/micromatch) & [picomatch](https://github.com/micromatch/picomatch) - Both require shiming of `process` and `path` to work properly in the browser without screwing around with Webpack
* [nanomatch](https://github.com/micromatch/nanomatch) - Doens't support brace expansion
* All of the above have hit-and-miss support for arrays of globs
* None of them are out-of-the-box extendable to also cope with `"/regexp/"` strings as well as globs


```javascript
import match from '@momsfriendlydevco/match';

// Simple string matching
match.isMatch('*.js', 'hello.js') //= true
match.isMatch(['*.js', '.txt'], 'hello.js') //= true
match.isMatch(/\.js$/, 'hello.js') //= true
match.isMatch('/\.js$/', 'hello.js') //= true


// Pre-compiled matcher
let matcher = match.compile(['*.js', '/\.txt$/']);
matcher('hello.js'); //= true
matcher('hello.txt'); //= true
matcher('hello.css'); //= false
```


API
===
In all cases patterns can be:
* A single glob expression
* A string surrounded by `/` indicating it should be treated as a RegExp match (with optional RegExp flags)
* A raw RegEx
* An array of any combination of the above


`options` for all API's are passed directly onto the [picomatch](https://github.com/micromatch/picomatch) library **except** for the following which are parsed then removed before being passed to picomatach:

| Option | Type      | Default | Description                                                               |
|--------|-----------|---------|---------------------------------------------------------------------------|
| `csv`  | `boolean` | `false` | If the input is a single string, split it using CSV rules, before parsing |


Match.isMatch(patterns, subject, options)
-----------------------------------------
Return a simple boolean if the subject matches any of the given patterns.
Options is any valid config for [picomatch](https://github.com/micromatch/picomatch).

```javascript
import match from '@momsfriendlydevco/match';
import {isMatch} from '@momsfriendlydevco/match'; // ... OR as spread export

match.isMatch('*.js', 'hello.js') //= true
match.isMatch(['*.js', '.txt'], 'hello.js') //= true
match.isMatch(/\.js$/, 'hello.js') //= true
match.isMatch('/\.js$/', 'hello.js') //= true
```


Match.compile(patterns, options)
--------------------------------
Create a function which can be used to match against subsequent subjects.
Options is any valid config for [picomatch](https://github.com/micromatch/picomatch).

```javascript
import match from '@momsfriendlydevco/match';
import {compile} from '@momsfriendlydevco/match'; // ... OR as spread export

let matcher = match.compile(['*.js', '/\.txt$/']);

matcher('hello.js'); //= true
matcher('hello.txt'); //= true
matcher('hello.css'); //= false
```
