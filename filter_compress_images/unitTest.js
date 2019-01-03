/*

        @Author : Tejas07PSK (Palash Sarkar),
        @CreatedON : 03 Jan, 2019, 3:58 PM,
        @File-Name : unitTest.js.js

 */

"use strict";

const prep = require('./compressandfilter');
const url = "https://cdn-images-1.medium.com/max/800/1*4AApxPkF4yXzY0jF0yHgkA.jpeg";

// testing image-compression and grayscale-filter.

prep.compressAndFilter(url).then(() => { console.log("Check \'imgcache\' folder, image processing complete."); }, (err) => { console.log(err); });