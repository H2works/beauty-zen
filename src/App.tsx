import React from 'react';
import { Sparkles, Clock, MapPin, Phone, Instagram, Facebook, Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <div 
        className="h-screen relative bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&q=80&w=2070")',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-light mb-4">Beauty Zen</h1>
            <p className="text-xl md:text-2xl font-light tracking-wide">心と体の調和を求めて</p>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-center mb-16 font-light">私たちについて</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=2070"
                alt="Salon interior"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <p className="text-neutral-600 leading-relaxed">
                Beauty Zenは、2015年の創業以来、お客様一人一人に寄り添った施術を提供してまいりました。
                私たちは、美しさは外見だけでなく、内面からも輝くものだと信じています。
              </p>
              <p className="text-neutral-600 leading-relaxed">
                最新の技術と伝統的な手法を組み合わせることで、
                心身ともにリラックスできる空間と施術を実現。
                経験豊富なセラピストが、あなたに最適なトリートメントプランをご提案いたします。
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-neutral-50 rounded-lg">
                  <p className="text-3xl font-light text-neutral-800">9年</p>
                  <p className="text-sm text-neutral-600">施術実績</p>
                </div>
                <div className="text-center p-4 bg-neutral-50 rounded-lg">
                  <p className="text-3xl font-light text-neutral-800">5,000+</p>
                  <p className="text-sm text-neutral-600">お客様数</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-center mb-16 font-light">施術メニュー</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'フェイシャル',
                price: '¥12,000〜',
                image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=2070'
              },
              {
                title: 'ボディトリートメント',
                price: '¥15,000〜',
                image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=2070'
              },
              {
                title: 'アロマセラピー',
                price: '¥10,000〜',
                image: 'aromatherapy.jpg?auto=format&fit=crop&q=80&w=2070'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white shadow-sm rounded-lg overflow-hidden transition-transform hover:scale-[1.02]">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="p-6">
                  <h3 className="text-xl mb-2">{service.title}</h3>
                  <p className="text-neutral-600">{service.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="pt-20 pb-5 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-center mb-16 font-light">アクセス</h2>
        </div>
        <div className="w-full h-[320px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.3776996330147!2d139.70074937574483!3d35.67147117259776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ca4139405c9%3A0x6d0ad0c597fb6657!2z5p2x5Lqs6YO95riL6LC35Yy66KW_5a6u5YmN!5e0!3m2!1sja!2sjp!4v1709704844317!5m2!1sja!2sjp"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-neutral-100 pt-5 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="w-8 h-8 mx-auto mb-4 text-neutral-700" />
              <h3 className="text-lg mb-2">営業時間</h3>
              <p className="text-neutral-600">
                平日: 10:00 - 20:00<br />
                土日祝: 10:00 - 18:00
              </p>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 mx-auto mb-4 text-neutral-700" />
              <h3 className="text-lg mb-2">所在地</h3>
              <p className="text-neutral-600">
                〒150-0001<br />
                東京都渋谷区神宮前1-1-1
              </p>
            </div>
            <div className="text-center">
              <Phone className="w-8 h-8 mx-auto mb-4 text-neutral-700" />
              <h3 className="text-lg mb-2">ご予約・お問い合わせ</h3>
              <p className="text-neutral-600">03-1234-5678</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="hover:text-neutral-300">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-neutral-300">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-neutral-300">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <p className="text-center text-neutral-400">
            © 2024 Beauty Zen. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;