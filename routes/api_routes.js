const express = require("express")
const router = express.Router()
const Email = require("../models/Email")

router.use(express.json()); // to support JSON-encoded bodies
router.use(express.urlencoded()); // to support URL-encoded bodies

// This router is used for POST requests

router.post('/add_email', (req, res) => {

    model = new Email();
    model.ip = req.ip;
    model.email = req.body.email;
    model.save();
    res.redirect('/thanks')

})

module.exports = router
