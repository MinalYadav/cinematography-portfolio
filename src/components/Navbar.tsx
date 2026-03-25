import React from "react";
import { motion, type Variants } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faVimeoV,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Navbar() {
  // Navbar container animation
  const navContainer: Variants = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  // Individual item animation
  const navItem: Variants = {
    hidden: { opacity: 0, y: -10 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

   const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Work", path: "/showreel" },
    // { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];


  return (
    <motion.div
      variants={navContainer}
      initial="hidden"
      animate="show"
      className="h-24 w-full flex items-center justify-between px-6 md:px-10 text-white font-jakarta border-b border-white/30"
    >
      {/* Logo */}
      <motion.div variants={navItem}>
        <h2 className="text-xl font-semibold">Vikrant Yadav</h2>
        <h3 className="text-xs uppercase tracking-widest font-roboto text-white/80">
          Cinematographer
        </h3>
      </motion.div>

      {/* Navigation */}
      <motion.div
        variants={navItem}
        className="hidden md:flex gap-8 text-sm font-roboto tracking-wide"
      >
        {navLinks.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            {item.name}
          </Link>
        ))}
      </motion.div>

      {/* Social icons */}
      <motion.div
        variants={navItem}
        className="flex gap-5 text-lg"
      >
        <a
          href="#"
          className="hover:text-white/70 transition"
          aria-label="Instagram"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>

        <a
          href="#"
          className="hover:text-white/70 transition"
          aria-label="Facebook"
        >
          <FontAwesomeIcon icon={faFacebookF} />
        </a>

        <a
          href="#"
          className="hover:text-white/70 transition"
          aria-label="Vimeo"
        >
          <FontAwesomeIcon icon={faVimeoV} />
        </a>
      </motion.div>
    </motion.div>
  );
}

export default Navbar;
