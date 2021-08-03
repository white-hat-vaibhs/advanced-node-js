//handle network Request
const https = require('https');
//password hashing algo
const crypto = require('crypto');
//file system io
const fs = require('fs');

const start = Date.now();

//env for multiple threads
process.env.UV_THREADPOOL_SIZE= 5;

function doRequest() {
    https.request('https://www.google.com', res => {
        res.on('data', () => { });
        res.on('end', () => {
            console.log('Fetch Google:',Date.now() - start);
            //benchmark the time taken for HTTPS Module
        });
    }).end();
}

function doHash(number) {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
        console.log('Hash:', Date.now() - start, number);
        //benchmark the time taken for Hashing alfo
    });
}

doRequest();

fs.readFile('multitask.js', 'utf8', () => {
    console.log('FS:', Date.now() - start);
    //benchmark the time taken for performing IO
});

doHash(1);
doHash(2);
doHash(3);
doHash(4);
