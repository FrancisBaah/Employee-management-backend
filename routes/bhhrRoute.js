const express = require("express");
const { createJob, getJobs } = require("../controllers/bhhrController");

const router = express.Router();

router.route("/").get(getJobs).post(createJob);

module.exports = router;
