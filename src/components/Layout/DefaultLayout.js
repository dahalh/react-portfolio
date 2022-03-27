import React from "react";
import { GoUp } from "../Go-Up/GoUp";
import { Footer } from "./Footer";
import { Header } from "./Header";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
      <GoUp />
    </div>
  );
};

export default DefaultLayout;
