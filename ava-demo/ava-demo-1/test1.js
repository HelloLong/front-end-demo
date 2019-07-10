import test from 'ava';

test('foo', t => {
	console.log("foo");
	t.pass();
});

test('bar', async t => {
	console.log("bar");
	const bar = Promise.resolve('bar');
	t.is(await bar, 'bar');
});

async function promiseFn(){
	return true;
}

test("async the truth", async function(t){
	console.log("async the truth");
	const value = await promiseFn();
	t.true(value);
});

// async arrow function
test('promises the truth', async t => {
	console.log("promises the truth");
	const value = await promiseFn();
	t.true(value);
});


// this one will run first, other tests will run concurrently
test.serial('pass serially', t=>{
	console.log("pass serially");
    t.pass();
})