const mongoose = require("mongoose");

const bhhrSchema = mongoose.Schema(
  {
    title: {
      type: String,
      require: [true, "Please job title"],
    },
    location: String,
    type: String,
    length: Number,
    salary: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("bhhr", bhhrSchema);
