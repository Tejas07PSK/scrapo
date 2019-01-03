/*

        @Author : Tejas07PSK (Palash Sarkar),
        @CreatedON : 03 Jan, 2019, 3:44 PM,
        @File-Name : compressandfilter.js.js

 */

const jimp = require('jimp');

//Read image from url, compress it and finally convert it into gray-scale.

module.exports.compressAndFilter = async function (url) {

    let img_buffer = null;
    await jimp.read(url).then(

        (imgObj) => { img_buffer = (imgObj.resize(256, 256).quality(60).grayscale())['bitmap'].data; }

    ).catch((err) => { console.log("Error !! Could not read image from 'URL' !! \n " + err); });
    return (img_buffer);

};