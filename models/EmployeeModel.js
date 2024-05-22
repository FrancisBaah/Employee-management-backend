const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Please add name"],
    },
    supervisor: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Employee", employeeSchema);
