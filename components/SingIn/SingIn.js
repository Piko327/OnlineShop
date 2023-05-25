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

  return user ? (<>
    <div className= " bg-slate-100 rounded-3xl">
      <img className="mx-5 mt-3"
        src={user.photoURL}
        alt="Picture of the author"
        width={50}
        height={40}
      />
      <p className="text-center p-1 font-bold">
      {user.displayName}</p>
    </div>
    <button  className="text-slate-100 text-sm lg:text-lg bg-sky-500 lg:m-1 lg:my-6 my-8 rounded-3xl p-2 hover:scale-105 ease-in duration-150" 
     onClick={singOutHadler}>LOGOUT</button></>
  ) : (
    <>
      <button  className=" text-slate-100 text-sm lg:text-lg bg-sky-500 lg:m-1 lg:my-6 my-8 rounded-3xl p-2  hover:scale-105 ease-in duration-150" 
      onClick={singInHadler}>LOGIN</button>
    </>
  );
};

export default SingIn;
