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
        <p className="w-1/2 mt-10 text-center px-auto">
          Get in contact with us through our form and we will get back to you.
          If you&apos;re in urgent need of a quote, give us a call on the number
          provided.
        </p>
        <div>
          <form action="POST" className="flex flex-col w-full gap-4 pt-10">
            <Input placeholder="Name" type="text" />
            <Input placeholder="Email" type="email" />
            <Textarea placeholder="Message" />
            <Button
              className="bg-gradient-to-r from-amber-600 to-red-400"
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
