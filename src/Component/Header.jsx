import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);

  const linkBase =
    "block px-4 py-3 rounded-xl text-lg font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
  const linkActive = "text-[#161616] underline";
  const linkIdle = "text-[#4D4D4D] hover:underline text-[#161616]";

  function navLinkClass({ isActive }) {
    return [linkBase, isActive ? linkActive : linkIdle].join(" ");
  }

  return (
    <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="flex items-center justify-between">
        {/* Brand */}
        <NavLink
          to="/"
          className="text-2xl sm:text-3xl font-extrabold tracking-tight text-black"
        >
          #VANLIFE
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-base">
          <NavLink to="/Host" className={navLinkClass}>
            Host
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/van" className={navLinkClass}>
            Vans
          </NavLink>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center rounded-xl p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="md:hidden fixed inset-0 z-40 bg-black/40"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.aside
            key="panel"
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "tween", duration: 0.2 }}
            className="md:hidden fixed inset-y-0 right-0 z-50 w-[80%] max-w-sm bg-[#FFF7ED] shadow-2xl"
          >
            <div className="flex items-center justify-between px-4 py-4 ">
              <span></span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className=""
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span className="sr-only">Close menu</span>
              </button>
            </div>

            <nav className="px-2 py-2">
              <ul className="space-y-1">
                <li>
                  <NavLink
                    to="/Host"
                    className={navLinkClass}
                    onClick={() => setOpen(false)}
                  >
                    Host
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={navLinkClass}
                    onClick={() => setOpen(false)}
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/van"
                    className={navLinkClass}
                    onClick={() => setOpen(false)}
                  >
                    Vans
                  </NavLink>
                </li>
              </ul>
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </header>
  );
}
