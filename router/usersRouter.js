//external imports
const express = require("express");
const { check } = require("express-validator");

//internal exports
const { getUsers, addUsers } = require("../controller/usersController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const avatarUpload = require("../middlewares/users/avatarUpload");
const {
  addUserValidators,
  addUserValidationHandler,
} = require("../middlewares/users/userValidator");

const router = express.Router();

//Users page

router.get("/", decorateHtmlResponse("Users"), getUsers);

//add user

router.post(
  "/",
  avatarUpload,
  addUserValidators,
  addUserValidationHandler,
  addUsers
);
module.exports = router;
