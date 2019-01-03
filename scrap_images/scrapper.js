/*

        @Author : Tejas07PSK (Palash Sarkar),
        @CreatedON : 03 Jan, 2019, 12:16 PM,
        @File-Name : scrapper.js

 */

const google = new require("images-scraper").Google();

// Setting options for scraping

const opts = {

    "userAgent" : 'Chrome',
    "keyword" : '',
    "num" : 15,
    "detail" : true,
    "rlimit" : '20',
    "timeout" : 10000,
    "nightmare" : { "show" : true }

};

//Start scraping for images on google.
module.exports.scrape = async function (key){

    opts.keyword = key;
    await (google.list(opts)).then((res) => { console.log(res); }, (err) => { console.log("Error !! Could not scrape images !! \n " + err); });

};