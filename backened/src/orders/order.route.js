const express = require('express');
const { createAOrder, getOrderByEmail } = require('../orders/order.controller'); // <-- update this path as needed

const router = express.Router();

// Create order endpoint
router.post("/", createAOrder);

//get orders by user emamil
router.get("/email/:email", getOrderByEmail);

module.exports = router;
