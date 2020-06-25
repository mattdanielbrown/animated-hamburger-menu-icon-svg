import test from 'ava';
import animatedHamburgerIconSvg from '.';

test('title', t => {
	t.throws(() => {
		animatedHamburgerIconSvg(123);
	}, {
		instanceOf: TypeError,
		message: 'Expected a string, got number'
	});

	t.is(animatedHamburgerIconSvg('unicorns'), 'unicorns & rainbows');
});
