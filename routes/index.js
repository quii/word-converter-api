var express = require('express');
var router = express.Router();
var mammoth = require("mammoth");

/* GET home page. */
router.post('/', function (req, res) {
    mammoth.convertToHtml({buffer: req.files.doc.data})
        .then(function (result) {
            res.status(200).send(result.value);
        })
        .done();
});

module.exports = router;
