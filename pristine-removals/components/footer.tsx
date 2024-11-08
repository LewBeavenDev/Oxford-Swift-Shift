"use client";
import { NextUIProvider, Divider } from "@nextui-org/react";
import React from "react";
import Image from "next/image"; // Ensure this import matches your usage context

const Footer = () => {
  return (
    <NextUIProvider>
      <div className="flex flex-col w-full">
        <Divider className="w-20 mx-auto my-10 rounded-xl bg-gradient-to-r from-cyan-600 to-gray-500" />
        <div className="flex flex-row justify-between h-20">
          <div className="w-1/2 px-10">
            <p>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-red-400">
                Email: pristine-removals@gmail.com
              </span>
            </p>
          </div>
          <div className="w-1/2 px-10 text-end">
            <p>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-red-400">
                Phone: 07887631348
              </span>
            </p>
          </div>
        </div>
        <div className="flex justify-center pb-10">
          <Image alt="logo" height={200} src="/vertical-logo.png" width={200} />
        </div>
      </div>
    </NextUIProvider>
  );
};

export default Footer;
