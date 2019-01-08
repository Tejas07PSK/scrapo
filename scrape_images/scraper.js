/*

        @Author : Tejas07PSK (Palash Sarkar),
        @CreatedON : 03 Jan, 2019, 12:16 PM,
        @File-Name : scraper.js

 */

"use strict";

const cheerio = require('cheerio');
const google = require('./googleimages');
let $ = undefined;

// start scraping first 15 images from google.

module.exports.scrape = async function (key){

    let img_urls = [], temp = undefined;
    await google.getImages(key).then(

        (data) => {

            $ = cheerio.load(data);
            temp = ($("div#rg_s div.rg_bx div.rg_meta").toArray()).slice(0, 15);
            temp.forEach((dom_obj) => { img_urls.push(JSON.parse(dom_obj.children[0].data)['tu']); });

        },

    ).catch((err) => { console.log('Scraping of images failed !!'); console.error(err); });
    return(img_urls);

};