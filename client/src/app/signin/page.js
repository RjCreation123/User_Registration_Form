"use client";

import axios from "axios";
import { useState } from "react";
import styles from '../../styles/Signin.module.css';

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [stayLoggedIn, setStayLoggedIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post("http://localhost:8000/signin", {
        email,
        password,
      });

      // Assuming the response contains a token
      const token = response.data.token;

      if (response.status === 200) {
        if (stayLoggedIn) {
          localStorage.setItem("auth", token);
        } else {
          sessionStorage.setItem("auth", token);
        }
        setMessage("Sign-in successful!");
      }
    } catch (error) {
      console.error("Sign-in error:", error);
      if (error.response && error.response.status === 401) {
        setMessage("Invalid email or password");
      } else {
        setMessage("Sign-in failed. Please try again.");
      }
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Signin</h1>
      <form onSubmit={handleSubmit}>
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
          <label>
            <input
              type="checkbox"
              checked={stayLoggedIn}
              onChange={() => setStayLoggedIn(!stayLoggedIn)}
            />
            Stay logged in
          </label>
        </div>
        <button type="submit" className={styles.button}>Sign In</button>
      </form>
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
}