import React from "react";
import Navbar from "../components/Navbar";
import { motion, type Variants } from "framer-motion";
import Footer from "../components/Footer";

function Contact() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* HERO */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-20">
          <Navbar />
        </div>

        <div className="relative z-20 flex items-center justify-center h-full">
          <h1 className="text-4xl md:text-6xl font-bold">
            Contact
          </h1>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="px-6 md:px-20 py-20">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="grid md:grid-cols-2 gap-16"
        >
          {/* LEFT INFO */}
          <motion.div variants={item}>
            <h2 className="text-3xl font-semibold mb-6">
              Let’s Connect
            </h2>

            <p className="text-white/70 mb-8 leading-relaxed">
              Whether you have a project in mind, collaboration idea, or just
              want to say hello — feel free to reach out.
            </p>

            <div className="space-y-4 text-white/80">
              <p>📧 Email: Vekrantyadhuvanshi@gmail.com </p>
              <p>📞 Phone: +91 8882454054</p>
              <p>📍 Location: Novonxt studio D77 sec 10 ,Noida , India</p>
            </div>
          </motion.div>


        </motion.div>
      </section>

      {/* CTA */}
      <section className="text-center pb-20">
        <h2 className="text-3xl font-semibold mb-6">
          Let’s Create Something Amazing
        </h2>

      </section>
      <Footer />
    </div>
  );
}

export default Contact;