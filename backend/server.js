const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");

const app = express();
const port = process.env.PORT || 5000;

// Database connection (replace with your MongoDB URI)
const uri =
  "mongodb+srv://vishalbhat21:fZDqf9abUtmzXu7d@cluster0.ijnh9pv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Define User schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Hash password before saving a user
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User = mongoose.model("User", UserSchema);

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists!" });
    }

    const newUser = new User({ name, email, password });
    await newUser.save();

    res.status(201).json({ message: "User created successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password!" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password!" });
    }

    // Handle successful login (e.g., generate JWT token)
    res.status(200).json({ message: "Login successful!" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
