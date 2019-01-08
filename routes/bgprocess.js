/*

        @Author : Tejas07PSK (Palash Sarkar),
        @CreatedON : 05 Jan, 2019, 12:45 PM,
        @File-Name : bgprocess.js

 */

"use strict";

const scraper = require('../scrape_images/scraper');
const img_cld = require('../image_cloud/upload');
const prep = require('../filter_compress_images/compressandfilter');
const conn = require("../models/dbconnectmanage");
const crud = require('../models/crud');

async function cc(key) {

    await crud.getDocFromKey(key).then(async (lnks) => {

        if (lnks === undefined) { console.log("Internal Error !! (http - 500)"); }
        else if (lnks === null) {

            await scraper.scrape(key).then(async (glimgurls) => {

                if (glimgurls.length === 0) { console.log(`No results retrieved for \'key\' - ${key}`); return; }
                await pt1(glimgurls, key).then(async (b64uris) => {

                    await pt2(b64uris, key).then(async (upimgurls) => {

                        if (upimgurls.length === 0) { console.log("Internal Error !! (http - 500)"); return; }
                        await crud.createDoc({ "key" : key, "links" : upimgurls }).then((flag) => {

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

async function pt1(glimgurls) {

    let b64uris = [];
    for (let i = 0; i < glimgurls.length; i += 1) {

        await prep.compressAndFilter(glimgurls[i]).then(

            (fln) => { if (fln !== undefined) { b64uris.push(fln); } }

        ).catch((err) => { console.log(err); });

    }
    return (b64uris);

}

async function pt2(b64uris, key) {

    let sec_urls = [];
    for (let i = 0; i < b64uris.length; i += 1) {

        await img_cld.send(b64uris[i], key).then((img_url) => {

            sec_urls.push(img_url);

        }).catch((err) => { console.log(err); })

    }
    return (sec_urls);

}

((async () => { await conn.open() })()).then(

    () => {

        cc(String(process.argv[2])).then(

            () => { console.log("Background-Op complete !!"); ((async () => { await conn.close() })()).then(() => { process.exit(0); }).catch((e) => { console.error(e); process.exit(0); }); },
            (err) => { console.error(err); console.log("Background-Op failed !!"); ((async () => { await conn.close() })()).then(() => { process.exit(0) }).catch((e) => { console.error(e); process.exit(0); }); }

        );

    }

).catch((e) => { console.error(e); process.exit(0); });