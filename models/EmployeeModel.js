const mongoose = require("mongoose");
const Counter = require("./counter");

const employeeSchema = mongoose.Schema(
  {
    id: {
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

// Pre-save hook to increment the id
employeeSchema.pre("save", async function (next) {
  const doc = this;
  if (doc.isNew) {
    const counter = await Counter.findByIdAndUpdate(
      { _id: "id" },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );
    doc.id = counter.seq;
  }
  next();
});

module.exports = mongoose.model("Employee", employeeSchema);
