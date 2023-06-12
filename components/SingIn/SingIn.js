"use client";
import Image from 'next/image';
import {React} from "react";
import { signIn ,signOut, useSession} from 'next-auth/react';
import { BsSignIntersection } from 'react-icons/bs';

const SingIn = () => {
 const {data}=useSession()
  return data ? (<>
    <div className= " bg-slate-100 rounded-3xl">
      <Image className="mx-5 mt-3"
        src={data.user.image}
        alt="Picture of the author"
        width={30}
        height={20}
      />
      <p className="text-center p-1  font-bold">
        {
          data.user.name
        }
      </p>
    </div>
    <button  className="text-slate-100 text-xs   bg-rose-950 lg:m-1 lg:my-4 my-5 rounded-3xl px-2 py-1  hover:scale-105 ease-in duration-150" 
     onClick={()=>signOut()}>LOGOUT</button></>
  ) : (
    <>
      <button  className="text-slate-100 text-xs   bg-rose-950 lg:m-1 lg:my-4 my-5 rounded-3xl px-2 py-1  hover:scale-105 ease-in duration-150" 
      onClick={()=>signIn()}>SINGIN</button>
    </>
  );
};

export default SingIn;
