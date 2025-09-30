import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Sayfalar
import Home from "./pages/Home";
import Corporate from "./pages/Corporate";
import Solutions from "./pages/Solutions";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import Chat from "./pages/ChatPages";
import About from './pages/About';
import Ecosystem from './pages/Ecosystem';
import Careers from './pages/Careers';
import Investors from './pages/Investors';
import { LanguageProvider } from './context/LanguageProvider';


const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <LanguageProvider>
      <div className={darkMode ? "dark" : ""}>
        <Router>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <main className="pt-20 bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/ecosystem" element={<Ecosystem />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/investors" element={<Investors />} />
              <Route path="/corporate" element={<Corporate />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/chat" element={<Chat />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </div>
    </LanguageProvider>
  );
};
export default App;
















