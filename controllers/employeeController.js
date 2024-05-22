const asyncHandler = require("express-async-handler");
const EmployeeModel = require("../models/EmployeeModel");

const getEmployees = asyncHandler(async (req, res) => {
  const employee = await EmployeeModel.find();
  res.status(200).json(employee);
});

const createEmployees = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error("Please add name");
  }
  const employee = await EmployeeModel.create({ name: req.body.name });
  res.status(200).json(employee);
});

const updateEmployees = asyncHandler(async (req, res) => {
  const employeeExist = await EmployeeModel.findById(req.params.id);
  if (!employeeExist) {
    res.status(400);
    throw new Error("Employess does not exist");
  }
  const updateEmployee = await EmployeeModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updateEmployee);
});

const deleteEmployees = asyncHandler(async (req, res) => {
  const employeeExist = await EmployeeModel.findById(req.params.id);
  if (!employeeExist) {
    res.status(400);
    throw new Error("Employess does not exist");
  }
  await employeeExist.deleteOne();
  res.status(200).json({ id: req.params.id });
});
module.exports = {
  getEmployees,
  createEmployees,
  updateEmployees,
  deleteEmployees,
};
