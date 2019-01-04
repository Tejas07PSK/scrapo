/*

        @Author : Tejas07PSK (Palash Sarkar),
        @CreatedON : 03 Jan, 2019, 7:17 PM,
        @File-Name : cloudinaryConfig.js

 */

"use strict";

// cloudinary config.

module.exports.config = {

    "cloud_name" : (process.env.CLOUDINARY_CLOUD_NAME) || 'dczwplg2j',
    "api_key" : (process.env.CLOUDINARY_API_KEY) || '123951921577524',
    "api_secret" : (process.env.CLOUDINARY_API_SECRET) || 'OkYRfz9-y5BQghw8qrXj4sVpd6I'

};