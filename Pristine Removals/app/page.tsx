"use client";
import * as React from "react";
import { NextUIProvider, Image, Divider, Button } from "@nextui-org/react";
import Link from "next/link";
import { reviews } from "../app/js/reviewData";
export default function Home() {
  return (
    <NextUIProvider>
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center md:w-3/4 md:h-1/2">
          <Image
            isBlurred
            isZoomed
            alt="Removals Van"
            className="hidden md:block"
            src="/pristine-removals-van.jpg"
          />
          <div className="absolute z-10 flex justify-center max-w-xl p-1 rounded-lg shadow-lg w-50 md:shadow-black/90 md:bg-slate-600">
            <Image
              isBlurred
              alt="Pristine Removals Logo"
              className="hidden md:block"
              src="/horizontal-logo.png"
            />
            <Image
              isBlurred
              alt="Pristine Removals Logo"
              className="mt-10 rounded-none md:rounded-md md:hidden"
              src="/vertical-logo.png"
            />
          </div>
        </div>
      </div>
      <Divider className="hidden w-20 mx-auto my-10 rounded-xl bg-gradient-to-r from-cyan-600 to-gray-500 md:block" />
      <div className="flex justify-start w-full md:px-32 text-start max-h-min">
        <p className="md:w-90% mt-36 md:text-center text-6xl text-transparent text-wrap bg-clip-text bg-gradient-to-r from-cyan-600 to-gray-400">
          Welcome to the Removal Solution of the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-red-400">
            Future{" "}
          </span>
        </p>
      </div>
      <Divider className="w-20 mx-auto my-10 rounded-xl bg-gradient-to-r from-cyan-600 to-gray-500" />
      <div className="flex justify-between gap-4 text-center md:px-32 md:text-start">
        <div className="px-2">
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-gray-500">
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
            Due to our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-red-400">
              Wide Array of Services
            </span>{" "}
            , we have pricing to suit all needs. The best way to get a quote
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-red-400">
              {" "}
              Specific to Your Needs
            </span>{" "}
            is to head to our contact page and speak to us directly.
          </p>
          <Button
            className="mt-4 border-2 bg-gradient-to-r from-amber-600/15 to-red-400/15 border-amber-600"
            href="/contact"
            size="sm"
            variant="bordered"
          >
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
        <div className="hidden md:block">
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
      <div className="md:px-32">
        <div className="w-full max-w-3xl px-4 mt-20">
          <h2 className="mb-6 text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-gray-400">
            Reviews
          </h2>
          <div className="flex flex-col gap-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="p-4 shadow-md bg-slate-800/20 rounded-xl"
              >
                <p className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-red-400">
                  {review.name}
                </p>
                <p className="mt-2 text-gray-200">{review.review}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </NextUIProvider>
  );
}
