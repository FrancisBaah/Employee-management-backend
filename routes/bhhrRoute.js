const express = require("express");
const {
  createJob,
  getJobs,
  EditJob,
  DeleteJob,
} = require("../controllers/bhhrController");

const router = express.Router();

router.route("/").get(getJobs).post(createJob);
router.route("/:id").put(EditJob).delete(DeleteJob);

module.exports = router;
