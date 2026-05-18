import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <motion.div
        variants={navContainer}
        initial="hidden"
        animate="show"
        className="h-24 w-full flex items-center justify-between px-6 md:px-10 text-white font-jakarta border-b border-white/30 relative z-50"
      >
        {/* Logo */}
        <motion.div variants={navItem}>
          <h2 className="text-xl font-semibold">Vikrant Yadav</h2>

          <h3 className="text-xs uppercase tracking-widest font-roboto text-white/80">
            Cinematographer
          </h3>
        </motion.div>

        {/* Desktop Navigation */}
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

        {/* Desktop Social Icons */}
        <motion.div
          variants={navItem}
          className="hidden md:flex gap-5 text-lg items-center"
        >
          <a
            href="https://www.instagram.com/cinemo_films_?igsh=cWQ4dzh5ZmdrcGVm"
            className="hover:text-white/70 transition"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>

          <a
            href="https://share.google/EuAADdJxC3OvtiYiU"
            className="hover:opacity-70 transition"
            aria-label="NN"
          >
            <img
              src="https://static.wixstatic.com/media/c057fd_0210adf0e7f14fb59c9458c95cfbaa90~mv2.png/v1/fill/w_138,h_124,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/NN%20logo%20artbord-nn_edited_edited.png"
              alt="NN"
              className="w-6 h-8 object-contain"
            />
          </a>

          <a
            href="https://biharbaithak.in/"
            className="hover:opacity-70 transition"
            aria-label="Bihar Baithak"
          >
            <img
              src="https://biharbaithak.in/wp-content/uploads/2026/01/cropped-ChatGPT-Image-Jan-3-2026-10_28_10-PM.png"
              alt="BB"
              className="w-8 h-8 object-contain"
            />
          </a>
        </motion.div>

        {/* Mobile Menu Button */}
      <button
  onClick={() => setIsOpen(true)}
  className="md:hidden border border-white/30 p-2 rounded-md flex items-center justify-center"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-5 h-5 text-white"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
</button>
      </motion.div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 z-[250] md:hidden"
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-y-0 right-0 w-[280px] bg-black text-white z-[300] transition-transform duration-300 ease-in-out overflow-y-auto pointer-events-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/20">
          <h2 className="text-lg font-semibold">Menu</h2>

          <button
  onClick={() => setIsOpen(false)}
  className="border border-white/20 p-2 rounded-md flex items-center justify-center"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-5 h-5 text-white"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
</button>
        </div>

        {/* Mobile Nav Links */}
        <div className="flex flex-col gap-6 p-6 text-base font-roboto">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="border-b border-white/10 pb-2 hover:text-white/70 transition"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Social Icons */}
        <div className="flex gap-6 px-6 pt-4 items-center">
          <a
            href="https://www.instagram.com/cinemo_films_?igsh=cWQ4dzh5ZmdrcGVm"
            className="hover:text-white/70 transition"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
          </a>

          <a
            href="https://share.google/EuAADdJxC3OvtiYiU"
            className="hover:opacity-70 transition"
            aria-label="NN"
          >
            <img
              src="https://static.wixstatic.com/media/c057fd_0210adf0e7f14fb59c9458c95cfbaa90~mv2.png/v1/fill/w_138,h_124,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/NN%20logo%20artbord-nn_edited_edited.png"
              alt="NN"
              className="w-6 h-8 object-contain"
            />
          </a>

          <a
            href="https://biharbaithak.in/"
            className="hover:opacity-70 transition"
            aria-label="Bihar Baithak"
          >
            <img
              src="https://biharbaithak.in/wp-content/uploads/2026/01/cropped-ChatGPT-Image-Jan-3-2026-10_28_10-PM.png"
              alt="BB"
              className="w-8 h-8 object-contain"
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;