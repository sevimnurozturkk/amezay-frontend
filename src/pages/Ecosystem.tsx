import React from "react";
import AnimatedSection from "../components/AnimatedSection";

const Ecosystem = () => {
  return (
    <div className="pt-24 bg-gray-900 text-white min-h-screen px-4">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Başlık */}
        <AnimatedSection>
          <section className="space-y-4 text-center">
            <h2 className="text-4xl font-bold">Kanıtlanabilir Zekanın Motoru</h2>
            <p className="text-gray-300 text-lg">
              Devrim niteliğindeki MasterMind™ doğrulama motorumuzdan küresel ölçekli ve geleceğe hazır altyapımıza kadar Amezay AI™'ı güçlendiren tescilli teknolojiyi keşfedin.
            </p>
          </section>
        </AnimatedSection>

        {/* MasterMind Motoru */}
        <AnimatedSection>
          <section className="space-y-4">
            <h3 className="text-3xl font-bold">MasterMind™ Sentez ve Doğrulama Motoru</h3>
            <p className="text-gray-300 text-lg">
              Amezay AI™, tek modelli yaklaşımı temelden reddeder. Çözümümüz, zekayı bir istişare ve doğrulama süreci olarak ele alarak güvenilirliği temelinde sağlar.
            </p>

            <div className="space-y-6 mt-6">
              <div>
                <h4 className="text-xl font-semibold">1. Dijital Uzmanlar Kurulu</h4>
                <p className="text-gray-300">
                  Bir sorgu, çeşitli ve sınıfının en iyisi yapay zeka modellerinden oluşan bir 'istişare heyetine' sunulur ve her sorgunun birden çok uzman perspektifinden değerlendirilmesi sağlanır.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold">2. Analiz ve Karşılaştırma</h4>
                <p className="text-gray-300">
                  MasterMind™ motoru, her yanıtı ayrıştırır, ana argümanları ve veri noktalarını belirler, ardından tüm fikir birliği ve çelişki noktalarını bulur.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold">3. Doğrulama ve Filtreleme</h4>
                <p className="text-gray-300">
                  Üzerinde ortaklaşılan bilgiler 'yüksek güvenilir' olarak işaretlenirken, halüsinasyonlar ve tek kaynaklı iddialar incelenir ve elenir.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold">4. Sentez ve Sunum</h4>
                <p className="text-gray-300">
                  Tüm doğrulanmış bilgiler, doğruluğu birden çok kaynak tarafından kanıtlanmış, tek, tutarlı ve kapsamlı bir nihai yanıtta birleştirilir.
                </p>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Geleceğe Hazır Altyapı */}
        <AnimatedSection>
          <section className="space-y-4">
            <h3 className="text-3xl font-bold">Geleceğe Hazır Altyapı</h3>
            <p className="text-gray-300 text-lg">
              Platformumuz, geniş bir küresel ağ üzerinde dağıtılmış, en son teknolojiye sahip sunucusuz bir temel üzerine kurulmuştur. Bu sadece sunucularla ilgili değil; anlık, güvenli ve sonsuz ölçeklenebilir zeka sunmakla ilgilidir.
            </p>
          </section>
        </AnimatedSection>

        {/* Küresel Ölçek ve Güvenlik */}
        <AnimatedSection>
          <section className="space-y-4">
            <h3 className="text-3xl font-bold">Küresel Ölçek ve Performans</h3>
            <p className="text-gray-300 text-lg">
              Ağımız dünya çapında yüzlerce şehri kapsayarak kullanıcı sorgularının onlara fiziksel olarak yakın bir konumda işlenmesini sağlar. Bu, gecikmeyi önemli ölçüde azaltarak sorunsuz bir gerçek zamanlı deneyim sunar.
            </p>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="space-y-4">
            <h3 className="text-3xl font-bold">Güçlü Güvenlik</h3>
            <p className="text-gray-300 text-lg">
              Sıfır güven ilkeleri üzerine kurulu bir mimari ile her istek doğrulanır. Altyapımız, kurumsal düzeyde DDoS koruması ve güçlü bir web uygulaması güvenlik duvarı sağlayarak platformumuzu ve müşterilerimizin verilerini her zaman korur.
            </p>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="space-y-4">
            <h3 className="text-3xl font-bold">Sonsuz Ölçeklenebilirlik</h3>
            <p className="text-gray-300 text-lg">
              Sunucusuz teknolojimiz, fiziksel donanımla asla sınırlı kalmayacağımız anlamına gelir. Platformumuz, tek bir kullanıcıdan milyonlarca eşzamanlı isteğe kadar her türlü iş yükünü karşılamak için otomatik olarak ölçeklenir ve tutarlı bir şekilde hızlı ve güvenilir bir hizmet sağlar.
            </p>
          </section>
        </AnimatedSection>

      </div>
    </div>
  );
};

export default Ecosystem;


