/*

        @Author : Tejas07PSK (Palash Sarkar),
        @CreatedON : 07 Jan, 2019, 7:35 PM,
        @File-Name : getgoogleimages.js

 */

"use strict";

const axios = require("axios");
const googleconnect = axios.create({

    "baseURL" : 'https://www.google.com',
    "timeout" : 0,
    "headers" : {

        "User-Agent" : 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36',
        "charset" : 'utf8'

    }

});

module.exports.getImages = async function (key) {

    let html_page = "";
    await googleconnect.get('search', {

        "responseType" : 'text/html',
        "responseEncoding" : 'utf8,',
        "params" : {

            "hl" : 'en',
            "tbm" : 'isch',
            "source" : 'hp',
            "q" : key,

        },

    }).then((resp) => {

        console.log(`Request for images of key - ${key} to Google successful !!`);
        html_page = resp['data'];

    }).catch((err) => {

        console.log(`Request for images of key - ${key} to Google failed !!`);
        console.error(err);

    });
    return (html_page);
};
