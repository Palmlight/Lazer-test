import React, { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="flex flex-col h-screen relative w-full">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
