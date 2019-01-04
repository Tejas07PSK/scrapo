/*

        @Author : Tejas07PSK (Palash Sarkar),
        @CreatedON : 03 Jan, 2019, 3:58 PM,
        @File-Name : unitTest.js.js

 */

"use strict";

const prep = require('./compressandfilter');
const url = "https://cdn-images-1.medium.com/max/800/1*4AApxPkF4yXzY0jF0yHgkA.jpeg";
const filename = '../public/imagecache/temptest0.jpg';

// testing image-compression and grayscale-filter.

prep.compressAndFilter(url, filename).then((res) => { console.log(`File name - ${res}`); console.log("Check \'imgcache\' folder, image processing complete."); }, (err) => { console.log(err); });