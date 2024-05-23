const express = require("express");
const connectToDB = require("./config/db");
const cors = require("cors");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 8000;
connectToDB();

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://employee-management-topaz.vercel.app",
    ],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/employee", require("./routes/employeeRoutes"));
app.use(require("./middleware/errorMiddleware"));

app.listen(port, () => console.log(`We are on port: ${port}`));
