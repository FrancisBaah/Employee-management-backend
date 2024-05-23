const asyncHandler = require("express-async-handler");
const bhhrModel = require("../models/bhhrModel");
const getJobs = asyncHandler(async (req, res) => {
  const job = await bhhrModel.find();
  res.status(200).json(job);
});
const createJob = asyncHandler(async (req, res) => {
  const { title, type, location, length, salary } = req.body;
  const job = await bhhrModel.create({ title, type, location, length, salary });
  res.status(200).json(job);
});

module.exports = { createJob, getJobs };
