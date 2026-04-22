const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

mongoose.connect("mongodb://127.0.0.1:27017/teamDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use("/api/members", require("./routes/memberroutes"));

app.listen(5000, () => console.log("Server running on port 5000"));