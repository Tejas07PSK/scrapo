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

module.exports.send = async function (b64uri, schkey) {

    let img_url = undefined; //will store the secure_url of the image stored in cloud
    await cloud.v2.uploader.upload(uri, {"folder" : "scrapo/" + schkey}, function (error, result) {

        if (error) { console.log(error); return; }
        img_url = result['secure_url'];

    });
    return (img_url);

};
