/*

        @Author : Tejas07PSK (Palash Sarkar),
        @CreatedON : 03 Jan, 2019, 12:41 PM,
        @File-Name : unitTest.js

 */

const scrapper = require('./scrapper');

// testing scrapper.

(scrapper.scrape("dogs")).then((res) => { console.log(res); }, (err) => { console.log(err); });