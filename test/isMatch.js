import {expect} from 'chai';
import match from '#main';
import isMatch from '#lib/isMatch';

describe('@MomsFriendlyDevCo/Match#isMatch', ()=> {

	it('simple string to string globbing', ()=> {
		expect(isMatch('*.js', 'hello.js')).to.be.true;
		expect(isMatch('*.js', 'hello.txt')).to.be.false;

		expect(match.isMatch('*.js', 'hello.js')).to.be.true;
		expect(match.isMatch('*.js', 'hello.txt')).to.be.false;
	});

	it('simple string to string regex', ()=> {
		expect(isMatch('/\.js$/', 'hello.js')).to.be.true;
		expect(isMatch('/\.js$/', 'hello.txt')).to.be.false;
		expect(isMatch(/\.js$/, 'hello.js')).to.be.true;
		expect(isMatch(/\.js$/, 'hello.txt')).to.be.false;

		expect(match.isMatch('*.js', 'hello.js')).to.be.true;
		expect(match.isMatch('*.js', 'hello.txt')).to.be.false;
	});

});
