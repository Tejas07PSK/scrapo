/*

        @Author : Tejas07PSK (Palash Sarkar),
        @CreatedON : 03 , 2018, 8:56 PM,
        @File-Name : schemasandmodels.js

 */

"use strict";

const mongo = require('mongoose');
const Schema = mongo.Schema;

const coll = new Schema({

    "key" : { 'type' : String, 'unique' : true, 'required' : true },
    "links" : { 'type' : [String], 'unique' : true, 'required' : true },
    "dateAdded" : { 'type' : Date, 'default' : Date.now() }

}, { 'collection' : "keysimages" });

module.exports = { "keysimages" : mongo.model('keysimages', coll) };