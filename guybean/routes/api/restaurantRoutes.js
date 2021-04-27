// routes/api/orders.js

const express = require('express');
const router = express.Router();
const restaurantCtrl = require('../../controllers/restaurantCtrl');

// POST new order. Full address will be POST /api/orders
router.post('/', restaurantCtrl.create)
// GET /api/orders
router.get('/', restaurantCtrl.index)

router.get('/addrestaurant',restaurantCtrl.addRestaurants)  //ADDING RESTAURANTS 

router.get('/myrestaurants',restaurantCtrl.myRestaurants) //THIS IS THE SUMMARY PAGE OF MY RESTAURANT

router.get('/myrestaurants/:id',restaurantCtrl.myRestaurantsDetails) //DETAILS OF MY RESTAURANT PAGE 



module.exports = router;