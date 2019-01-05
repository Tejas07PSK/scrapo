/*

        @Author : Tejas07PSK (Palash Sarkar),
        @CreatedON : 03 Jan, 2018, 09:46 PM,
        @File-Name : index.js

 */

"use strict";

const spawn = require('child_process').spawn;
const router = (require('express')).Router();

/* GET home page */

router.get('/', function(req, res) {

    res.status(200);
    res.render('index', { title : 'Scrapo' });

});

/* add keys and images from home page */

router.post('/', function (req, res) {

    let key = req.body['key'];
    let bgop = spawn('node', [ (__dirname + '/bgprocess.js'), key ], { stdio : ['pipe', 'pipe', 'pipe'] });
    bgop.stdout.on('data', (data) => { console.log(data.toString('utf8')); });
    bgop.stderr.on('error', (err) => { console.log(err.toString('utf8')); });
    bgop.on('close', (code) => { console.log(`Child process exited with code ${code}`); });
    bgop.on('error', (error) => { console.log(error); });
    res.status(200);
    res.end(

        "Thank you for using Scrapo !! Your \'search-key\' - " + key + " along with it's images will be added to our system. Please visit the keys page after a few minutes, to find your key there.",
        "utf8", function () { console.log("Http conversation ended successfully !!"); }

    );

});

module.exports = router;
