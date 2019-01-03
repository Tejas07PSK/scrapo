/*

        @Author : Tejas07PSK (Palash Sarkar),
        @CreatedON : 04 Jan, 2019, 3:09 AM,
        @File-Name : unitTest.js

 */

"use strict";

const conn = require("./dbconnectmanage");
const ops = require("./crud");
const test_obj = {

    'key' : "ritchie",
    'links' : ["https://res.cloudinary.com/dczwplg2j/image/upload/v1546531788/gfdjy6vawd1fnh22cuy3.jpg"],
    'dateAdded' : Date.now()

};
const inp_key = 'banana';

//(async () => { await conn.open() })();

//(ops.createDoc(test_obj)).then((res) => { console.log(res); }).catch((err) => { console.error(err); });
//(ops.getDocFromKey(inp_key)).then((res) => { console.log(res); }).catch((err) => { console.error(err); });
//ops.getAllKeys().then((res) => { console.log(res); }).catch((err) => { console.log(err); });