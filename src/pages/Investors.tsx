import React from "react";
import AnimatedSection from "../components/AnimatedSection";

const Investors = () => {
  return (
    <div className="pt-24 bg-gray-900 text-white min-h-screen px-4">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Başlık */}
        <AnimatedSection>
          <section className="space-y-4 text-center">
            <h2 className="text-4xl font-bold">Güvenilir Yapay Zekanın Geleceğine Yatırım Yapın</h2>
            <p className="text-gray-300 text-lg">
              Amezay AI™, kurumsal yapay zeka adaptasyonunun önündeki en kritik engeli, yani güvenilirliği çözüyor. Sizi kanıtlanabilir zekanın geleceğini şekillendirmeye davet ediyoruz.
            </p>
          </section>
        </AnimatedSection>

        {/* Neden Yatırım Yapmalısınız */}
        <AnimatedSection>
          <section className="space-y-4">
            <h3 className="text-3xl font-bold">Neden Amezay AI™'a Yatırım Yapmalısınız?</h3>
            <div className="space-y-6 mt-4">

              <div>
                <h4 className="text-2xl font-semibold">Kritik Bir Pazar Sorununu Çözüyoruz</h4>
                <p className="text-gray-300 mt-1">
                  Şirketlerin %70'i, yapay zeka güvenilirliğini ölçeklenmenin önündeki temel engel olarak belirtiyor. Biz bu soruna kesin bir çözüm sunarak devasa bir pazar fırsatının kapısını aralıyoruz.
                </p>
              </div>

              <div>
                <h4 className="text-2xl font-semibold">Tescilli ve Taklit Edilemez Teknoloji</h4>
                <p className="text-gray-300 mt-1">
                  API toplayıcıların aksine, MasterMind™ motorumuz ve geniş bağlam kapasitemiz gibi temel teknolojilerimiz bize aittir ve bu da güçlü bir rekabet avantajı yaratır.
                </p>
              </div>

              <div>
                <h4 className="text-2xl font-semibold">Deneyimli Liderlik ve Vizyon</h4>
                <p className="text-gray-300 mt-1">
                  Yazılım ve yapay zeka alanında 35+ yıllık deneyime sahip bir kurucu tarafından yönetilen Amezay AI™, küresel bir lider olma konusunda teknik uzmanlığa ve pazar vizyonuna sahiptir.
                </p>
              </div>

            </div>
          </section>
        </AnimatedSection>

        {/* Fırsatlar */}
        <AnimatedSection>
          <section className="grid md:grid-cols-2 gap-8 text-center">
            <div className="bg-gray-800 p-6 rounded-xl hover:bg-teal-500 transition-colors duration-300">
              <h4 className="text-2xl font-semibold">$50B</h4>
              <p className="text-gray-300 mt-2">
                Yapay Zeka Güvenilirlik ve Otomasyon Platformları İçin Adreslenebilir Pazar (SAM)
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl hover:bg-teal-500 transition-colors duration-300">
              <h4 className="text-2xl font-semibold">$2M</h4>
              <p className="text-gray-300 mt-2">
                Teknolojiyi Son Haline Getirmek ve Kilit Müşterileri Kazanmak İçin Mevcut Tohum Yatırım Talebi
              </p>
            </div>
          </section>
        </AnimatedSection>

        {/* İletişim */}
        <AnimatedSection>
          <section className="text-center space-y-4">
            <p className="text-gray-300 text-lg">
              Detaylı bir yatırımcı raporu almak ve bu fırsatı daha fazla görüşmek için lütfen bizimle iletişime geçin.
            </p>
            <button className="px-6 py-3 bg-teal-500 rounded-lg hover:bg-teal-600 transition-colors font-semibold">
              Yatırımcı İlişkileriyle İletişime Geçin
            </button>
          </section>
        </AnimatedSection>

      </div>
    </div>
  );
};

export default Investors;
