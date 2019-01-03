/*

        @Author : Tejas07PSK (Palash Sarkar),
        @CreatedON : 03 Jan, 2019, 9:29 PM,
        @File-Name : unitTest.js.js

 */

const prep = require('../filter_compress_images/compressandfilter');
const url = "https://cdn-images-1.medium.com/max/800/1*4AApxPkF4yXzY0jF0yHgkA.jpeg";
const img_cld = require('./upload');

// testing upload to cloudinary.

prep.compressAndFilter(url).then(() => {

        img_cld.push().then((res) => { console.log("Secure url of uploaded image : " + res); })
        .catch((err) => { console.log("Could not upload image to cloudinary !! Error !!"); console.error(err) });

    }, (err) => { console.log(err); });