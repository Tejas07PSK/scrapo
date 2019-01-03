/*

        @Author : Tejas07PSK (Palash Sarkar),
        @CreatedON : 03 Jan, 2019, 6:52 PM,
        @File-Name : upload.js

 */

const cc = require('./cloudinaryConfig');
const fs = require('fs');
const cloud = require('cloudinary');
cloud.config(cc.config);

// uploading processed image.

module.exports.push = async function () {

    let img_url = undefined; //will store the secure_url of the image stored in the cloud
    await cloud.v2.uploader.upload("../imgcache/temp.jpg", function (error, result) {

        if (error) { console.log(error); return; }
        img_url = result['secure_url'];
        try { fs.unlinkSync("../imgcache/temp.jpg"); } catch(err) { console.log("File not removed !! Error !!"); console.error(err); }

    });
    return (img_url);

};
