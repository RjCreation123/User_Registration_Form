import mongoose from "mongoose";

const connect = mongoose.connect(
  "mongodb+srv://rj8121774:5DEfUAX8syGZSETs@cluster0.36cldwf.mongodb.net/rahul",
);

connect
  .then(() => {
    console.log("Database Connected Successfully");
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure unique email addresses
  },
  password: {
    type: String,
    required: true,
  },
  confirmpassword: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);



export default User;