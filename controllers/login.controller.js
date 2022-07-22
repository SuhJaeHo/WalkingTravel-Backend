const User = require("../models/User");

module.exports = async function (req, res, next) {
  const { uid, email } = req.userInfo;

  const data = await User.findOne({ uid }).lean();

  if (!data) {
    const newUser = new User({
      uid,
      email,
    });

    newUser.save(async function (err) {
      if (err) {
        next(err);
      } else {
        res.send({ message: "success" });
      }
    });
  } else {
    res.send({ message: "success" });
  }
};
