/*

        @Author : Tejas07PSK (Palash Sarkar),
        @CreatedON : 05 Jan, 2019, 2:12 AM,
        @File-Name : images.js

 */

"use strict";

const crud = require('../models/crud');
const router = (require('express')).Router();

/* GET images page */

router.get('/', function(req, res) {

    let key = req.query['key'];
    crud.getDocFromKey(key).then((lstlink) => {

        if (lstlink) {

            res.status(200);
            res.render('images', { list : lstlink, title : 'Images', id : key });

        }
        else {

            res.status(200);
            res.render('images', { list : [], title : 'Images', id : key });

        }

    }).catch((err) => { console.error(err); res.status(200); res.render('images', { list : [], title : 'Images', id : key }); });

});

module.exports = router;