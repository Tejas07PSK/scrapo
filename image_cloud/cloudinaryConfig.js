/*

        @Author : Tejas07PSK (Palash Sarkar),
        @CreatedON : 03 Jan, 2019, 7:17 PM,
        @File-Name : cloudinaryConfig.js

 */

"use strict";

// cloudinary config.

module.exports.config = {

    "cloud_name" : (process.env.CLOUDINARY_CLOUD_NAME),
    "api_key" : (process.env.CLOUDINARY_API_KEY),
    "api_secret" : (process.env.CLOUDINARY_API_SECRET)

};