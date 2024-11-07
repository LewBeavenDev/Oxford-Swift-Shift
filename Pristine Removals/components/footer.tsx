"use client";
import { NextUIProvider, Divider } from "@nextui-org/react";
import React from "react";

const Footer = () => {
  return (
    <NextUIProvider>
      <div className="w-full">
        <Divider className="w-20 mx-auto my-10 rounded-xl bg-gradient-to-r from-cyan-600 to-gray-500" />
        <div className="flex justify-center">
          <h1>Hello Footer</h1>
        </div>
      </div>
    </NextUIProvider>
  );
};

export default Footer;