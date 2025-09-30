import React from "react";
import logo from "../assets/logo.png"; // Logo dosyanızı buraya ekleyin
import iyzicoLogo from "../assets/iyzico.png"; // İyzico logo
import visaLogo from "../assets/visa.png"; // Visa logo
import masterCardLogo from "../assets/mastercard.png"; // MasterCard logo

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 pt-12 pb-6 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-8">
        {/* Logo */}
        <div className="space-y-4">
          <img src={logo} alt="Amezay AI" className="h-10 w-auto" />
          <p className="text-gray-400 dark:text-gray-600">
            Amezay AI™ Software Global Solutions Yazılım A.Ş.
          </p>
        </div>

        {/* 1. Kurumsal */}
        <div>
          <h3 className="font-semibold mb-4">Kurumsal</h3>
          <ul className="space-y-2 text-gray-400 dark:text-gray-600">
            <li><a href="#" className="hover:text-teal-400 transition-colors">Şirket Hakkında</a></li>
            <li><a href="#" className="hover:text-teal-400 transition-colors">Kariyer</a></li>
            <li><a href="#" className="hover:text-teal-400 transition-colors">İletişim</a></li>
            <li><a href="#" className="hover:text-teal-400 transition-colors">Yatırımcı İlişkileri</a></li>
            <li><a href="#" className="hover:text-teal-400 transition-colors">Blog</a></li>
          </ul>
        </div>

        {/* 2. Çözümler */}
        <div>
          <h3 className="font-semibold mb-4">Çözümler</h3>
          <ul className="space-y-2 text-gray-400 dark:text-gray-600">
            <li><a href="#" className="hover:text-teal-400 transition-colors">Çözümler</a></li>
            <li><a href="#" className="hover:text-teal-400 transition-colors">Fiyatlandırma</a></li>
          </ul>
        </div>

        {/* 3. Taahhütlerimiz */}
        <div>
          <h3 className="font-semibold mb-4">Taahhütlerimiz</h3>
          <ul className="space-y-2 text-gray-400 dark:text-gray-600">
            <li><a href="#" className="hover:text-teal-400 transition-colors">Güvenlik ve Uyumluluk</a></li>
            <li><a href="#" className="hover:text-teal-400 transition-colors">Gizlilik Politikası</a></li>
          </ul>
        </div>

        {/* 4. Koşullar ve Politikalar */}
        <div>
          <h3 className="font-semibold mb-4">Koşullar ve Politikalar</h3>
          <ul className="space-y-2 text-gray-400 dark:text-gray-600">
            <li><a href="#" className="hover:text-teal-400 transition-colors">Hizmet Şartları</a></li>
            <li><a href="#" className="hover:text-teal-400 transition-colors">Mesafeli Satış Sözleşmesi</a></li>
            <li><a href="#" className="hover:text-teal-400 transition-colors">Teslimat ve İade Politikası</a></li>
            <li><a href="#" className="hover:text-teal-400 transition-colors">KVKK Aydınlatma Metni</a></li>
            <li><a href="#" className="hover:text-teal-400 transition-colors">Marka Tescil Belgesi</a></li>
          </ul>
        </div>
      </div>

      {/* Ödeme ve copyright */}
      <div className="max-w-7xl mx-auto mt-8 flex flex-col md:flex-row items-center justify-between px-4">
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <img src={iyzicoLogo} alt="İyzico" className="h-8" />
          <img src={visaLogo} alt="Visa" className="h-6" />
          <img src={masterCardLogo} alt="MasterCard" className="h-6" />
        </div>
        <p className="text-gray-400 dark:text-gray-600 text-sm">
          © 2025 Amezay AI™. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
};

export default Footer;



