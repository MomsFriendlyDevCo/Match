@MomsFriendlyDevCo/Match
========================
Simple string matching / globbing / RegEx matching.


Why
---
I couldn't find a library that combined array-inputs, RegExp matching and a pre-compiled function factory pattern.


```javascript
import match from '@momsfriendlydevco/match;l

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
* A string surrounded by `/` indicating it should be treated as a RegExp match
* A raw RegEx
* An array of any combination of the above


Match.isMatch(patterns, subject, options)
-----------------------------------------
Return a simple boolean if the subject matches any of the given patterns.
Options is any valid config for [picomatch](https://github.com/micromatch/picomatch).

```javascript
import match from '@momsfriendlydevco/match;l
import {isMatch} from '@momsfriendlydevco/match; // ... OR as spread export

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
import match from '@momsfriendlydevco/match;
import {compile} from '@momsfriendlydevco/match; // ... OR as spread export

let matcher = match.compile(['*.js', '/\.txt$/']);

matcher('hello.js'); //= true
matcher('hello.txt'); //= true
matcher('hello.css'); //= false
```
