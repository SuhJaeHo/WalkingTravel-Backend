const admin = require("../config/firebase-verify");

exports.verifyIdToken = async function (req, res, next) {
  const idToken = req.headers.authorization.split(" ")[1];

  const decodeValue = await admin.auth().verifyIdToken(idToken);

  if (decodeValue) {
    const { uid, email } = decodeValue;

    req.userInfo = { uid, email };
    next();
  }
};
