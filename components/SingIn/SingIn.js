"use client";
import { app, provider } from "@/firebase-config";
import { getAuth, signInWithPopup ,signOut} from "firebase/auth";
import {React, useState } from "react";

const SingIn = () => {
  const [user, setUser] = useState(null);

  const  singOutHadler = () => {
    const auth = getAuth(app);
  signOut(auth)
    .then(() => {
     setUser(auth.currentUser);
    })
  };

   const  singInHadler =()=>{
    const auth = getAuth(app);
     signInWithPopup(auth, provider)
    .then((result) => {
       setUser(result.user);
    })
  };

  return user ? (
    <div>
      <img
        src={user?.photoURL}
        alt="Picture of the author"
        width={23}
        height={23}
      />
      <p>{user.displayName}</p>
      <button onClick={singOutHadler}>signOut</button>
    </div>
  ) : (
    <>
      <button onClick={singInHadler}>signIn</button>
    </>
  );
};

export default SingIn;
