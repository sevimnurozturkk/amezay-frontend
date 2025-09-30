import React from "react";
import AnimatedSection from "../components/AnimatedSection";

const About = () => {
  return (
    <div className="pt-24 bg-gray-900 text-white min-h-screen px-4">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Misyon */}
        <AnimatedSection>
          <section className="space-y-4">
            <h2 className="text-4xl font-bold">Misyonumuz: Yapay Zekada Yeni Bir Güven Standardı Oluşturmak</h2>
            <p className="text-gray-300 text-lg">
              İnsanlar ve yapay zeka arasındaki ilişkiyi şüphe temeli üzerine değil, kanıtlanabilir, delile dayalı güven üzerine yeniden inşa ediyoruz.
            </p>
          </section>
        </AnimatedSection>

        {/* Hikaye */}
        <AnimatedSection>
          <section className="space-y-4">
            <h2 className="text-3xl font-bold">Amezay AI™'ın Hikayesi</h2>
            <p className="text-gray-300 text-lg">
              Yapay zeka devrimi, kritik bir kusurla birlikte geldi: bir güvenilirlik krizi. En gelişmiş yapay zeka modelleri bile halüsinasyona, tutarsızlığa ve bağlamsal unutkanlığa eğilimlidir. Bu gerçeklik, yapay zekanın potansiyelini, özellikle kurumsal ve görev açısından kritik karar alma süreçlerinde ciddi şekilde sınırlar.
            </p>
            <p className="text-gray-300 text-lg">
              Amezay AI™, bu temel sorunu çözmek için küresel bir vizyonla Tokat, Türkiye'de kuruldu. Tek bir hata noktası içeren tek modelli yaklaşımı reddettik. Bunun yerine, yeni bir mimariye öncülük ettik: bir 'dijital uzmanlar kurulu.'
            </p>
            <p className="text-gray-300 text-lg">
              Tescilli MasterMind™ Motorumuz bir doğrulama ve sentez katmanı olarak hareket eder. Uzmanlaşmış yapay zeka modellerinden oluşan bir komiteye danışır, çıktılarını çapraz doğrular, çelişkileri çözer ve tek, tutarlı ve doğrulanabilir derecede doğru bir yanıt oluşturur. Bu, güvenilir, bütünleşik zekanın geleceğidir.
            </p>
          </section>
        </AnimatedSection>

        {/* Vizyon */}
        <AnimatedSection>
          <section className="space-y-4">
            <h2 className="text-3xl font-bold">Vizyonumuz</h2>
            <p className="text-gray-300 text-lg">
              Güvenilirliğin bir lüks değil, bir standart olduğu bir dünyada, Amezay AI™, finansal raporlamadan hukuki araştırmalara, akademik çalışmalardan gazeteciliğe kadar bilginin doğruluğunun kritik olduğu her alanda vazgeçilmez bir araç olacaktır. Doğrulanmış zeka için yeni bir küresel standart belirliyoruz.
            </p>
          </section>
        </AnimatedSection>

        {/* Kurucu */}
        <AnimatedSection>
          <section className="space-y-4">
            <h2 className="text-3xl font-bold">Kurucu ile Tanışın</h2>
            <p className="text-gray-300 text-lg font-semibold">Yasin Umur</p>
            <p className="text-gray-300 text-lg">Kurucu & CEO</p>
            <p className="text-gray-300 text-lg">
              Amezay AI™, yazılım geliştirme ve yapay zeka alanında 35 yılı aşkın derin bir deneyime sahip olan Yasin Umur tarafından kurulmuştur. Sayın Umur'un teknik uzmanlığı ve pazar vizyonu, projenin temel güçleridir ve yapay zekanın güvenilirlik krizini çözme ve dünyaya kanıtlanabilir zeka sunma misyonunu yönlendirir.
            </p>
          </section>
        </AnimatedSection>

      </div>
    </div>
  );
};

export default About;

