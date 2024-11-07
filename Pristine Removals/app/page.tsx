"use client";
import * as React from "react";
import { NextUIProvider, Image, Divider, Button } from "@nextui-org/react";
export default function Home() {
  return (
    <NextUIProvider>
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center w-3/4 h-1/2">
          <Image
            isBlurred
            isZoomed
            alt="Removals Van"
            src="/pristine-removals-van.jpg"
          />
          <div className="absolute z-10 w-1/2 p-1 shadow-lg shadow-black/50 rounded-xl bg-slate-600/50">
            <Image
              isBlurred
              alt="Pristine Removals Logo"
              src="/horizontal-logo.png"
            />
          </div>
        </div>
      </div>
      <Divider className="w-20 mx-auto my-10 rounded-xl bg-gradient-to-r from-cyan-600 to-gray-500" />
      <div className="flex justify-start w-full px-32 text-start max-h-min">
        <p className="w-90% text-6xl text-transparent text-wrap bg-clip-text bg-gradient-to-r from-cyan-600 to-gray-400">
          Welcome to the Removal Solution of the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-red-400">
            Future{" "}
          </span>
        </p>
      </div>
      <Divider className="w-20 mx-auto my-10 rounded-xl bg-gradient-to-r from-cyan-600 to-gray-500" />
      <div className="flex justify-between gap-4 px-32 text-start">
        <div className="">
          <p className="text-start">
            Here at{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-gray-400">
              Pristine Removals
            </span>
            , for the past{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-red-400">
              Ten Years
            </span>
            , we are proud to have delivered{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-red-400">
              Consistent Results
            </span>
            , to the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-red-400">
              Highest Moving Standards.
            </span>{" "}
            From complete house moves to just one item of furniture, we will
            move it.{" "}
          </p>
          <Button className="mt-4" color="primary" size="sm" variant="bordered">
            {" "}
            Find out More{" "}
          </Button>
          <Divider className="w-20 mx-auto my-4 rounded-xl bg-gradient-to-r from-cyan-600 to-gray-500" />
          <p className="text-start">
            Due to our wide array of services, we have pricing to suit all
            needs. Check out our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-red-400">
              Pricing{" "}
            </span>
            via the button below!
          </p>
          <Button
            className="mt-4 border-2 bg-gradient-to-r from-amber-600/15 to-red-400/15 border-amber-600"
            size="sm"
            variant="bordered"
          >
            {" "}
            Pricing{" "}
          </Button>
        </div>
        <div className="">
          <Image
            isBlurred
            isZoomed
            alt="Boxes in House"
            className="overflow-hidden bg-cover"
            height={450}
            src="/moving-1.jpg"
            width={2000}
          />
        </div>
      </div>
    </NextUIProvider>
  );
}
