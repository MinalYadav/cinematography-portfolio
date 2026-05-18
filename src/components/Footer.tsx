// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// function Footer() {
//   const navigate = useNavigate();

//   return (
//     <footer className="bg-black text-white px-6 md:px-20 py-16 border-t border-white/10">
//       <div className="grid md:grid-cols-3 gap-10">
        
//         {/* LEFT - BRAND */}
//         <div>
//           <h2 className="text-2xl font-semibold tracking-wide">
//             Vikrant
//           </h2>
//           <p className="mt-4 text-sm text-white/60 leading-relaxed">
//             Cinematographer & visual storyteller capturing emotions,
//             stories and moments through the lens.
//           </p>
//         </div>

//         {/* CENTER - NAV LINKS */}
//         <div className="flex flex-col gap-3 text-sm">
//           <h3 className="uppercase tracking-wider text-white/70">
//             Navigation
//           </h3>

//           <button
//             onClick={() => navigate("/")}
//             className="text-left hover:text-white/60 transition"
//           >
//             Home
//           </button>

//           <button
//             onClick={() => navigate("/showreel")}
//             className="text-left hover:text-white/60 transition"
//           >
//             Showreel
//           </button>

//           <button
//             onClick={() => navigate("/contact")}
//             className="text-left hover:text-white/60 transition"
//           >
//             Contact
//           </button>
//         </div>

//         {/* RIGHT - CTA */}
//         <div>
//           <h3 className="uppercase tracking-wider text-white/70">
//             Let’s Work Together
//           </h3>

//           <p className="mt-4 text-sm text-white/60">
//             Have a project in mind? Let’s create something amazing.
//           </p>

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             onClick={() => navigate("/contact")}
//             className="mt-6 border border-white px-6 py-3 text-sm uppercase tracking-wider hover:bg-white hover:text-black transition"
//           >
//             Get in Touch
//           </motion.button>
//         </div>
//       </div>

//       {/* BOTTOM */}
//       <div className="mt-12 pt-6 border-t border-white/10 text-center text-xs text-white/40">
//         © {new Date().getFullYear()} Vikrant. All rights reserved.
//       </div>
//     </footer>
//   );
// }

// export default Footer;


import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-black text-white px-6 md:px-20 py-12 md:py-16 border-t border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
        
        {/* LEFT - BRAND */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold tracking-wide">
            Vikrant
          </h2>

          <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-sm mx-auto md:mx-0">
            Cinematographer & visual storyteller capturing emotions,
            stories and moments through the lens.
          </p>
        </div>

        {/* CENTER - NAV LINKS */}
        <div className="flex flex-col items-center md:items-start gap-3 text-sm">
          <h3 className="uppercase tracking-wider text-white/70">
            Navigation
          </h3>

          <button
            onClick={() => navigate("/")}
            className="text-center md:text-left hover:text-white/60 transition"
          >
            Home
          </button>

          <button
            onClick={() => navigate("/showreel")}
            className="text-center md:text-left hover:text-white/60 transition"
          >
            Showreel
          </button>

          <button
            onClick={() => navigate("/contact")}
            className="text-center md:text-left hover:text-white/60 transition"
          >
            Contact
          </button>
        </div>

        {/* RIGHT - CTA */}
        <div className="text-center md:text-left">
          <h3 className="uppercase tracking-wider text-white/70">
            Let’s Work Together
          </h3>

          <p className="mt-4 text-sm text-white/60 max-w-sm mx-auto md:mx-0">
            Have a project in mind? Let’s create something amazing.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/contact")}
            className="mt-6 border border-white px-6 py-3 text-sm uppercase tracking-wider hover:bg-white hover:text-black transition w-full sm:w-auto"
          >
            Get in Touch
          </motion.button>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="mt-12 pt-6 border-t border-white/10 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Vikrant. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;