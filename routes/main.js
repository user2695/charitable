const express = require("express")
const router = require("express").Router();

// router.get("/" , (req,res) => {
//     res.render("index")
//   });

router.get("/registerUser" , (req,res) => {
    res.render("registerUser")
  });
  
router.get("/hi" , (req,res) => {
    res.send("hiiii")
  });

  router.get("/registerOrg" , (req,res) => {
    res.render("registerOrg")
  });

  router.get("/login" , (req,res) => {
    res.render("login")
  });




module.exports = router;