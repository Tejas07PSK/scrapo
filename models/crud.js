/*

        @Author : Tejas07PSK (Palash Sarkar),
        @CreatedON : 04 Jan, 2019, 2:22 AM,
        @File-Name : crud.js

 */

"use strict";

const models = require("./schemasandmodels");

let eff = undefined;

module.exports = {

    // add search-key and links of images as documents to mongodb.

    "createDoc" : async function(obj) {

        await ((new models.keysimages(obj)).save()).then(

            (doc) => { console.log("Document insertion successful in collection \'scrapo\' !!"); console.log(`Newly created doc is : \n ${doc}`); eff = true; },
            (err) => { console.log("Document insertion failed !! ERROR !!"); console.log(err); eff = false; }

        );
        return (eff);

    },

    // get links of images under existing search-key, from mongodb.

    "getDocFromKey" : async function(key) {

        await (models.keysimages).findOne({ 'key' : key }, "links", function (err, doc) {

            if(err) { console.log("Document retrieval failed !! Error !!"); console.log(err); eff = undefined; }
            else if (doc !== null) { console.log("Document retrieval successful !!"); eff = doc.links; }
            else { console.log("Document not found invalid \'key\' !!"); eff = null; }

        });
        return (eff);

    },

    // get all existing search-keys from mongodb.

    "getAllKeys" : async function() {

        await (models.keysimages).find({}, 'key', function (err, docs) {

            if (err) { console.log("Keys retrieval failed !! Error !!"); console.log(err); eff = undefined; }
            else if (docs !== null) {

                console.log("Keys retrieval successful !!");
                eff = [];
                for(let i = 0; i < docs.length; i += 1) { eff.push(docs[i].key); }

            }
            else { console.log("Unable to find any keys !!"); eff = false; }

        });
        return (eff);

    },

};