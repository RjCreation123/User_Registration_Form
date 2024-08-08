"use client";

import axios from "axios";
import { useState } from "react";
import styles from '../../styles/Signin.module.css';
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [stayLoggedIn, setStayLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("https://user-registration-form-server.onrender.com/signin", {
        email,
        password,
      });

      const { token, name } = response.data;

      if (response.status === 200) {
        if (stayLoggedIn) {
          localStorage.setItem("auth", token);
          localStorage.setItem("name", name);
        } else {
          sessionStorage.setItem("auth", token);
          sessionStorage.setItem("name", name);
        }
        router.push("/");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      console.error("Sign-in error:", error);
      if (error.response && error.response.status === 401) {
        setMessage("Invalid email or password");
      } else {
        setMessage("Sign-in failed. Please try again.");
      }
    } finally {
      setLoading(false);
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
              aria-label="Stay logged in"
            />
            Stay logged in
          </label>
        </div>
        <button type="submit" className={styles.button} disabled={loading}>
          {loading ? "Signing In..." : "Sign In"}
        </button>
      </form>
      {message && <p className={styles.message}>{message}</p>}
      <div className="main-signup-footer mt-3 text-center">
        <p>
          Don't have an account?{" "}
          <Link href={`/signup`}>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
