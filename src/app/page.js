"use client";

import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/navigation";
import Unauthenticated from "@/components/unauthenticated";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();

  const [token, setToken] = useState(false);
  const [name, setName] = useState(null);

  useEffect(() => {
    const getToken =
      sessionStorage.getItem("auth") || localStorage.getItem("auth");
    if (getToken) {
      setToken(true);
      const getName =
        sessionStorage.getItem("name") || localStorage.getItem("name");
      setName(getName);
    }
  }, []);

  const handleSignOut = () => {
    sessionStorage.removeItem("auth");
    localStorage.removeItem("auth");
    sessionStorage.removeItem("name");
    localStorage.removeItem("name");
    setToken(false);
    setName(null);
    router.push("/");
  };

  return (
    <>
      {token ? (
        <>
          <h1>Welcome {name}!</h1>
          <div className={styles.buttonContainer}>
            <button
              type="submit"
              className={styles.button}
              onClick={handleSignOut}
            >
              SignOut
            </button>
          </div>
        </>
      ) : (
        <Unauthenticated></Unauthenticated>
      )}
    </>
  );
}
