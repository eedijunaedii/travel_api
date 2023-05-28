const express = require('express');
const apiRoute = express.Router();
const userController = require('../controllers/user');
const roleController = require('../controllers/role');
const orderController = require('../controllers/order');
const cityController = require("../controllers/city");
const destinationController = require('../controllers/destination');
const auth = require('../controllers/verifyJwtToken');

apiRoute.get('/', function(req, res) {
  res.send({
    header: 'Travel Api'

  });
});

apiRoute.post('/auth/signup', (req, res) => {
  try {
    userController.signUp(req, res);
  } catch (err) {
    console.log('>> Error: ' + err);
    res.status(400).send({
      request_status: false,
      message: err.message,
    });
  }
});

apiRoute.post('/auth/signin', (req, res) => {
  try {
    userController.signIn(req, res);
  } catch (err) {
    console.log('>> Error: ' + err);
    res.status(400).send({
      request_status: false,
      message: err.message,
    });
  }
});

apiRoute.get('/roles', (req, res) => {
  try {
    auth.verifyToken(req, res, roleController.findAll, 3);
  } catch (err) {
    console.log(' Error: ' + err);
    res.status(400).send({
      request_status: false,
      message: err.message,
    });
  }
});

apiRoute.get('/roles/:role', (req, res) => {
  try {
    auth.verifyToken(req, res, roleController.findOne, 3);
  } catch (err) {
    console.log('>> Error: ' + err);
    res.status(400).send({
      request_status: false,
      message: err.message,
    });
  }
});

apiRoute.get('/order', (req, res) => {
  try {
    auth.verifyToken(req, res, orderController.findMyOrder);
  } catch (err) {
    console.log(' Error: ' + err);
    res.status(400).send({
      request_status: false,
      message: err.message,
    });
  }
});

apiRoute.post('/order', (req, res) => {
  try {
    auth.verifyToken(req, res, orderController.createOrder);
  } catch (err) {
    console.log(' Error: ' + err);
    res.status(400).send({
      request_status: false,
      message: err.message,
    });
  }
});

apiRoute.get('/order/admin', (req, res) => {
  try {
    auth.verifyToken(req, res, orderController.findAll, 3);
  } catch (err) {
    console.log(' Error: ' + err);
    res.status(400).send({
      request_status: false,
      message: err.message,
    });
  }
});

apiRoute.get('/order/find/:tix_id', (req, res) => {
  try {
    auth.verifyToken(req, res, orderController.findOne);
  } catch (err) {
    console.log(' Error: ' + err);
    res.status(400).send({
      request_status: false,
      message: err.message,
    });
  }
});

apiRoute.get('/destination', (req, res) => {
  try {
    auth.verifyToken(req, res, destinationController.findAll);
  } catch (err) {
    console.log(' Error: ' + err);
    res.status(400).send({
      request_status: false,
      message: err.message,
    });
  }
});

apiRoute.post('/destination', (req, res) => {
  try {
    auth.verifyToken(req, res, destinationController.create, 3);
  } catch (err) {
    console.log(' Error: ' + err);
    res.status(400).send({
      request_status: false,
      message: err.message,
    });
  }
});

apiRoute.post('/city', (req, res) => {
  try {
    auth.verifyToken(req, res, cityController.NewCity, 3);
  } catch (err) {
    console.log(' Error: ' + err);
    res.status(400).send({
      request_status: false,
      message: err.message,
    });
  }
});

module.exports = apiRoute;
