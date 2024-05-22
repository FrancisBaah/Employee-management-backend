const mongoose = require("mongoose");
const Counter = require("./counter");

const employeeSchema = mongoose.Schema(
  {
    employeeId: {
      type: Number,
      unique: true,
    },
    name: {
      type: String,
      required: [true, "Please add name"],
    },
    supervisor: String,
  },
  { timestamps: true }
);

// Pre-save hook to increment the employeeId
employeeSchema.pre("save", async function (next) {
  const doc = this;
  if (doc.isNew) {
    const counter = await Counter.findByIdAndUpdate(
      { _id: "employeeId" },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );
    doc.employeeId = counter.seq;
  }
  next();
});

module.exports = mongoose.model("Employee", employeeSchema);
