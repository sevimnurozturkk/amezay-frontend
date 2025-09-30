import React from "react";
import AnimatedSection from "./AnimatedSection";

const ProblemSolution: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-800 dark:bg-gray-900 text-white px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <AnimatedSection>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold mb-4">MasterMind™ Motoru</h2>
            <p className="text-gray-300 dark:text-gray-300">
              Çekirdek motorumuz, özel yapay zeka modellerinden oluşan bir komiteden gelen verileri sentezler. Bilgileri çapraz doğrular, çelişkileri çözer ve kritik hataları %80'in üzerinde azaltarak tek, doğrulanmış bir çıktı oluşturur.
            </p>
            <p className="text-gray-300">✔ %95+ Doğruluk: Kanıta dayalı, fikir birliğiyle oluşturulmuş yanıtlar sunar.</p>
            <p className="text-gray-300">✔ Halüsinasyon Tespiti: Güvenilmez bilgileri aktif olarak belirler ve filtreler.</p>
            <p className="text-gray-300">✔ Adaptif Öğrenme: Her etkileşimden sürekli olarak öğrenir ve gelişir.</p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold mb-4">Eşsiz Yetenekler</h2>
            <p className="text-gray-300 dark:text-gray-300">
              Amezay AI™, modern kurumsal verilerin karmaşıklığı ve ölçeğiyle başa çıkmak için tasarlanmıştır.
            </p>
            <p className="text-gray-300">✔ Geniş Bağlam Kapasitesi: Yüzlerce sayfalık raporları ve uzun sözleşmeleri tam bağlamsal hafıza ile analiz edin.</p>
            <p className="text-gray-300">✔ Gelişmiş Çok Modallık: Metin, kod, resim ve sesten gelen içgörüleri aynı anda işleyin ve birbiriyle ilişkilendirin.</p>
            <p className="text-gray-300">✔ Hiper-Yerelleştirmeye Hazır: Yerel vergi, hukuk ve ticari kurallar üzerine eğitilmiş özel modeller dağıtın.</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProblemSolution;



