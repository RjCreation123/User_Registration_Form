import express from "express";
//import { sign, verify } from "jsonwebtoken";
import bcrypt from "bcrypt";
import bodyParser from "body-parser";
import cors from "cors";
import User from "./model.js";
import session from "express-session";

const app = express();
app.use(bodyParser.json());

app.use(cors());

app.post("/singup", async (req, res) => {
  const { email, firstname, lastname, password } = req.body;

  if (!email || !firstname || !lastname || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const createdUser = await User.create({
    firstname,
    lastname,
    email,
    password,
    confirmpassword
  });

  console.log(createdUser);

  res.json("OK");
});
app.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  // const userExists = await User.findOne({
  //   $where:{
  //     email:email
  //   }
  // });


  res.json({
    email:""
  });
});

app.listen(8000, () => console.log("running"));
