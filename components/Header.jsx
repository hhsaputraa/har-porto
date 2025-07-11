"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

//component
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 text-white ${isScrolled
          ? "py-4 bg-primary/95 backdrop-blur-md shadow-lg border-b border-white/10"
          : "py-8 xl:py-12 bg-transparent"
        }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className={`font-primary font-bold tracking-tight transition-all duration-300 ${isScrolled ? "text-2xl xl:text-3xl" : "text-4xl"
            }`}>
            <span className="text-accent"> &lt;</span>
            hari&nbsp;
            <span className="text-accent">/&gt;</span>
          </h1>
        </Link>
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
        </div>

        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
