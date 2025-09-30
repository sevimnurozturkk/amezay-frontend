import React from "react";

const Solutions: React.FC = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Başlık ve Tanıtım */}
      <section className="py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Her Sektör İçin Yapay Zeka Güvenilirliği</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Amezay AI™, sektörünüzün benzersiz zorluklarını çözmek için özel olarak tasarlanmış, kanıtlanabilir derecede doğru zeka sunar.
          Otomasyonun ötesine geçin ve gerçek, güvenilir içgörülerin kilidini açın.
        </p>
      </section>

      {/* Sektörlere Göre Çözümler */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Kurumsal ve Kamu",
              description:
                "MasterMind™ motorumuzu, maksimum güvenlik, kontrol ve mevcut ERP/CRM sistemlerinizle derin entegrasyon için şirket içi (on-premise) veya özel bulutta (private cloud) kurun.",
            },
            {
              title: "Uluslararası Ticaret ve İhracatçılar",
              description:
                "Türkiye ve Almanya gibi pazarlar için hiper-yerelleştirilmiş uyum modelleri ile karmaşık yerel vergi kanunları, gümrük yasaları ve ticari düzenlemelerde yolunuzu bulun.",
            },
            {
              title: "Finansal Hizmetler",
              description:
                "Geniş bağlam kapasitemizle yılların finansal raporlarını ve uzun yasal sözleşmeleri analiz edin, risk değerlendirmesi ve pazar analizi için hiçbir detayın gözden kaçmamasını sağlayın.",
            },
            {
              title: "Hukuk ve Uyum",
              description:
                "Bağlamı anlayan ve kanıta dayalı içgörüler sunan bir yapay zeka ile karmaşık yasal belgeler hazırlayın ve inceleyin, hataları ve manuel doğrulama süresini önemli ölçüde azaltın.",
            },
            {
              title: "Akademi ve Araştırma",
              description:
                "Öğrencilere ve araştırmacılara, akademik dürüstlüğü koruyarak kaynakları doğrulayan ve halüsinasyon olmadan bilgi sentezleyen güçlü bir araştırma aracı sağlayın.",
            },
            {
              title: "Teknoloji ve Yazılım",
              description:
                "Platformunuzun kod tabanını inceleyebilen, performans optimizasyonları önerebilen ve karmaşık yazılım sorunlarının giderilmesine yardımcı olabilen otonom bir yapay zeka çekirdeğinden yararlanın.",
            },
          ].map((sector, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">{sector.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{sector.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Solutions;
