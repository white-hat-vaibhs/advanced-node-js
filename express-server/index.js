process.env.UV_THREADPOOL_SIZE= 1;

const express = require('express');
const cluster = require('cluster');
const crypto = require('crypto');

if (cluster.isMaster) {
    console.log("I am a master");
    //cause index.js to be executed but in slave aka child mode
    cluster.fork();
    // cluster.fork();
} else {
    console.log("I am a child");
    const app = express();
    const PORT = 3000;

    app.get('/', (req, res) => {
        crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
            res.send('hi there');
        });
    })
    app.get('/fast', (req, res) => {
        res.send('Fast here');
    })

    app.listen(PORT || 3000);
}


//apache bench-marking
//ab -c 50 -n 500 localhost:3001/fast
