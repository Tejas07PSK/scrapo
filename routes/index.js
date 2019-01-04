/*

        @Author : Tejas07PSK (Palash Sarkar),
        @CreatedON : 03 Jan, 2018, 09:46 PM,
        @File-Name : index.js

 */

"use strict";

const scrapper = require('../scrap_images/scrapper');
const img_cld = require('../image_cloud/upload');
const prep = require('../filter_compress_images/compressandfilter');
const crud = require('../models/crud');
const router = (require('express')).Router();

/* GET home page */

router.get('/', function(req, res) {

    res.status(200);
    res.render('index', { title : 'Scrapo' });

});

/* add keys and images from home page */

router.post('/', function (req, res) {

    let key = req.body['key'];
    crud.getDocFromKey(key).then((lnks) => {

        if (lnks === undefined) {

            res.status(500);
            res.end("Internal Error !! (http - 500)", "utf-8", function () { console.log("Http conversation ended successfully !!"); });

        }
        else if (lnks === null) {

            (scrapper.scrape(key)).then((glimgurls) => {

                pt1(glimgurls, key).then((flns) => {

                    pt2(flns, key).then((upimgurls) => {

                        if (upimgurls.length === 0) { res.status(500); res.end("Internal Error !! (http - 500)", "utf-8", function () { console.log("Http conversation ended successfully !!"); }); return; }
                        crud.createDoc({ "key" : key, "links" : upimgurls }).then((flag) => {

                            if (flag) {

                                res.status(200);
                                res.end("Successfully added \'key\' - " + key + " with it's \'images\' to database !! (http - 200)", "utf-8", function () { console.log("Http conversation ended successfully !!"); });

                            }
                            else {

                                res.status(500);
                                res.end("Internal Error !! (http - 500)", "utf-8", function () { console.log("Http conversation ended successfully !!"); });

                            }

                        }).catch((err3) => {

                            console.error(err3);
                            res.status(500);
                            res.end("Internal Error !! (http - 500)", "utf-8", function () { console.log("Http conversation ended successfully !!"); });

                        });

                    }).catch((err2) => {

                        console.error(err2);
                        res.status(500);
                        res.end("Internal Error !! (http - 500)", "utf-8", function () { console.log("Http conversation ended successfully !!"); });

                    });

                }).catch((err1) => {

                    console.error(err1);
                    res.status(500);
                    res.end("Internal Error !! (http - 500)", "utf-8", function () { console.log("Http conversation ended successfully !!"); });

                });

            }).catch((err0) => {

                console.error(err0);
                res.status(500);
                res.end("Internal Error !! (http - 500)", "utf-8", function () { console.log("Http conversation ended successfully !!"); });

            });

        }
        else {

            res.status(200);
            res.end("\'key\' - " + key + " with it's \'images\' already exists in database !! (http - 200)", "utf-8", function () { console.log("Http conversation ended successfully !!"); });

        }

    }).catch((fault) => {

        console.error(fault);
        res.status(500);
        res.end("Internal Error !! (http - 500)", "utf-8", function () { console.log("Http conversation ended successfully !!"); });

    });


});

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

module.exports = router;
