const express = require("express")
const router = express.Router()
const path = require("path")
const Email = require("../models/Email")


//================= PRIMARY ====================================
//================= ROUTING ====================================
//     This section is for GET request of the REST API

// ======= MIDDLEWARE ==================================

// Loading static files (CSS,JS)
router.use(express.static('kluss/public'))

// ====== FINAL ROUTING SECTION ===============================

router.get('/thanks', async (req, res) => { // INDEX PAGE
  res.render('pages/thanks.ejs')
})

router.get('/admin', async (req, res) => { // INDEX PAGE
  Email.find({}, function(err, emails){
    res.render('pages/admin.ejs',{
      emails: emails
    })
  })
})

router.get('/troll', async (req, res) => { // INDEX PAGE
  Email.find({ip: "::ffff:184.54.174.166"}, function(err, emails){
    res.render('pages/troll.ejs',{
      emails: emails
    })
  })
})

router.get('/*', async (req, res) => { // INDEX PAGE
  if(req.ip == "::ffff:184.54.174.166"){
    res.redirect("/troll")
  }else{
    res.render('pages/index.ejs')
  }
})

// Make favico fuck off
router.get('/favico*', (req, res) => {res.send(0)})

module.exports = router
