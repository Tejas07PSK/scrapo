/*

        @Author : Tejas07PSK (Palash Sarkar),
        @CreatedON : 03 Jan, 2019, 6:52 PM,
        @File-Name : upload.js

 */

const cc = require('./cloudinaryConfig');
const cloud = require('cloudinary');
cloud.config(cc.config);

//uploading processed image;

cloud.v2.uploader.upload("../imgcache/temp.jpg", function (error, result) { console.log(result, error); });
