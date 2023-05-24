"use client";
import { app, provider } from "@/firebase-config";
import { getAuth, signInWithPopup, singOut } from "firebase/auth";

const auth = getAuth(app);


export function singUp() {
  signInWithPopup(auth, provider)
    .then((result) => {
      setUser(result.user);

      console.log(result.user)
      console.log(auth)
    })
    .catch((error) => {
      // Handle Errors here.
      console.log(error.message);
      // ...
    });
};
export function singout()
{
const auth = getAuth(app);
    singOut(auth).then(() => {
  // Sign-out successful.
  console.log(auth)
}).catch((error) => {
  console.log(error.message)
});
}
