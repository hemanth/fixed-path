import test from 'ava';
import fn from './';

test('title', t => {
	fn('./index.js', function(err, fixedPath){
		t.pass(fixedPath);
		t.end();
	})

});
