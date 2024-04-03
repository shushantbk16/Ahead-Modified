import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="fixed top-[0] left-[0]  bg-white z-[100]">
      <header className="flex  justify-between h-20 items-center py-3 px-20 w-screen">
        <div className="">
          <Image width={50} height={50} alt="" src="/ahead-logo.png" />
        </div>
        <div className="">
          <ul className="flex font-sans gap-6 items-center ">
            <li className="cursor-pointer  ">Emotions</li>
            <li className="cursor-pointer ">Manifesto</li>
            <li className="cursor-pointer ">Self awareness test</li>
            <li className="cursor-pointer ">Work with us</li>
            <Link href="/admin">
            <li className="cursor-pointer " >Admin</li>
            </Link>
          </ul>
        </div>
        <div className="font-sans">
          <button className="cursor-pointer font-sans text-white bg-black rounded-full px-4 py-2 font-semibold">
            Download App
          </button>
        </div>
      </header>
    </div>
  );
}
