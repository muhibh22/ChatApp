//getrLogin Page

function getLogin(req, res, next) {
  res.render("index", {
    title: "Login- ChatApp",
  });
}

module.exports = { getLogin };
