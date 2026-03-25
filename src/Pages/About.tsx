import Navbar from "../components/Navbar";
import { motion, type Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const About = () => {

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

  return (
    <div className="bg-black text-white">
      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32"
          alt="Cinematography"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-20">
          <Navbar />
        </div>

        <motion.div
  variants={container}
  initial="hidden"
  animate="show"
  className="relative z-20 flex flex-col md:flex-row items-center justify-between h-full px-6 md:px-20 gap-10"
>
  {/* LEFT CONTENT */}
  <div className="max-w-2xl">
    <motion.h1
      variants={item}
      className="text-4xl md:text-6xl font-bold leading-tight"
    >
      About Vikrant
    </motion.h1>

    <motion.p
      variants={item}
      className="mt-6 text-white/80 leading-relaxed"
    >
      A passionate cinematographer crafting visual stories that blend
      emotion, light, and movement into unforgettable experiences.
    </motion.p>
  </div>

  {/* RIGHT IMAGE */}
  <motion.div variants={item} className="relative">
    <img
      src="./src/assets/images/image (3).png"
      alt="Vikrant"
      className="w-[250px] md:w-[350px] h-[300px] md:h-[420px] object-cover rounded-2xl shadow-2xl"
    />

    {/* Optional glow effect */}
    <div className="absolute inset-0 rounded-2xl border border-white/20"></div>
  </motion.div>
</motion.div>
      </section>

      {/* BIO SECTION */}
      <section className="px-6 md:px-20 py-20">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Image */}
          <motion.img
            variants={item}
            src="./src/assets/images/IMG_5602.JPG.jpeg"
            className="w-full h-[400px] object-cover rounded-2xl"
          />

          {/* Text */}
          <motion.div variants={item}>
            <h2 className="text-3xl font-semibold mb-4">
              Visual Storyteller
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              I am  a cinematographer with a deep passion for storytelling
              through visuals. my work spans across films, commercials, music
              videos, and digital content, capturing emotions with precision.
            </p>
            <p className="text-white/70 leading-relaxed">
              With an eye for detail and a love for cinematic lighting, i
              transforms ordinary frames into extraordinary experiences.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* EXPERIENCE / STATS */}
      <section className="bg-white text-black px-6 md:px-20 py-20">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="grid grid-cols-2 md:grid-cols-3 gap-10 text-center"
        >
          {[
            { label: "Projects", value: "40+" },
            { label: "Years Experience", value: "5+" },
            { label: "Clients", value: "35+" },
            // { label: "Awards", value: "10+" },
          ].map((itemData, i) => (
            <motion.div key={i} variants={item}>
              <h3 className="text-3xl font-bold">{itemData.value}</h3>
              <p className="text-sm mt-2">{itemData.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* STYLE / PHILOSOPHY */}
      <section className="px-6 md:px-20 py-20">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="max-w-4xl"
        >
          <motion.h2 variants={item} className="text-3xl font-semibold mb-6">
            Cinematic Philosophy
          </motion.h2>

          <motion.p variants={item} className="text-white/70 leading-relaxed">
            Every frame tells a story. I believe in creating visuals that
            evoke emotion and leave a lasting impact. My approach combines
            technical mastery with artistic intuition, ensuring each project has
            its own unique identity.
          </motion.p>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-20 pb-20 text-center">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
        >
          <motion.h2 variants={item} className="text-3xl font-semibold mb-6">
            Let’s Create Something Amazing
          </motion.h2>

          <motion.button
            onClick={() => navigate("/contact")}
            variants={item}
            className="border border-white px-8 py-3 uppercase tracking-wider hover:bg-white hover:text-black transition"
          >
            Contact Now
          </motion.button>
        </motion.div>
      </section>
      <Footer />
    </div>
  );
};

export default About;