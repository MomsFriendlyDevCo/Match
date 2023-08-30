let expect = require('chai').expect;
let match = require('../dist/cjs/index.cjs');
 /* eslint-disable no-useless-escape */

describe('@MomsFriendlyDevCo/Match (CJS compatibility)', ()=> {

	it('simple string to string globbing', ()=> {
		expect(match.isMatch('*.js', 'hello.js')).to.be.true;
		expect(match.isMatch('*.js', 'hello.txt')).to.be.false;

		expect(match.isMatch('*.js', 'hello.js')).to.be.true;
		expect(match.isMatch('*.js', 'hello.txt')).to.be.false;
	});

	it('simple string to string regex', ()=> {
		expect(match.isMatch('/\.js$/', 'hello.js')).to.be.true;
		expect(match.isMatch('/\.js$/', 'hello.txt')).to.be.false;
		expect(match.isMatch(/\.js$/, 'hello.js')).to.be.true;
		expect(match.isMatch(/\.js$/, 'hello.txt')).to.be.false;

		expect(match.isMatch('*.js', 'hello.js')).to.be.true;
		expect(match.isMatch('*.js', 'hello.txt')).to.be.false;
	});

	it('compiled string to string globbing', ()=> {
		expect(match.compile('*.js')('hello.js')).to.be.true;
		expect(match.compile('*.js')('hello.txt')).to.be.false;

		expect(match.compile('*.js')('hello.js')).to.be.true;
		expect(match.compile('*.js')('hello.txt')).to.be.false;
	});

	it('compiled string to string regex', ()=> {
		expect(match.compile('/\.js$/')('hello.js')).to.be.true;
		expect(match.compile('/\.js$/')('hello.txt')).to.be.false;
		expect(match.compile(/\.js$/)('hello.js')).to.be.true;
		expect(match.compile(/\.js$/)('hello.txt')).to.be.false;

		expect(match.compile('*.js')('hello.js')).to.be.true;
		expect(match.compile('*.js')('hello.txt')).to.be.false;
	});

	it('compiled expressions', ()=> {
		expect(match.compile(['*.js', '*.txt'])('hello.js')).to.be.true;
		expect(match.compile(['*.js', '/\.txt$/'])('hello.txt')).to.be.true;
		expect(match.compile(['*.js', '/\.txt$/'])('hello.css')).to.be.false;

		// Note: CSV mode disabled, these will all fail
		expect(match.compile('*.js,/\.txt$/')('hello.js')).to.be.false;
		expect(match.compile('*.js,/\.txt$/')('hello.txt')).to.be.false;
		expect(match.compile('*.js,/\.txt$/')('hello.css')).to.be.false;

		// CSV mode splitting
		expect(match.compile('*.js,/\.txt$/', {csv: true})('hello.js')).to.be.true;
		expect(match.compile('*.js,/\.txt$/', {csv: true})('hello.txt')).to.be.true;
		expect(match.compile('*.js,/\.txt$/', {csv: true})('hello.css')).to.be.false;
	});

});
