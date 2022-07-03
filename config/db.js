const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URL, { dbName: "WalkingTravel" })
  .then(() => console.log("mongoDB connected"))
  .catch((e) => console.log(e));
