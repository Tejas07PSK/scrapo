/*

        @Author : Tejas07PSK (Palash Sarkar),
        @CreatedON : 03 Jan, 2019, 3:44 PM,
        @File-Name : compressandfilter.js.js

 */

"use strict";

const jimp = require('jimp');

// read image from url, compress it and finally convert it into gray-scale.

module.exports.compressAndFilter = async function (url) {

    let result = undefined;
    await jimp.read(url).then(

        async (imgObj) => {

            imgObj = (imgObj.resize(256, 256).quality(60).grayscale());
            await imgObj.getBase64Async(imgObj.getMIME()).then((b64uri) => { result = b64uri; }).catch((err1) => { console.error(err1); });

        }

    ).catch((err0) => { console.log("Error !! Could not read image from 'URL' !! \n " + err0); result = undefined; });
    return (result);

};