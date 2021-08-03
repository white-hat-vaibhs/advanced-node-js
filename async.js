//handle network Request

const https = require('https');

const start = Date.now();


function doRequest(){

    https.request('https://www.google.com', res =>{
        res.on('data', () => {});
        res.on('end',()=>{
            console.log(Date.now() - start);
            //benchmark the time taken
        });
    }).end();
}

doRequest();
// doRequest();
// doRequest();
// doRequest();
// doRequest();
// doRequest();
// doRequest();
// doRequest();
// doRequest();
// doRequest();
// doRequest();
// doRequest();