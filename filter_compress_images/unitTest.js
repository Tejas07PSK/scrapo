/*

        @Author : Tejas07PSK (Palash Sarkar),
        @CreatedON : 03 Jan, 2019, 3:58 PM,
        @File-Name : unitTest.js.js

 */

const prep = require("./compressandfilter");
const url = "https://cdn-images-1.medium.com/max/800/1*4AApxPkF4yXzY0jF0yHgkA.jpeg";

//testing image-compression and grayscale-filter

prep.compressAndFilter(url).then((res) => { console.log("Image buffer is - \n " + res); }, (err) => { console.log(err); });