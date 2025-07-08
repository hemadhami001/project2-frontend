"use client";

import { setAddress, setName } from "@/lib/store/userSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useAppDispatch } from "@/lib/store/hooks";

function Contact() {
  let name = "hema"
  let address = "mahendranagar"
  const dispatch = useAppDispatch()
  dispatch(setName(name))
  dispatch(setAddress(address))
  return (
    <div>
      <h1>Contact Page</h1>
      <p>If you have any questions, feel free to reach out!</p>
    </div>
  );
}

export default Contact;
// This code defines a simple Contact page component in a Next.js application.