// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./Pages/Home";
// import About from "./Pages/About";
// // import Portfolio from "./pages/Portfolio";
// // import Contact from "./pages/Contact";
// import Navbar from "./components/Navbar";

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         {/* <Route path="/portfolio" element={<Portfolio />} /> */}
//         {/* <Route path="/contact" element={<Contact />} /> */}
//       </Routes>

//     </BrowserRouter>
//   );
// }

// export default App;

// App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Showreel from './Pages/Showreel';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/showreel" element={<Showreel />} />
          {/* <Route path="/portfolio" element={<Portfolio />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;