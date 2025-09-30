import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 text-white px-4 text-center">
      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        Otomasyonun Ötesinde. <br /> Kanıtlanabilir Zeka.
      </h1>
      <p className="text-lg md:text-xl mb-8 max-w-xl">
        Amezay AI™'ın devrim niteliğindeki MasterMind motoru, güvenebileceğiniz doğrulanmış, kanıta dayalı içgörüler sunar. Yapay zeka güvenilirlik krizini çözüyoruz.
      </p>
      <div className="space-x-4">
        <a
          href="/chat"
          className="px-6 py-3 bg-teal-500 rounded-lg hover:bg-teal-600 transition-colors font-semibold"
        >
          Hemen Başla
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-semibold"
        >
          Satış ile Görüş
        </a>
      </div>
    </section>
  );
};

export default Hero;


