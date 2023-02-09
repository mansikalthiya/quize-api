var express = require('express');
var user = require('../moduls/category');
var final = require('../moduls/quize');
var router = express.Router();

/* GET home page. */
router.post('/add', async function (req, res, next) {
  try {
    console.log(req.body)
    let data = await user.create(req.body)
    res.status(201).json({
      status: "success",
      message: "siging successfull",
      data:data
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message
    })
  }
});
router.get('/delete', async function (req, res, next) {
  try {
    let id = req.query.id
    console.log(id);
    let data = await user.findByIdAndDelete(id)
    res.status(201).json({
      status:"delete",
      message:"delete successfull",
      data:data
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message
    })
  }
});
router.post('/update', async function (req, res, next) {
  try {
    let eid = req.query.eid
    console.log(eid);
    let data = await user.findByIdAndUpdate(eid , req.body)
    console.log(data);
    res.status(201).json({
      status: "update ",
      message: "update successfull",
      data:data
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message
    })
  }
});
router.get('/show', async function (req, res, next) {
  try {
    let data = await user.find()
    res.status(201).json({
      status: "success",
      message: "siging successfull",
      data:data
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message
    })
  }
});
router.post('/adddata', async function (req, res, next) {
  try {
    console.log(req.body)
    let data = await final.create(req.body)
    res.status(201).json({
      status: "success",
      message: "siging successfull",
      data:data
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message
    })
  }
});
router.get('/deletedata', async function (req, res, next) {
  try {
    let id = req.query.id
    console.log(id);
    let data = await final.findByIdAndDelete(id)
    res.status(201).json({
      status:"delete",
      message:"delete successfull",
      data:data
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message
    })
  }
});
router.post('/updatedata', async function (req, res, next) {
  try {
    let eid = req.query.eid
    console.log(eid);
    let data = await final.findByIdAndUpdate(eid , req.body)
    console.log(data);
    res.status(201).json({
      status: "update ",
      message: "update successfull",
      data:data
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message
    })
  }
});
router.get('/showdata', async function (req, res, next) {
  try {
    let data = await final.find()
    res.status(201).json({
      status: "success",
      message: "siging successfull",
      data:data
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message
    })
  }
});



module.exports = router;
