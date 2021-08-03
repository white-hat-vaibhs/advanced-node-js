//handle network Request
const https = require('https');
//password hashing algo
const crypto = require('crypto');
//file system io
const fs = require('fs');

const start = Date.now();


function doRequest() {
    https.request('https://www.google.com', res => {
        res.on('data', () => { });
        res.on('end', () => {
            console.log('Fetch Google:',Date.now() - start);
            //benchmark the time taken for HTTPS Module
        });
    }).end();
}

function doHash() {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
        console.log('Hash:', Date.now() - start);
        //benchmark the time taken for Hashing alfo
    });
}

doRequest();

fs.readFile('multitask.js', 'utf8', () => {
    console.log('FS:', Date.now() - start);
    //benchmark the time taken for performing IO
});

doHash();
doHash();
doHash();
doHash();

