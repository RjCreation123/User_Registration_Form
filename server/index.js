import express from "express";
import bcrypt from "bcrypt";
import bodyParser from "body-parser";
import cors from "cors";
import User from "./model.js";
import session from "express-session";

const app = express();
app.use(bodyParser.json());
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: true }));

app.use(cors());

// Handle POST requests for /signup
app.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      email,
      password: hashedPassword
    });

    await newUser.save();
    res.redirect('/signin'); // Redirect to the signin page
  } catch (err) {
    console.error(err);
    res.status(500).send('Error creating user');
  }
});

// Handle POST requests for /signin
app.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      res.status(401).send('Invalid email or password');
      return;
    }

    // Compare the hashed password
    const validPassword = await bcrypt.compare(password, user.password);

    if (validPassword) {
      req.session.userId = user._id; // Store user ID in session
      res.redirect('/page'); // Redirect to the profile page
    } else {
      res.status(401).send('Invalid email or password');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Error signing in');
  }
});

app.listen(8000, () => console.log("running"));
