import express from "express";
import bcrypt from "bcrypt";
import bodyParser from "body-parser";
import cors from "cors";
import User from "./model.js";
import session from "express-session";
import jwt from 'jsonwebtoken';

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: true }));
// Replace 'your_secret_key' with a secure key and manage it appropriately (e.g., using environment variables)
const JWT_SECRET = 'your_secret_key';

// Handle POST requests for /signup
app.post('/signup', async (req, res) => {
  const { email, firstname, lastname, password, confirmpassword } = req.body;

  console.log("Received signup request with body:", req.body);

  try {

    // Validate that passwords match
    if (password !== confirmpassword) {
      return res.status(400).send('Passwords do not match');
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      email,
      firstname,
      lastname,
      password: hashedPassword,
      confirmpassword: hashedPassword
    });

    await newUser.save();
    res.status(200).send('User created successfully');
  } catch (err) {
    console.error("Error creating user:", err);

    // Handle duplicate email error
    if (err.code === 11000 && err.keyPattern && err.keyPattern.email) {
      res.status(400).send('Email already exists');
    } else {
      res.status(500).send('Error creating user');
    }
  }
});

// Handle POST requests for /signin
app.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).send('Invalid email or password');
    }

    // Compare the hashed password
    const validPassword = await bcrypt.compare(password, user.password);

    if (validPassword) {
      // Create a JWT token
      const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });

      // Respond with the token
      res.json({ token });
    } else {
      res.status(401).send('Invalid email or password');
    }
  } catch (err) {
    console.error("Error signing in:", err);
    res.status(500).send('Error signing in');
  }
});

app.listen(8000, () => console.log("running"));
