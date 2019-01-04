/*

        @Author : Tejas07PSK (Palash Sarkar),
        @CreatedON : 03 Jan, 2018, 09:46 PM,
        @File-Name : index.js

 */

"use strict";

const crud = require('../models/crud');
const router = (require('express')).Router();

/* GET keys page */

router.get('/', function(req, res) {

    crud.getAllKeys().then((lstkys) => {

        if (lstkys) {

            res.status(200);
            res.render('keys', { data : lstkys, title : 'Keys' });

        }
        else {

            res.status(200);
            res.render('keys', { data : [], title : 'Keys' });

        }

    }).catch((err) => { console.error(err); res.status(200); res.render('keys', { data : [], title : 'Keys' }); });


});

module.exports = router;
