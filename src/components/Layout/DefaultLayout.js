import React from "react";
import { GoUp } from "../Go-Up/GoUp";
import { Hero } from "../Hero/Hero";
import { Footer } from "./Footer";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Hero />

      <main>{children}</main>
      <Footer />
      <GoUp />
    </div>
  );
};

export default DefaultLayout;
