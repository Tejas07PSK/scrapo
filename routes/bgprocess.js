/*

        @Author : Tejas07PSK (Palash Sarkar),
        @CreatedON : 05 Jan, 2019, 12:45 PM,
        @File-Name : bgprocess.js

 */

"use strict";

const scrapper = require('../scrap_images/scrapper');
const img_cld = require('../image_cloud/upload');
const prep = require('../filter_compress_images/compressandfilter');
const crud = require('../models/crud');

async function pt0(key) {

    await crud.getDocFromKey(key).then((lnks) => {

        if (lnks === undefined) { console.log("Internal Error !! (http - 500)"); }
        else if (lnks === null) {

            (scrapper.scrape(key)).then((glimgurls) => {

                pt1(glimgurls, key).then((flns) => {

                    pt2(flns, key).then((upimgurls) => {

                        if (upimgurls.length === 0) { console.log("Internal Error !! (http - 500)"); return; }
                        crud.createDoc({ "key" : key, "links" : upimgurls }).then((flag) => {

                            if (flag) { console.log("Successfully added \'key\' - " + key + " with it's \'images\' to database !! (http - 200)"); }
                            else { console.log("Internal Error !! (http - 500)"); }

                        }).catch((err3) => { console.error(err3); console.log("Internal Error !! (http - 500)"); });

                    }).catch((err2) => { console.error(err2); console.log("Internal Error !! (http - 500)"); });

                }).catch((err1) => { console.error(err1); console.log("Internal Error !! (http - 500)"); });

            }).catch((err0) => { console.error(err0); console.log("Internal Error !! (http - 500)"); });

        }
        else { console.log("\'key\' - " + key + " with it's \'images\' already exists in database !! (http - 200)"); }

    }).catch((fault) => { console.error(fault); console.log("Internal Error !! (http - 500)"); });

}

async function pt1(glimgurls, key) {

    let flns = [];
    for (let i = 0; i < glimgurls.length; i += 1) {

        await prep.compressAndFilter(glimgurls[i], ("public/imgcache/temp" + key + i + ".jpg")).then(

            (fln) => { if (fln !== undefined) { flns.push(fln); } }

        ).catch((err) => { console.log(err); });

    }
    return (flns);

}

async function pt2(flns, key) {

    let sec_urls = [];
    for (let i = 0; i < flns.length; i += 1) {

        await img_cld.send(flns[i], key).then((img_url) => {

            sec_urls.push(img_url);

        }).catch((err) => { console.log(err); })

    }
    return (sec_urls);

}

pt0(String(process.argv[0])).then(() => { console.log("Background-Op complete !!"); }, (err) => { console.error(err); console.log("Background-Op failed !!"); });