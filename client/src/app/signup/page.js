"use client";

import { useState } from "react";
import axios from "axios";
import styles from '../../styles/Signup.module.css';

export default function Signup() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      console.log("Sending signup request with data:", {
        email,
        firstname,
        lastname,
        password,
        confirmpassword
      });

      const response = await axios.post("http://localhost:8000/signup", {
        email,
        firstname,
        lastname,
        password,
        confirmpassword
      });

      console.log("Response from server:", response);
      
    if (response.status === 200) {
        window.alert("Registration successful!"); 
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 400) {
        setMessage(error.response.data);
      } else if (error.response && error.response.status === 500) {
        setMessage("Internal server error: " + error.response.data);
      } else {
        setMessage("Registration failed. Please try again.");
      }
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Signup</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="firstname" className={styles.label}>First Name:</label>
          <input
            type="text"
            id="firstname"
            className={styles.input}
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="lastname" className={styles.label}>Last Name:</label>
          <input
            type="text"
            id="lastname"
            className={styles.input}
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email:</label>
          <input
            type="email"
            id="email"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.label}>Password:</label>
          <input
            type="password"
            id="password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="confirmpassword" className={styles.label}>Confirm Password:</label>
          <input
            type="password"
            id="confirmpassword"
            className={styles.input}
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.button}>Sign Up</button>
      </form>
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
}