const express = require("express");
const cartController = require("../controllers/cartController");
const { STATUS_CODE } = require("../constants/statusCode");

const router = express.Router();

router.post("/add", async (request, response) => {
    try {
        await cartController.addProductToCart(request.body);
        response.status(STATUS_CODE.OK).json({ success: true });
    } catch (error) {
        response.status(STATUS_CODE.BAD_REQUEST).json({ success: false, error: error.message });
    }
});

module.exports = router;