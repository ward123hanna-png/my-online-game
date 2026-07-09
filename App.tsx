import React, { useEffect, useState } from 'react';
import { MapPin, Globe, Phone } from 'lucide-react';

const logoImg = 'https://drive.google.com/thumbnail?id=1n2FR8dpLz3m9Y6_C0lu6D_JsYxbNR_UR&sz=w800';
import machineIceCreamImg from './assets/images/ice_cream_cup_1780590007668.png';
import regularIceCreamImg from './assets/images/regular_ice_cream_1780590768502.png';
import crepeImg from './assets/images/loaded_crepe_1780590029612.png';
import pancakeImg from './assets/images/chocolate_pancakes_stack_1780590722040.png';
import gauverImg from './assets/images/oval_gauver_1780591257054.png';
import waffleImg from './assets/images/loaded_waffle_dessert_1780590668716.png';
import cottonCandyImg from './assets/images/cotton_candy_1780590748066.png';
import milkshakesImg from './assets/images/thick_chocolate_milkshake_1780590704384.png';
import slashImg from './assets/images/colorful_ice_slash_1780590686370.png';
import pepsiImg from './assets/images/pepsi_drink_1780590786869.png';
import mojitoImg from './assets/images/mojito_drink_1780590805212.png';
import sevenupImg from './assets/images/sevenup_drink_1780590822090.png';

const MULTILINGUAL_GREETINGS = [
  "Welcome", "اهلا بك"
];

const MARQUEE_ITEMS = Array(20).fill(MULTILINGUAL_GREETINGS).flat();

const CandyBackground = () => {
  const [elements, setElements] = useState<{ id: number, type: number, left: number, top: number, size: number, delay: number, duration: number, color: string }[]>([]);

  useEffect(() => {
    const colors = ['#FF9DBB', '#87CEFA', '#8B4513', '#FFB6C1', '#00BFFF', '#6B4226'];
    const newElements = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      type: Math.floor(Math.random() * 3),
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 30 + 30,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 10,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setElements(newElements);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-20">
      {elements.map((el) => (
        <div
          key={el.id}
          className="absolute animate-float"
          style={{
            left: `${el.left}%`,
            top: `${el.top}%`,
            width: el.size,
            height: el.size,
            animationDelay: `${el.delay}s`,
            animationDuration: `${el.duration}s`,
            color: el.color
          }}
        >
          {el.type === 0 && (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full transform -rotate-45">
              <path d="M12,4C9.79,4 8,5.79 8,8C8,9.7 8.94,11.16 10.36,11.75L12,14.5L13.63,11.75C15.06,11.16 16,9.7 16,8C16,5.79 14.21,4 12,4M12,6C13.1,6 14,6.9 14,8C14,9.1 13.1,10 12,10C10.9,10 10,9.1 10,8C10,6.9 10.9,6 12,6M5.5,10L7,11.5L5.5,13L4,11.5L5.5,10M18.5,10L20,11.5L18.5,13L17,11.5L18.5,10" />
              <path d="M7 11.5l-4-4v8z M17 11.5l4-4v8z" stroke="currentColor" fill="none" strokeWidth="2" strokeLinejoin="round" />
              <circle cx="12" cy="12" r="5" fill="currentColor" />
            </svg>
          )}
          {el.type === 1 && (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full transform rotate-12">
              <circle cx="12" cy="10" r="7" />
              <rect x="11" y="16" width="2" height="8" fill="#D2B48C" />
              <path d="M8 7c1-1 3-1 4 0" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            </svg>
          )}
          {el.type === 2 && (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full transform rotate-45">
              <rect x="5" y="5" width="14" height="14" rx="2" />
              <rect x="6" y="6" width="5" height="5" fill="rgba(255,255,255,0.2)" />
              <rect x="13" y="6" width="5" height="5" fill="rgba(255,255,255,0.2)" />
              <rect x="6" y="13" width="5" height="5" fill="rgba(255,255,255,0.2)" />
              <rect x="13" y="13" width="5" height="5" fill="rgba(255,255,255,0.2)" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
};

const translations = {
  en: {
    coming: "Coming all the way from Pluto 🍦",
    location: "Wadi Al Nassara, Alhawash, beside Martyrs' Offices",
    menu: "Our Magical Menu",
    machineIceCream: "Machine Ice Cream",
    regularIceCream: "Regular Ice Cream",
    crepe: "Loaded Crepe",
    pancakes: "Pancakes",
    gauver: "Gauver",
    waffle: "Classic Waffle",
    cottonCandy: "Cotton Candy",
    milkshakes: "Thick Milkshakes",
    slash: "Ice Slash",
    pepsi: "Pepsi",
    mojito: "Fresh Mojito",
    sevenUp: "7up",
    xxl: "XXL Sizes Available! 🥤",
    footer: "Sprinkled with love ✨",
    rights: "© 2026 Pluto Nine Candies. All true tastes reserved."
  },
  ar: {
    coming: "قادم من بلوتو 🍦",
    location: "وادي النصارى، الحواش، بجانب مكاتب الشهداء",
    menu: "قائمتنا السحرية",
    machineIceCream: "آيس كريم ماكينة",
    regularIceCream: "آيس كريم كاسات",
    crepe: "كريب",
    pancakes: "بان كيك",
    gauver: "غوفر",
    waffle: "وافل كلاسيكي",
    cottonCandy: "غزل البنات",
    milkshakes: "ميلك شيك",
    slash: "سلاش مثلج",
    pepsi: "بيبسي",
    mojito: "موهيتو منعش",
    sevenUp: "سفن أب",
    xxl: "أحجام XXL متوفرة! 🥤",
    footer: "مرشوش بالحب ✨",
    rights: "© 2026 بلوتو ناين للحلويات. جميع الحقوق محفوظة."
  }
};

const snacks = [
  { id: '1', key: 'machineIceCream', img: machineIceCreamImg, badge: 'Signature' },
  { id: '2', key: 'regularIceCream', img: regularIceCreamImg, badge: 'Scoops' },
  { id: '3', key: 'crepe', img: crepeImg, badge: 'Chocolate Drizzle' },
  { id: '4', key: 'pancakes', img: pancakeImg, badge: 'Loaded' },
  { id: '5', key: 'gauver', img: gauverImg, badge: 'Plain & Crispy' },
  { id: '6', key: 'waffle', img: waffleImg, badge: 'Fully Loaded' },
  { id: '7', key: 'cottonCandy', img: cottonCandyImg, badge: 'Fluffy' },
  { id: '8', key: 'milkshakes', img: milkshakesImg, badge: 'Thick' },
  { id: '9', key: 'slash', img: slashImg, badge: 'Icy' },
  { id: '10', key: 'pepsi', img: pepsiImg, badge: 'Cool' },
  { id: '11', key: 'mojito', img: mojitoImg, badge: 'Minty' },
  { id: '12', key: 'sevenUp', img: sevenupImg, badge: 'Refreshing' }
];

const MenuItemCard = ({ title, image, badge }: { title: string, image: string, badge?: string }) => (
  <div className="bg-white/80 backdrop-blur-md rounded-3xl overflow-hidden shadow-xl border-2 border-pink-200 transform hover:-translate-y-2 hover:shadow-2xl transition duration-300 group flex flex-col">
    <div className="relative h-48 sm:h-56 w-full overflow-hidden shrink-0">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500 ease-in-out" />
      {badge && (
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-pink-600 font-bold px-3 py-1 rounded-full text-xs shadow-md">
          {badge}
        </div>
      )}
    </div>
    <div className="p-4 flex-grow flex items-center justify-center text-center">
      <h3 className="text-xl font-bold text-[#8B4513] leading-tight">{title}</h3>
    </div>
  </div>
);

export default function App() {
  const [lang, setLang] = useState<'en' | 'ar'>('en');
  const t = translations[lang];
  const [supportedLanguages, setSupportedLanguages] = useState<{code: string, name: string}[]>([]);

  useEffect(() => {
    // Check if script is already added
    if (!document.getElementById('google-translate-script')) {
      // Create the script element
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;

      // Define the callback globally
      // @ts-ignore
      window.googleTranslateElementInit = () => {
        // @ts-ignore
        new window.google.translate.TranslateElement({
          pageLanguage: 'en',
          autoDisplay: false
        }, 'google_translate_element');
      };

      document.body.appendChild(script);

      // Add CSS to hide google translate completely
      const style = document.createElement('style');
      style.innerHTML = `
        .goog-te-banner-frame { display: none !important; }
        .skiptranslate { display: none !important; }
        body { top: 0px !important; }
        #google_translate_element { display: none !important; }
      `;
      document.head.appendChild(style);
    }

    // Start polling for google translate languages to populate our custom dropdown
    const checkGoogleTranslate = setInterval(() => {
      const combo = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      if (combo && combo.options && combo.options.length > 1) {
        const langs = Array.from(combo.options)
          .filter(opt => opt.value) // exclude empty value
          .map(opt => ({ code: opt.value, name: opt.text }));
        
        if (langs.length > 0) {
          setSupportedLanguages(langs);
          clearInterval(checkGoogleTranslate);
        }
      }
    }, 500);

    return () => clearInterval(checkGoogleTranslate);
  }, []);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const langCode = e.target.value;
    const googSelect = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (googSelect) {
      googSelect.value = langCode;
      googSelect.dispatchEvent(new Event('change'));
    }
  };

  return (
    <div dir={lang === 'ar' ? 'rtl' : 'ltr'} className="min-h-screen font-sans text-[#5c3a21] relative overflow-hidden bg-gradient-to-b from-[#ffe4e1] to-[#f0f8ff]">
      <CandyBackground />

      {/* Language Switcher */}
      <div className="absolute top-4 right-4 z-50">
        <div id="google_translate_element"></div>
        <div className="relative group">
          <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border-2 border-pink-300 text-[#8B4513] font-bold hover:bg-pink-50 transition cursor-pointer relative overflow-hidden">
            <Globe size={18} className="shrink-0" />
            <select 
              className="appearance-none bg-transparent outline-none w-24 text-sm font-bold text-[#8B4513] cursor-pointer"
              onChange={handleLanguageChange}
              defaultValue=""
            >
              <option value="" disabled>Language</option>
              {supportedLanguages.length > 0 ? (
                supportedLanguages.map(lang => (
                  <option key={lang.code} value={lang.code}>{lang.name}</option>
                ))
              ) : (
                <option value="en">Loading Languages...</option>
              )}
            </select>
          </div>
        </div>
      </div>

      {/* Marquee Banner */}
      <div className="bg-[#8B4513] text-[#FFE8ED] py-2 whitespace-nowrap overflow-hidden relative z-10 font-bold">
        <div className="inline-block animate-marquee" dir="ltr">
          {MARQUEE_ITEMS.map((text, i) => (
            <span key={i} className="mx-4 text-sm md:text-base">
              🍬 {text}
            </span>
          ))}
        </div>
      </div>

      <header className="relative z-10 pt-10 pb-6 px-4 max-w-5xl mx-auto flex flex-col items-center justify-center text-center">
        <div className="relative mb-6 group">
          <div className="absolute inset-0 bg-blue-300 rounded-full blur opacity-40 transition duration-500"></div>
          <div className="w-36 h-36 md:w-48 md:h-48 rounded-full border-4 border-white shadow-xl p-1 relative flex items-center justify-center overflow-hidden bg-white">
             <img 
               src={logoImg} 
               alt="Pluto Nine Candies Logo" 
               className="w-full h-full object-cover rounded-full z-10 relative"
             />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-2 text-[#8B4513] drop-shadow-sm">
          Pluto Nine <span className="text-[#FF69B4]">Candies</span>
        </h1>
        <p className="text-xl md:text-2xl font-medium text-[#4b2f15] mb-2 flex items-center justify-center gap-2">
          {t.coming}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <p className="text-md md:text-lg text-[#664327] flex items-center justify-center gap-2 font-bold bg-white/50 px-5 py-2.5 rounded-full backdrop-blur-sm shadow-sm border border-white/50 text-center leading-tight">
            <MapPin size={20} className="text-[#00BFFF] shrink-0" />
            {t.location}
          </p>
          <a href="tel:0958233791" className="text-md md:text-lg text-white font-black flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300">
            <Phone size={20} className="animate-pulse" />
            0958233791
          </a>
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-4 pb-20">
        <div className="text-center mb-10">
           <h2 className="text-3xl md:text-4xl font-black text-[#8B4513] inline-block bg-white/60 px-8 py-3 rounded-2xl backdrop-blur-sm border-2 border-pink-200 shadow-md">
             {t.menu} 🍭
           </h2>
        </div>

        {/* Dynamic Snack Grid - Photo for every item */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-2">
          {snacks.map((snack) => (
            <MenuItemCard 
              key={snack.id} 
              title={t[snack.key as keyof typeof t]} 
              image={snack.img} 
              badge={snack.badge}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
           <span className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xl md:text-2xl font-black tracking-wide px-10 py-4 rounded-full shadow-lg border-4 border-white animate-pulse">
             {t.xxl}
           </span>
        </div>
      </main>

      <footer className="bg-[#8B4513] text-[#FFE8ED] py-8 text-center relative z-10 mt-10">
         <div className="max-w-4xl mx-auto px-4 flex flex-col items-center gap-2">
            <h3 className="text-2xl font-bold font-serif italic mb-2">{t.footer}</h3>
            <p className="opacity-90 flex items-center justify-center gap-1 font-medium"><MapPin size={16}/> {t.location}</p>
            <p className="opacity-90 flex items-center justify-center gap-2 mt-2 font-bold text-lg">
              <Phone size={18} /> 0958233791
            </p>
            <p className="opacity-80 text-sm mt-4">{t.rights}</p>
         </div>
      </footer>
    </div>
  );
}
