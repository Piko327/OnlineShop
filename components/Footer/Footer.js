import Link from "next/link";
import React from "react";
import {
    AiFillFacebook,
    AiFillInstagram,
    AiFillTwitterSquare,
} from "react-icons/ai";

const Footer = () => {

    const titleStyle = "py-2 font-bold text-base italic "

    return (<div className="bg-rose-950 text-gray-300">
        <div className="flex  items-center gap-5 flex-wrap mx-10 justify-around  pt-3 px-10 md:px-28   md:text-lg ">
            <div className=" md:w-1/4">
                <Link href="/" className="text-xl pl-2 italic font-bold">
                    T-Shop
                </Link>

                <p className="p-5 text-gray-400  leading-5">
                    One of the most proven stores on the market. If you are looking for the best ratio between price and quality.
                </p>
            </div>

            <div>
                <h1 className={titleStyle}>CATEGORIES</h1>

                <ul className="text-gray-400 flex  text-sm flex-col gap-1" >
                    <li>Men</li>

                    <li>Women</li>

                    <li>Jewelry</li>

                    <li>Electronic</li>
                </ul>

            </div>

            <div>
                <h1 className={titleStyle}>LINKS</h1>

                <ul className="text-gray-400 flex text-sm   flex-col gap-1">
                    <li>Home</li>

                    <li>Shop</li>

                    <li>About Us</li>
                </ul>
            </div>

            <div >
                <h1 className={titleStyle}>FOLLOW US</h1>

                <ul className="text-gray-400 flex gap-3 text-2xl justify-between items-center" >
                    <li >
                        <Link href="https://www.facebook.com/profile.php?id=100007746210819"> <AiFillFacebook /></Link>
                    </li>

                    <li>
                        <Link href="https://twitter.com/Fiki372"> <AiFillTwitterSquare /></Link>
                    </li>

                    <li >
                        <Link href="https://www.instagram.com/fikiivanovv/?igshid=OGQ5ZDc2ODk2ZA%3D%3D&fbclid=IwAR2MPCR88oz1Ij3hZn7BPprhXJR0sjDn94yYtlyJ3h7XE4gctdeBFciW0Ao"> <AiFillInstagram /></Link>
                    </li>
                </ul>
            </div>
        </div>

        <p className="md:text-lg text-center py-4  text-gray-300"> Copyright 2023 developed by Fiki Ivanov.All rights reserved.</p>
    </div>
    );
};

export default Footer;
