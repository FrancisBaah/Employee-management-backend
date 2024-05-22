const express = require("express");
const {
  getEmployees,
  createEmployees,
  updateEmployees,
  deleteEmployees,
} = require("../controllers/employeeController");

const router = express.Router();

router.route("/").get(getEmployees).post(createEmployees);
router.route("/:id").put(updateEmployees).delete(deleteEmployees);

module.exports = router;
