const express = require("express");
const router = express.Router();
const Member = require("../models/Member");
const multer = require("multer");

// multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});
const upload = multer({ storage });

// CREATE
router.post("/", upload.single("image"), async (req, res) => {
  const newMember = new Member({
    ...req.body,
    image: req.file ? req.file.filename : ""
  });
  await newMember.save();
  res.json(newMember);
});

// READ ALL
router.get("/", async (req, res) => {
  const members = await Member.find();
  res.json(members);
});

// READ ONE
router.get("/:id", async (req, res) => {
  const member = await Member.findById(req.params.id);
  res.json(member);
});

// UPDATE
router.put("/:id", upload.single("image"), async (req, res) => {
  const updateData = {
    ...req.body
  };

  if (req.file) {
    updateData.image = req.file.filename;
  }

  const updated = await Member.findByIdAndUpdate(req.params.id, updateData, {
  returnDocument: "after"
});
  res.json(updated);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Member.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;