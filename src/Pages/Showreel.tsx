import Navbar from "../components/Navbar";
import { motion, type Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function Showreel() {

  const navigate = useNavigate();
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };


  const videos = [
  "adxlZDx2vJ4",
  "PPB5CAzVqZ4",
  "-QpLmA6AKQ4",
  "4hHDreCYrXY?si=1mGo2LSGQGLcRgzS",
  "OlJbZ-KOmZA?si=jinumy6k6hlxg4qY",
  "mrmVkc0WAyc?si=XpLL06Hu9kKH6yfx",
  "RhhNh-UzQDI?si=FG42_Men7Eo04LnK",
  "_eJc1eGdqRs?si=2jzjI8YmjsjpwOBI",
  "AozJyByfO1A?si=u3O_B-zJJHi6AzkN",
  "EjAHdF4VfpY?si=QPNfhKQBZnkmB8WL",
  "kYQaTnenRfI?si=dVTjyzr1eB7P0Nw3",
];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-20">
          <Navbar />
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6"
        >
          <motion.h1
            variants={item}
            className="text-4xl md:text-6xl font-bold"
          >
            {/* Showreel */}
            Work
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 text-white/70 max-w-2xl"
          >
            A curated collection of cinematic work showcasing storytelling,
            lighting, and visual artistry.
          </motion.p>
        </motion.div>
      </section>

      {/* MAIN VIDEO SECTION */}
      <section className="px-6 md:px-20 py-20">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="max-w-5xl mx-auto"
        >
          <motion.h2
            variants={item}
            className="text-2xl md:text-3xl font-semibold mb-6"
          >
            {/* Featured Showreel */}
            Featured Work
          </motion.h2>

          <motion.div
  variants={item}
  className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl"
>
  <iframe
    className="w-full h-full"
    src="https://www.youtube.com/embed/RhhNh-UzQDI?si=FG42_Men7Eo04LnK"
    title="Showreel"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
</motion.div>
        </motion.div>
      </section>

      {/* VIDEO GRID */}
      <section className="px-6 md:px-20 pb-20">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
        >
          <motion.h2
            variants={item}
            className="text-2xl md:text-3xl font-semibold mb-10"
          >
            More Work
          </motion.h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
  {videos.map((id, i) => (
    <motion.div
      key={i}
      variants={item}
      className="w-full aspect-video rounded-xl overflow-hidden shadow-xl"
    >
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${id}`}
        title={`Video ${i}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </motion.div>
  ))}
</div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="text-center pb-20">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
        >
          <motion.h2
            variants={item}
            className="text-3xl font-semibold mb-6"
          >
            Want to Work Together?
          </motion.h2>

       <motion.button
  variants={item}
  onClick={() => navigate("/contact")}
  className="border border-white px-8 py-3 uppercase tracking-wider hover:bg-white hover:text-black transition"
>
  Contact Now
</motion.button>
        </motion.div>
      </section>
      <Footer />
    </div>
  );
}

export default Showreel;