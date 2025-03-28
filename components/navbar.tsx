"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { CgMenuRight } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import { Slide, Zoom } from "react-awesome-reveal";
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animateHeader, setAnimateHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setAnimateHeader(true);
      } else {
        setAnimateHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const pathname = usePathname();
  // Check if it's the home page
  const isHomePage = pathname === '/';
  const links = [
    { href: isHomePage ? "#about-us" : "/#about-us", label: "About Us" },
    { href: isHomePage ? "#how-it-works" : "/#how-it-works", label: "How it Works" },
    { href: isHomePage ? "#FAQS" : "/#FAQS", label: "FAQs" },
    { href: isHomePage ? "#enquire-now" : "/#enquire-now", label: "Enquire-now" },
  ];

  const mobilelinks = [
    { href: "/", label: "Home" },
    { href: isHomePage ? "#about-us" : "/#about-us", label: "About Us" },
    { href: isHomePage ? "#how-it-works" : "/#how-it-works", label: "How it Works" },
    { href: isHomePage ? "#FAQS" : "/#FAQS", label: "FAQs" },
    { href: isHomePage ? "#enquire-now" : "/#enquire-now", label: "Enquire Now" },
];


  return (
    <header className={`text-black w-full fixed top-0 z-50 overflow-hidden ${animateHeader ? "shadow-md" : ""} border-none `}>
      <div className={`w-full mx-auto relative flex items-center justify-between  duration-500 xl:px-16 ease-in ${animateHeader ? "p-3 lg:p-5  bg-white" : "p-3 lg:p-8 "}`}
      >
        <Zoom>
          <Link href="/" className="flex items-center justify-center sm:justify-start space-x-1">
            <Image
              alt="logo"
              className="object-contain  sm:w-48 md:w-56 "
              height={40}
              src="/Images/logo.svg"
              width={180}
            />
           
          </Link>
        </Zoom>

        <nav className="hidden xl:flex justify-center space-x-4 text-xs font-medium uppercase tracking-wider ">
          {links.map((link, index) => (
            <Slide key={link.label} delay={index * 100} direction="down">
              <Link
                className={`hover:text-primary shadow p-2 px-4 rounded-full bg-primary-50/50 relative  no-underline after:rounded-md after:absolute after:h-0.5 after:left-0 after:-bottom-2 after:bg-primary after:w-0 hover:after:w-full after:transition-all after:duration-300 after:ease-in group duration-300 ease-in transition-all`}
                href={link.href}
              >
                {link.label}
              </Link>
            </Slide>
          ))}
        </nav>

        <button
          className=" xl:hidden items-center rounded-md text-primary  border-2 border-primary p-1"

          onClick={() => setIsOpen(true)}
        >
          <CgMenuRight className="text-2xl" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            className="fixed inset-0 bg-white flex flex-col px-10  space-y-16 z-100"
            initial={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="absolute top-3 right-3 rounded-md text-primary  border-2 border-primary p-1 "
              onClick={() => setIsOpen(false)}
            >
              <IoClose className="text-2xl" />
            </button>

            <nav className="flex flex-col  space-y-12  text-2xl font-semibold  pt-20">
              {mobilelinks.map((link) => (
                <Link
                  key={link.label}
                  className={`hover:text-primary relative tracking-wide no-underline after:rounded-md after:absolute after:h-1 after:left-0 after:-bottom-2 after:bg-primary after:w-0 hover:after:w-full after:transition-all after:duration-300 after:ease-in group duration-300 ease-in transition-all`}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
