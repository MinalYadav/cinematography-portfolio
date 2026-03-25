import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { motion, type Variants } from "framer-motion";


function Portfolio() {
    
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Films", "Commercials", "Music Videos"];

  const projects = [
    {
      category: "Films",
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    },
    {
      category: "Commercials",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    {
      category: "Music Videos",
      image:
        "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    },
    {
      category: "Films",
      image:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
    },
    {
      category: "Commercials",
      image:
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba",
    },
  ];

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-black text-white min-h-screen">
     {/* HERO */}
<section className="relative h-[60vh] w-full overflow-hidden">
  {/* Background Image */}
  <img
    src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32"
    className="absolute inset-0 w-full h-full object-cover opacity-50"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/70" />

  {/* Navbar */}
  <div className="relative z-20">
    <Navbar />
  </div>

  {/* Content */}
  <div className="relative z-20 flex items-center justify-center h-full">
    <h1 className="text-4xl md:text-6xl font-bold">
      Portfolio
    </h1>
  </div>
</section>

      {/* FILTER TABS */}
      <section className="px-6 md:px-20 py-10 flex justify-center gap-6 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 border text-sm uppercase tracking-wider transition ${
              activeTab === tab
                ? "bg-white text-black"
                : "border-white hover:bg-white hover:text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </section>

      {/* GRID */}
      <section className="px-6 md:px-20 pb-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, i) => (
            <motion.div
              key={i}
              variants={item}
              className="relative group cursor-pointer overflow-hidden rounded-xl"
            >
              <img
                src={project.image}
                className="w-full h-[250px] object-cover transform group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center">
                <p className="text-sm uppercase tracking-wider">
                  {project.category}
                </p>
                <span className="mt-2 border border-white px-4 py-2 text-xs">
                  View Project
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="text-center pb-20">
        <h2 className="text-3xl font-semibold mb-6">
          Let’s Work Together
        </h2>
        <button className="border border-white px-8 py-3 uppercase tracking-wider hover:bg-white hover:text-black transition">
          Contact Now
        </button>
      </section>
    </div>
  );
}

export default Portfolio;