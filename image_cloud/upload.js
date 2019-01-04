/*

        @Author : Tejas07PSK (Palash Sarkar),
        @CreatedON : 03 Jan, 2019, 6:52 PM,
        @File-Name : upload.js

 */

"use strict";

const cc = require('./cloudinaryConfig');
const fs = require('fs');
const cloud = require('cloudinary');
cloud.config(cc.config);

// uploading processed image.

module.exports.send = async function (fln, schkey) {

    let img_url = undefined; //will store the secure_url of the image stored in cloud
    await cloud.v2.uploader.upload(fln, {"folder" : schkey}, function (error, result) {

        if (error) { console.log(error); return; }
        img_url = result['secure_url'];
        try { fs.unlinkSync(fln); } catch(err) { console.log("File not removed !! Error !!"); console.error(err); }

    });
    return (img_url);

};
