import React from "react";

const Pricing: React.FC = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Başlık */}
      <section className="py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Fiyatlandırma Planlarımız</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Amezay AI™, akademik yolculuğunuz için güvenilir ve güçlü bir yapay zeka aracı sunuyor.
          Öğrenciler için özel planlarımızla hemen başlayın.
        </p>
      </section>

      {/* Fiyatlandırma Kartları */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Öğrenci Planı */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Öğrenci Planı</h3>
            <p className="text-xl font-bold mb-4">$4.99/ay</p>
            <ul className="space-y-2 mb-6">
              <li>✔ Standart Model Erişimi</li>
              <li>✔ Aylık 500 Sorgu</li>
              <li>✔ 1 GB Güvenli Not Alanı</li>
            </ul>
            <a
              href="https://amezay.com.tr/tr/pricing"
              className="block text-center text-white bg-teal-500 hover:bg-teal-600 py-2 px-4 rounded-md"
            >
              Hemen Başla
            </a>
          </div>

          {/* Öğrenci Yıllık Planı */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Öğrenci Yıllık Planı</h3>
            <p className="text-xl font-bold mb-4">$49.99/yıl (2 Ay Ücretsiz)</p>
            <ul className="space-y-2 mb-6">
              <li>✔ Standart Model Erişimi</li>
              <li>✔ Aylık 500 Sorgu</li>
              <li>✔ 1 GB Güvenli Not Alanı</li>
            </ul>
            <a
              href="https://amezay.com.tr/tr/pricing"
              className="block text-center text-white bg-teal-500 hover:bg-teal-600 py-2 px-4 rounded-md"
            >
              Şimdi Abone Ol
            </a>
          </div>
        </div>
      </section>

      {/* Kurumsal Plan */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-4">Kurumsal ve İşletme Planları</h2>
        <p className="text-lg max-w-3xl mx-auto">
          Geliştirme aşamasında olan bu planlar için detaylar yakında paylaşılacaktır.
        </p>
      </section>
    </div>
  );
};

export default Pricing;

