/*

        @Author : Tejas07PSK (Palash Sarkar),
        @CreatedON : 03 Jan, 2019, 12:16 PM,
        @File-Name : scrapper.js

 */

"use strict";

const Scraper = require('images-scraper'), google = new Scraper.Google();

// setting options for scraping.

const opts = {

    "keyword" : '',
    "num" : 15,
    "detail" : true,
    "rtimeout" : 300000000

};

// start scraping for images on google.

module.exports.scrape = async function (key) {

    opts.keyword = key;
    let urls = [];
    await google.list(opts).then(

        (res) => { for (let obj = 0; obj < res.length; obj += 1) { urls.push(res[obj].thumb_url); } },
        (err) => {console.log(err);}

    ).catch((err) => { console.log("Error !! Could not scrape images !! \n " + err); });
    return (urls);

};