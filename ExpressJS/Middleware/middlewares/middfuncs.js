function middleOne(req, res, next) {
  console.log("Middleware running");
  next();
}

function checkAge(req, res, next) {
  const age = req.params.age;
  console.log(age);
  if (age >= 18) {
    next();
  } else {
    res.json({ message: "You are not eligible to vote" });
  }
}

module.exports = { middleOne, checkAge };
