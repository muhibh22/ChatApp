//external imports
const express = require("express");

//internal exports
const { getUsers } = require("../controller/usersController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const avatarUpload = require("../middlewares/users/avatarUpload");

const router = express.Router();

//Users page

router.get("/", decorateHtmlResponse("Users"), getUsers);

//add user

router.post("/", avatarUpload);
module.exports = router;
