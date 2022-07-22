const express = require("express");
const { verifyIdToken } = require("../middlewares/verifyIdToken");
const loginController = require("../controllers/login.controller");

const router = express.Router();

router.get("/", verifyIdToken, loginController);

module.exports = router;
