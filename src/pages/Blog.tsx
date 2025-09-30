import React from "react";

const Blog: React.FC = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Başlık */}
      <section className="py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Amezay AI™ Blogu</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Yapay zekanın geleceği, kurumsal teknoloji ve yeni bir güven standardı oluşturma misyonumuz üzerine içgörüler.
        </p>
      </section>

      {/* Blog Yazıları */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          {[
            {
              date: "20 Ağustos 2025",
              title: "Halüsinasyonun Ötesinde: Yapay Zekanın 'Güvenilirlik Krizi' Neden Sektörün En Büyük Zorluğu?",
              description:
                "Yapay zeka halüsinasyonu sorununu derinlemesine inceliyor ve bu sorunu çözmenin, gerçek kurumsal benimsemenin kilidini açmanın anahtarı olduğunu açıklıyoruz.",
              url: "#",
            },
            {
              date: "15 Ağustos 2025",
              title: "MasterMind™'ın İçinde: Bir 'Dijital Uzmanlar Kurulu' Nasıl Kanıtlanabilir İçgörüler Yaratır?",
              description:
                "Tescilli sentez ve doğrulama motorumuza ve çok modelli fikir birliği yaklaşımının piyasadaki her tekil hata noktalı modelden nasıl farklılaştığına teknik bir bakış.",
              url: "#",
            },
            {
              date: "10 Ağustos 2025",
              title: "Geniş Bağlam Kapasitesinin Avantajı: İş Dünyası İçin Ne Anlama Geliyor?",
              description:
                "Tüm finansal geçmişleri tek bir sorguda analiz etmekten karmaşık yasal sözleşmelerin inceliklerini anlamaya kadar devasa bir bağlam penceresinin devrimsel etkisini keşfedin.",
              url: "#",
            },
          ].map((post, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <p className="text-sm text-gray-500 dark:text-gray-400">{post.date}</p>
              <h3 className="text-2xl font-semibold mt-2 mb-4">{post.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{post.description}</p>
              <a
                href={post.url}
                className="mt-4 inline-block text-teal-500 hover:text-teal-600"
              >
                Devamını Oku →
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;

