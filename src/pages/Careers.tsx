import React from "react";
import AnimatedSection from "../components/AnimatedSection";

const Careers = () => {
  return (
    <div className="pt-24 bg-gray-900 text-white min-h-screen px-4">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Başlık */}
        <AnimatedSection>
          <section className="space-y-4 text-center">
            <h2 className="text-4xl font-bold">Güvenilir Yapay Zekanın Geleceğini İnşa Edin</h2>
            <p className="text-gray-300 text-lg">
              Bizler, yapay zekanın güvenilirlik krizini çözme misyonuna sahip öncüler, düşünürler ve inşaatçılardan oluşan bir ekibiz. Karmaşık zorluklardan motive oluyor ve küresel bir etki yaratmak istiyorsanız, bize katılın.
            </p>
          </section>
        </AnimatedSection>

        {/* Açık Pozisyonlar Başlığı */}
        <AnimatedSection>
          <section className="space-y-4">
            <h3 className="text-3xl font-bold">Açık Pozisyonlar</h3>
            <p className="text-gray-300 text-lg">
              Yolculuğumuza katılacak olağanüstü yetenekler arıyoruz. Aşağıdaki açık rollerimizi keşfedin.
            </p>
          </section>
        </AnimatedSection>

        {/* Pozisyonlar */}
        <div className="space-y-12">

          {/* Yapay Zeka Araştırma Bilimcisi */}
          <AnimatedSection>
            <section className="bg-gray-800 p-6 rounded-xl hover:bg-teal-500 transition-colors duration-300">
              <h4 className="text-2xl font-semibold">Yapay Zeka Araştırma Bilimcisi</h4>
              <p className="text-gray-300 italic mt-1">Uzaktan / Tokat, Türkiye</p>
              <p className="text-gray-300 mt-2">
                MasterMind™ motorumuz için yeni algoritmalar tasarlayın ve uygulayın. Çoklu model sentezi, halüsinasyon tespiti ve büyük ölçekli bağlam yönetimi sınırlarını zorlayın. NLP, ML veya ilgili bir alanda Doktora veya eşdeğer deneyim gereklidir.
              </p>
            </section>
          </AnimatedSection>

          {/* Kıdemli Backend Mühendisi */}
          <AnimatedSection>
            <section className="bg-gray-800 p-6 rounded-xl hover:bg-teal-500 transition-colors duration-300">
              <h4 className="text-2xl font-semibold">Kıdemli Backend Mühendisi (Python/FastAPI)</h4>
              <p className="text-gray-300 italic mt-1">Uzaktan / Tokat, Türkiye</p>
              <p className="text-gray-300 mt-2">
                Amezay AI™ platformunun temel altyapısını oluşturun ve ölçeklendirin. Tüm ekosistemimizi güçlendiren yüksek performanslı, asenkron mikroservisler geliştirmekten sorumlu olacaksınız. Python, FastAPI, Docker ve PostgreSQL uzmanlığı esastır.
              </p>
            </section>
          </AnimatedSection>

          {/* Kıdemli Frontend Mühendisi */}
          <AnimatedSection>
            <section className="bg-gray-800 p-6 rounded-xl hover:bg-teal-500 transition-colors duration-300">
              <h4 className="text-2xl font-semibold">Kıdemli Frontend Mühendisi (Next.js/React)</h4>
              <p className="text-gray-300 italic mt-1">Uzaktan</p>
              <p className="text-gray-300 mt-2">
                Web uygulamalarımız için sezgisel ve güçlü kullanıcı deneyimleri oluşturun. Frontend mimarisinin sorumluluğunu üstlenerek, Next.js ve React ile hem güzel hem de yüksek performanslı, karmaşık, veri odaklı arayüzler oluşturacaksınız.
              </p>
            </section>
          </AnimatedSection>

          {/* Uluslararası Satış ve Ortaklıklar Yöneticisi */}
          <AnimatedSection>
            <section className="bg-gray-800 p-6 rounded-xl hover:bg-teal-500 transition-colors duration-300">
              <h4 className="text-2xl font-semibold">Uluslararası Satış ve Ortaklıklar Yöneticisi</h4>
              <p className="text-gray-300 italic mt-1">Uzaktan (Avrupa)</p>
              <p className="text-gray-300 mt-2">
                Avrupa'daki pazara giriş stratejimizi, Almanya'dan başlayarak yönetin. Amezay AI™'ı yapay zeka güvenilirliğinde lider olarak konumlandırmak için kurumsal müşteriler, ticaret odaları ve endüstri dernekleri ile ilişkiler kuracaksınız.
              </p>
            </section>
          </AnimatedSection>

          {/* CV gönderme */}
          <AnimatedSection>
            <section className="text-center space-y-2">
              <h4 className="text-2xl font-semibold">Rolünüzü göremiyor musunuz?</h4>
              <p className="text-gray-300 text-lg">
                Her zaman tutkulu ve yetenekli bireyler arıyoruz. Misyonumuza katkıda bulunabileceğinize inanıyorsanız, sizden haber almak isteriz.
              </p>
              <button className="px-6 py-3 bg-teal-500 rounded-lg hover:bg-teal-600 transition-colors font-semibold mt-4">
                CV'nizi Bize Gönderin
              </button>
            </section>
          </AnimatedSection>

        </div>
      </div>
    </div>
  );
};

export default Careers;

