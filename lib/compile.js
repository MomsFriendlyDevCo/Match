import picomatch from 'picomatch';

export default function compile(patterns, options) {
	// Compile matchers
	let matchers = (Array.isArray(patterns) ? patterns : [patterns])
		.map(p => {
			if (p instanceof RegExp) { // Already a RegEx
				return subject => p.test(subject);
			} else if (p.startsWith('/') && p.endsWith('/')) { // Form: "/PATTERN/", assume regEx
				return subject => (new RegExp(p.substring(1, p.length - 1))).test(subject);
			} else { // Everything else - assume picomatch
				return picomatch(p, options);
			}
		});

	return function isMatch(subject) {
		return matchers.some(matcher => matcher(subject));
	}
}
