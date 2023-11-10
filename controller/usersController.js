//getrUsers Page

//external imports
const bycrypt = require("bcrypt");

//internal imports

const User = require("../models/People");

function getUsers(req, res, next) {
  res.render("users");
}

async function addUsers(req, res, next) {
  let newUser;
  const hashedPassword = await bycrypt.hash(req.body.password, 10);
  if (req.files && req.files.length > 0) {
    newUser = new User({
      ...req.body,
      avatar: req.files[0].filename,
      password: hashedPassword,
    });
  } else {
    newUser = new User({
      ...req.body,
      password: hashedPassword,
    });
  }

  //save user or send error
  try {
    const result = await newUser.save();
    res.status(200).json({
      message: "User was added successfully",
    });
  } catch (err) {
    res.status(500).json({
      errors: {
        common: {
          msg: "Unknows error occured",
        },
      },
    });
  }
}

module.exports = { getUsers, addUsers };
