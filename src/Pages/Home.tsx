// import { useRef, useEffect, useState, useCallback } from "react";
// import { motion, type Variants } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// function Home() {
//   const navigate = useNavigate();

//   const container: Variants = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.4,
//       },
//     },
//   };

//   const itemTopToBottom: Variants = {
//     hidden: { opacity: 0, y: -40 },
//     show: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: [0.16, 1, 0.3, 1],
//       },
//     },
//   };

//   // Original images array
//   const originalImages = [
//     "./src/assets/images/IMG_7038.PNG",
//     "./src/assets/images/IMG_0685.JPG.jpeg",
//     "./src/assets/images/IMG_5607.JPG.jpeg",
//     "./src/assets/images/IMG_7046.PNG",
//     "./src/assets/images/IMG_7045.PNG",
//     "./src/assets/images/IMG_7044.PNG",
//     "./src/assets/images/IMG_7034.PNG",
//     "./src/assets/images/IMG_7035.PNG",
//     // "./src/assets/images/IMG_7035.PNG",
//   ];

//   // Duplicate the array multiple times to create a seamless loop illusion
//   // Three copies give enough buffer for resetting without noticeable jumps
//   const duplicatedImages = [...originalImages, ...originalImages, ...originalImages];

//   const sliderRef = useRef<HTMLDivElement>(null);
//   const autoScrollIntervalRef = useRef<number | null>(null);
//   const [isAutoScrolling, setIsAutoScrolling] = useState(true);
//   const [isHovering, setIsHovering] = useState(false);
//   const [setWidth, setSetWidth] = useState(0); // width of one set of original images (including gaps)
//   const [imageWidth, setImageWidth] = useState(320); // default min-width of each image (md:min-w-[320px])
//   const resettingRef = useRef(false); // flag to prevent recursive scroll resets

//   // Calculate the total width of one original set (including gaps) for infinite reset
//   const calculateSetWidth = useCallback(() => {
//     if (!sliderRef.current) return 0;
//     // Get the first image element to compute its actual width including gap
//     const firstImage = sliderRef.current.children[0] as HTMLElement;
//     if (!firstImage) return 0;
//     const imageStyle = window.getComputedStyle(firstImage);
//     const marginRight = parseInt(imageStyle.marginRight) || 0;
//     const width = firstImage.clientWidth;
//     const totalWidth = (width + marginRight) * originalImages.length;
//     return totalWidth;
//   }, [originalImages.length]);

//   // Update image width on resize
//   useEffect(() => {
//     const updateDimensions = () => {
//       if (!sliderRef.current) return;
//       const firstImage = sliderRef.current.children[0] as HTMLElement;
//       if (firstImage) {
//         setImageWidth(firstImage.clientWidth);
//       }
//       setSetWidth(calculateSetWidth());
//     };
//     updateDimensions();
//     window.addEventListener("resize", updateDimensions);
//     return () => window.removeEventListener("resize", updateDimensions);
//   }, [calculateSetWidth]);

//   // Seamless infinite scroll reset
//   const handleInfiniteScroll = useCallback(() => {
//     if (!sliderRef.current || resettingRef.current) return;
//     const slider = sliderRef.current;
//     const scrollLeft = slider.scrollLeft;
//     const maxScroll = slider.scrollWidth - slider.clientWidth;
//     const threshold = 50; // pixels from edge to trigger reset

//     // If near the right end, jump to the start of the second copy
//     if (scrollLeft + threshold >= maxScroll) {
//       resettingRef.current = true;
//       const jumpTo = setWidth; // position of the first image of the second copy
//       // slider.scrollLeft = jumpTo;
//       resettingRef.current = true;

// // disable smooth temporarily
// slider.style.scrollBehavior = "auto";
// slider.scrollLeft = jumpTo;

// // restore smooth
// slider.style.scrollBehavior = "auto";

// resettingRef.current = false;
//       resettingRef.current = false;
//     }
//     // If near the left end, jump to the end of the second copy
//     else if (scrollLeft <= threshold) {
//       resettingRef.current = true;
//       const jumpTo = maxScroll - setWidth;
//       slider.scrollLeft = jumpTo;
//       resettingRef.current = false;
//     }
//   }, [setWidth]);

//   // Auto-scroll logic: smooth movement with pause on hover
//   useEffect(() => {
//     if (!isAutoScrolling || isHovering) {
//       if (autoScrollIntervalRef.current) {
//         clearInterval(autoScrollIntervalRef.current);
//         autoScrollIntervalRef.current = null;
//       }
//       return;
//     }

//     const scrollStep = () => {
//       if (!sliderRef.current) return;
//       // Use scrollBy for smooth movement, but ensure we don't overshoot the reset boundaries
//       // sliderRef.current.scrollBy({ left: 5, behavior: "smooth" });
//       sliderRef.current.scrollLeft += 1.2;
//     };

//     // Use requestAnimationFrame for smoother scrolling than setInterval
//     let animationId: number;
//     let lastTimestamp = 0;
//     const step = (timestamp: number) => {
//       if (!isAutoScrolling || isHovering) return;
//       if (timestamp - lastTimestamp > 16) {
//         // approx 60fps
//         scrollStep();
//         lastTimestamp = timestamp;
//       }
//       animationId = requestAnimationFrame(step);
//     };
//     animationId = requestAnimationFrame(step);

//     return () => {
//       if (animationId) cancelAnimationFrame(animationId);
//     };
//   }, [isAutoScrolling, isHovering]);

//   // Listen to scroll events to handle infinite reset
//   useEffect(() => {
//     const slider = sliderRef.current;
//     if (!slider) return;

//     const onScroll = () => {
//       handleInfiniteScroll();
//     };

//     // slider.addEventListener("scroll", onScroll);
//     slider.addEventListener("scroll", onScroll, { passive: true });
//     return () => slider.removeEventListener("scroll", onScroll);
//   }, [handleInfiniteScroll]);

//   // Manual scroll with user interaction – stops auto-scroll permanently
//   const scroll = (direction: "left" | "right") => {
//     if (!sliderRef.current) return;
//     const scrollAmount = 300;
//     const newScrollLeft =
//       sliderRef.current.scrollLeft +
//       (direction === "left" ? -scrollAmount : scrollAmount);
//     sliderRef.current.scrollTo({
//       left: newScrollLeft,
//       behavior: "smooth",
//     });
//     // Stop auto-scroll on manual interaction
//     setIsAutoScrolling(false);
//   };

//   // Hover handlers
//   const handleMouseEnter = () => setIsHovering(true);
//   const handleMouseLeave = () => setIsHovering(false);

//   return (
//     <div className="bg-black text-white min-h-screen">
//       {/* HERO SECTION */}
//       <section className="relative h-screen w-full overflow-hidden">
//         <img
//           src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32"
//           alt="Cinematography"
//           className="absolute inset-0 h-full w-full object-cover opacity-60"
//         />
//         <div className="absolute inset-0 bg-black/60"></div>

//         <div className="relative z-20">
//           <Navbar />
//         </div>

//         <motion.div
//           variants={container}
//           initial="hidden"
//           animate="show"
//           className="relative z-20 flex h-full items-center px-10 md:px-20"
//         >
//           <div className="max-w-3xl">
//             <motion.h1
//               variants={itemTopToBottom}
//               className="text-4xl md:text-6xl font-bold leading-tight"
//             >
//               Take a look at <br />
//               Vikrant&apos;s portfolio of <br />
//               work
//             </motion.h1>

//             <motion.p
//               variants={itemTopToBottom}
//               className="mt-6 text-sm md:text-base text-white/80 leading-relaxed"
//             >
//               Have a deep dive into Vikrant’s portfolio of cinematography work.
//               Have a watch of his features, shorts, series, commercials, music
//               videos, promos and more...
//             </motion.p>

//             <motion.div variants={itemTopToBottom} className="mt-8 flex gap-6">
//               <button
//                 className="border border-white px-6 py-3 text-sm uppercase tracking-wider hover:bg-white hover:text-black transition"
//                 onClick={() => navigate("/showreel")}
//               >
//                 Explore Portfolio
//               </button>
//             </motion.div>
//           </div>
//         </motion.div>
//       </section>

//       {/* SLIDER SECTION */}
//       <section className="py-20 px-6 md:px-20 bg-black">
//         <div className="flex justify-between items-center mb-8">
//           <h2 className="text-2xl md:text-3xl font-semibold">Worked with</h2>

//           <div className="flex gap-4">
//             <button
//               onClick={() => scroll("left")}
//               className="border border-white px-4 py-2 hover:bg-white hover:text-black transition"
//             >
//               ←
//             </button>
//             <button
//               onClick={() => scroll("right")}
//               className="border border-white px-4 py-2 hover:bg-white hover:text-black transition"
//             >
//               →
//             </button>
//           </div>
//         </div>

//         <div
//           ref={sliderRef}
//           className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           {duplicatedImages.map((img, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ scale: 1.05 }}
//               className="min-w-[250px] md:min-w-[320px] h-[300px] relative rounded-xl overflow-hidden cursor-pointer"
//             >
//               <img
//                 src={img}
//                 alt={`Slide ${i}`}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition flex items-center justify-center">
//                 {/* <span className="border border-white px-4 py-2 text-sm uppercase">
//                   View
//                 </span> */}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>
//       <Footer />
//     </div>
//   );
// }

// export default Home;


import { useRef, useEffect } from "react";
import { motion, type Variants, useMotionValue, animate } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  const navigate = useNavigate();

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
      },
    },
  };

  const itemTopToBottom: Variants = {
    hidden: { opacity: 0, y: -40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  // Images
  const originalImages = [
    "./src/assets/images/IMG_7038.PNG",
    "./src/assets/images/IMG_0685.JPG.jpeg",
    "./src/assets/images/IMG_5607.JPG.jpeg",
    "./src/assets/images/IMG_7046.PNG",
    "./src/assets/images/IMG_7045.PNG",
    "./src/assets/images/IMG_7044.PNG",
    "./src/assets/images/IMG_7034.PNG",
    "./src/assets/images/IMG_7035.PNG",
  ];

  // Duplicate for infinite loop
  const duplicatedImages = [...originalImages, ...originalImages];

  // Motion value
  const x = useMotionValue(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Auto loop animation
  useEffect(() => {
    if (!sliderRef.current) return;

    const totalWidth = sliderRef.current.scrollWidth / 2;

    const controls = animate(x, [0, -totalWidth], {
      ease: "linear",
      duration: 25, // adjust speed here
      repeat: Infinity,
    });

    return () => controls.stop();
  }, [x]);

  // Infinite loop correction (prevents jump glitch on drag)
  useEffect(() => {
    const unsubscribe = x.on("change", (latest) => {
      if (!sliderRef.current) return;

      const totalWidth = sliderRef.current.scrollWidth / 2;

      if (latest <= -totalWidth) {
        x.set(0);
      }

      if (latest > 0) {
        x.set(-totalWidth);
      }
    });

    return () => unsubscribe();
  }, [x]);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32"
          alt="Cinematography"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-20">
          <Navbar />
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-20 flex h-full items-center px-10 md:px-20"
        >
          <div className="max-w-3xl">
            <motion.h1
              variants={itemTopToBottom}
              className="text-4xl md:text-6xl font-bold leading-tight"
            >
              Take a look at <br />
              Vikrant&apos;s portfolio of <br />
              work
            </motion.h1>

            <motion.p
              variants={itemTopToBottom}
              className="mt-6 text-sm md:text-base text-white/80 leading-relaxed"
            >
              Have a deep dive into Vikrant’s portfolio of cinematography work.
            </motion.p>

            <motion.div variants={itemTopToBottom} className="mt-8 flex gap-6">
              <button
                className="border border-white px-6 py-3 text-sm uppercase tracking-wider hover:bg-white hover:text-black transition"
                onClick={() => navigate("/showreel")}
              >
                Explore Portfolio
              </button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* SLIDER SECTION */}
      <section className="py-20 px-6 md:px-20 bg-black">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold">Worked with</h2>
        </div>

        <div className="overflow-hidden">
          <motion.div
            ref={sliderRef}
            style={{ x }}
            drag="x"
            dragConstraints={{ left: -Infinity, right: Infinity }}
            dragElastic={0.05}
            className="flex gap-6 cursor-grab active:cursor-grabbing"
          >
            {duplicatedImages.map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="min-w-[250px] md:min-w-[320px] h-[300px] rounded-xl overflow-hidden"
              >
                <img
                  src={img}
                  alt={`Slide ${i}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;