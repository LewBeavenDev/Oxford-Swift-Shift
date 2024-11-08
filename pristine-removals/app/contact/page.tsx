"use client";
import * as React from "react";
import { NextUIProvider, Button, Input, Textarea } from "@nextui-org/react";

import { title } from "@/components/primitives";

export default function ContactPage() {
  return (
    <NextUIProvider>
      <div className="flex flex-col items-center w-full">
        <h1
          className={`${title()} text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-red-400`}
        >
          Contact
        </h1>
        <p className="w-1/2 mt-10 text-center md:w-[450] px-auto">
          Get in contact with us through our form and we will get back to you.
          If you&apos;re in urgent need of a quote, give us a call on the number
          provided.
        </p>
        <div>
          <form
            action="https://formspree.io/f/xgvekqra" // Replace with your desired email
            className="flex flex-col gap-4 pt-10 md:w-[450] w-full"
            method="POST"
          >
            <Input required name="name" placeholder="Name" type="text" />
            <Input required name="email" placeholder="Email" type="email" />
            <Textarea required name="message" placeholder="Message" />
            <Button
              className="bg-gradient-to-r from-amber-600 to-red-400 md:w-full"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </NextUIProvider>
  );
}
