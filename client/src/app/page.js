"use client";

import Image from "next/image";
import styles from '../styles/Home.module.css';
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  const handleSignIn = () => {
    router.push('/signin');
  };

  const handleSignUp =() => {
    router.push('/signup');
  };

  return (
   <>
     <h1>Welcome to the User Registration Page!</h1>
     <div className={styles.buttonContainer}>
       <button type="submit" className={styles.button} onClick={handleSignIn}>Sign in</button>
       <button type="submit" className={styles.button} onClick={handleSignUp}>Sign up</button>
     </div>
   </>
  );
}
