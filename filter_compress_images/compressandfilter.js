/*

        @Author : Tejas07PSK (Palash Sarkar),
        @CreatedON : 03 Jan, 2019, 3:44 PM,
        @File-Name : compressandfilter.js.js

 */

"use strict";

const jimp = require('jimp');

// read image from url, compress it and finally convert it into gray-scale.

module.exports.compressAndFilter = async function (url) {

    await jimp.read(url).then(

        (imgObj) => { imgObj.resize(256, 256).quality(60).grayscale().write('../imgcache/temp.jpg'); }

    ).catch((err) => { console.log("Error !! Could not read image from 'URL' !! \n " + err); });

};