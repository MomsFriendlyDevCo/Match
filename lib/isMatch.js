import compile from '#lib/compile';

export default function isMatch(patterns, subject, options) {
	let matcher = compile(patterns, options);
	return matcher(subject);
}
