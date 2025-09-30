import React from 'react';
import AnimatedSection from './AnimatedSection';

const services = [
  { title: 'Hatalı İçgörüler', description: 'Kritik iş kararları, kusurlu veya tamamen uydurma yapay zeka tarafından üretilen bilgilere dayandırılıyor.' },
  { title: 'Veri Analizi', description: 'Ekipler, yapay zeka çıktılarının doğruluğunu manuel olarak kontrol etmek için sayısız saat harcayarak otomasyonun amacını boşa çıkarıyor.' },
  { title: 'Ölçeklenmenin Önündeki Engel', description: 'Şirketlerin %70 i, yapay zeka güvenilirliğini daha geniş çapta benimsemenin ve entegrasyonun önündeki temel engel olarak gösteriyor.' },
  
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-900 text-white px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <AnimatedSection>
          <h2 className="text-4xl font-bold">Yapay Zekada Güven Krizi</h2>
          <p className="text-gray-300 mt-4">
          Tek modelli yapay zeka sistemleri halüsinasyona, yanlılığa ve tutarsızlığa eğilimlidir, bu da işletmelere zaman ve kaynak kaybettirir.
          </p>
        </AnimatedSection>
      </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        {services.map((service) => (
          <AnimatedSection key={service.title}>
            <div className="bg-gray-800 p-6 rounded-xl hover:bg-teal-500 transition-colors duration-300">
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default Services;
