const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const verifyToken = require("./middleware/auth.middleware");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

const authRoutes = require("./routes/auth.routes");
app.use("/api/auth", authRoutes);
app.use("/api/tasks", require("./routes/task.routes"));

app.get("/api/dashboard", verifyToken, (req, res) => {
    res.json({
        message: "This is a protected dashboard route",
        userId: req.userId 
    });
});


app.listen(process.env.PORT || 5000, () =>
  console.log("Server running")
);
