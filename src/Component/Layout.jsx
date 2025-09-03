import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <header>
          <Header />
        </header>

        <main>
          <Outlet />
        </main>

        <footer className="mt-auto">
          <Footer />
        </footer>
      </div>
    </>
  );
}
