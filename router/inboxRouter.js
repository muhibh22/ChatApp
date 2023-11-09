//external imports
const express = require("express");

//internal exports
const { getInbox } = require("../controller/inboxController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

const router = express.Router();

//Inbox page

router.get("/", decorateHtmlResponse("Inbox"), getInbox);

module.exports = router;
