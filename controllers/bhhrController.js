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
const EditJob = asyncHandler(async (req, res) => {
  const { title, type, location, length, salary } = req.body;
  //Check whether job exist
  const existingJob = await bhhrModel.findById(req.params.id);
  if (!existingJob) {
    res.status(400);
    throw new Error("Job does not exit");
  }
  const job = await bhhrModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(job);
});
const DeleteJob = asyncHandler(async (req, res) => {
  const { title, type, location, length, salary } = req.body;
  //Check whether job exist
  const existingJob = await bhhrModel.findById(req.params.id);
  if (!existingJob) {
    res.status(400);
    throw new Error("Job does not exit");
  }
  await existingJob.deleteOne();
  res.status(200).json({ id: req.params.id });
});

module.exports = { createJob, getJobs, EditJob, DeleteJob };
