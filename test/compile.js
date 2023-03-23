import {expect} from 'chai';
import match from '#main';
import compile from '#lib/compile';
 /* eslint-disable no-useless-escape */

describe('@MomsFriendlyDevCo/Match#compile', ()=> {

	it('simple string to string globbing', ()=> {
		expect(compile('*.js')('hello.js')).to.be.true;
		expect(compile('*.js')('hello.txt')).to.be.false;

		expect(match.compile('*.js')('hello.js')).to.be.true;
		expect(match.compile('*.js')('hello.txt')).to.be.false;
	});

	it('simple string to string regex', ()=> {
		expect(compile('/\.js$/')('hello.js')).to.be.true;
		expect(compile('/\.js$/')('hello.txt')).to.be.false;
		expect(compile(/\.js$/)('hello.js')).to.be.true;
		expect(compile(/\.js$/)('hello.txt')).to.be.false;

		expect(match.compile('*.js')('hello.js')).to.be.true;
		expect(match.compile('*.js')('hello.txt')).to.be.false;
	});

});
