process.env.UV_THREADPOOL_SIZE= 5;

const crypto = require('crypto');


const start = Date.now();
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('1:', Date.now() - start);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('2:', Date.now() - start);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('3:', Date.now() - start);
});

crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('4:', Date.now() - start);
});
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('5:', Date.now() - start);
});

// result before adding process.env 
// 2: 700
// 1: 709
// 3: 710
// 4: 710
// 5: 1253

// result after adding process.env 
// 1: 1241
// 2: 1264
// 5: 1345
// 3: 1364
// 4: 1374