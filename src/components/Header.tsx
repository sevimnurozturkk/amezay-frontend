import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { LanguageContext } from "../context/LanguageContext";

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {
  const { language, setLanguage } = useContext(LanguageContext);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleLanguage = () => setLanguage(language === 'TR' ? 'EN' : 'TR');

  return (
    <header className="w-full flex items-center justify-between py-4 px-8 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 fixed top-0 left-0 z-50 shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Link to="/">
          <img src={logo} alt="Amezay AI" className="h-10 w-auto" />
        </Link>
      </div>

      {/* Menü */}
      <nav className="hidden md:flex space-x-8 font-semibold text-lg">
        <div className="group relative">
          <span className="cursor-pointer hover:text-teal-400 transition-colors">
            Kurumsal
          </span>
          {/* Açılır Menü */}
          <div className="absolute left-0 mt-2 w-52 bg-gray-900 dark:bg-gray-100 dark:text-gray-900 text-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform -translate-y-2 transition-all duration-300 z-50">
            <Link to="/about" className="block px-4 py-2 hover:bg-teal-500 transition-colors">Şirket Hakkında</Link>
            <Link to="/ecosystem" className="block px-4 py-2 hover:bg-teal-500 transition-colors">Ekosistem</Link>
            <Link to="/careers" className="block px-4 py-2 hover:bg-teal-500 transition-colors">Kariyer</Link>
            <Link to="/investors" className="block px-4 py-2 hover:bg-teal-500 transition-colors">Yatırımcı İlişkileri</Link>
          </div>
        </div>
        <Link to="/solutions" className="hover:text-teal-400 transition-colors">Çözümler</Link>
        <Link to="/pricing" className="hover:text-teal-400 transition-colors">Fiyatlandırma</Link>
        <Link to="/blog" className="hover:text-teal-400 transition-colors">Blog</Link>
      </nav>

      {/* Sağ menü: Dark Mode + Dil + Chat */}
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleDarkMode}
          className="px-3 py-1 border border-white dark:border-gray-900 rounded hover:bg-white hover:text-gray-900 dark:hover:bg-gray-900 dark:hover:text-white transition-colors"
        >
          {darkMode ? "Light" : "Dark"}
        </button>
        <button
          onClick={toggleLanguage}
          className="px-3 py-1 border border-white dark:border-gray-900 rounded hover:bg-white hover:text-gray-900 dark:hover:bg-gray-900 dark:hover:text-white transition-colors"
        >
          {language}
        </button>
        <Link
          to="/chat"
          className="px-4 py-1 border border-teal-500 rounded hover:bg-teal-500 transition-colors font-semibold"
        >
          Giriş Yap
        </Link>
      </div>
    </header>
  );
};

export default Header;








