const router = require("express").Router();
const Task = require("../models/Task");
const auth = require("../middleware/auth.middleware");

router.use(auth);

router.get("/", async (req, res) => {
  const tasks = await Task.find({ userId: req.userId });
  res.json(tasks);
});

router.post("/", async (req, res) => {
  const task = await Task.create({
    title: req.body.title,
    userId: req.userId
  });
  res.status(201).json(task);
});

router.delete("/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;

