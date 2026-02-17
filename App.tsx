
import React, { useState, useCallback } from 'react';
import { View, Shop } from './types';
import { CATEGORIES, MOCK_SHOPS, COLORS } from './constants';
import Logo from './components/Logo';
import { Share2, Star, ArrowLeft, MessageCircle, User } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.HOME);
  const [selectedShop, setSelectedShop] = useState<Shop | null>(null);

  const handleCategoryClick = useCallback(() => {
    setCurrentView(View.CATEGORY);
  }, []);

  const handleShopClick = useCallback((shop: Shop) => {
    setSelectedShop(shop);
    setCurrentView(View.DETAIL);
  }, []);

  const handleBack = useCallback(() => {
    if (currentView === View.DETAIL) {
      setCurrentView(View.CATEGORY);
    } else {
      setCurrentView(View.HOME);
    }
  }, [currentView]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'shopdigital.ar',
        text: 'Mira los comercios de Esteban Echeverría!',
        url: window.location.href,
      });
    } else {
      alert('Funcionalidad de compartir no disponible en este navegador');
    }
  };

  return (
    <div className="max-w-md mx-auto min-h-screen relative pb-20 overflow-x-hidden">
      {/* Header - Fixed across views */}
      <header className="py-6 bg-white border-b border-gray-100 flex flex-col items-center">
        <Logo />
        {currentView === View.CATEGORY && (
          <h2 className="mt-4 text-xl font-bold text-[#0A224E] uppercase tracking-wider">Gastronomía</h2>
        )}
      </header>

      {/* Main Content Area */}
      <main className="px-6 mt-6">
        {currentView === View.HOME && (
          <div className="grid grid-cols-3 gap-6">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={handleCategoryClick}
                className="neumorphic-button border border-green-500/30 rounded-2xl aspect-square flex flex-col items-center justify-center p-2 gap-2"
              >
                {cat.icon}
                <span className="text-[10px] text-center font-medium leading-tight">{cat.name}</span>
              </button>
            ))}
          </div>
        )}

        {currentView === View.CATEGORY && (
          <div className="space-y-6">
            {/* Filter Tabs */}
            <div className="flex gap-2 overflow-x-auto pb-2 -mx-2 px-2 no-scrollbar">
              {['PIZZERÍAS', 'HELADERÍAS', 'RESTAURANTES', 'ROTISERÍAS'].map((tab) => (
                <button
                  key={tab}
                  className="px-4 py-2 border border-green-500 rounded-xl text-[10px] font-bold whitespace-nowrap shadow-sm text-[#0A224E]"
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Shop Cards */}
            <div className="space-y-4">
              {MOCK_SHOPS.map((shop) => (
                <div key={shop.id} className="border border-green-500 rounded-2xl p-3 flex gap-4 bg-white shadow-sm">
                  <div className="w-24 h-24 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                    <img src={shop.image} alt={shop.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col justify-between py-1 flex-grow">
                    <div>
                      <h3 className="font-bold text-sm text-[#0A224E]">{shop.name}</h3>
                      <div className="flex gap-0.5 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${i < shop.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      <p className="text-[10px] text-gray-500 mt-1">Especialidad: {shop.specialty}</p>
                    </div>
                    <button
                      onClick={() => handleShopClick(shop)}
                      className="bg-[#0A224E] text-white text-[10px] font-bold py-1.5 px-4 rounded-lg self-end mt-2 uppercase tracking-tight"
                    >
                      Ver Catálogo
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={handleBack}
              className="w-full py-3 text-[#0A224E] font-bold text-sm border-t border-gray-100 mt-8"
            >
              VOLVER
            </button>
          </div>
        )}

        {currentView === View.DETAIL && selectedShop && (
          <div className="pb-10 -mx-6">
            {/* Shop Profile Image */}
            <div className="relative w-full h-56">
              <img src={selectedShop.bannerImage} className="w-full h-full object-cover" alt="Banner" />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/40 to-transparent"></div>
              <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold text-center px-4 uppercase shadow-sm">
                {selectedShop.name}
              </h1>
            </div>

            <div className="px-6 mt-6">
              <h2 className="text-xl font-bold text-[#0A224E] mb-6 uppercase tracking-wider">{selectedShop.name}</h2>
              
              <div className="mt-8">
                <h3 className="font-bold text-[#0A224E] text-sm mb-4 uppercase">Ofertas del día</h3>
                <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
                  {selectedShop.offers.map((offer) => (
                    <div key={offer.id} className="flex-shrink-0 w-28">
                      <div className="border-4 border-green-500 rounded-2xl overflow-hidden aspect-square mb-2">
                        <img src={offer.image} alt={offer.name} className="w-full h-full object-cover" />
                      </div>
                      <p className="text-[10px] font-bold text-center leading-tight">{offer.name}</p>
                      <p className="text-[10px] font-bold text-center text-[#0A224E] mt-1">${offer.price.toFixed(2)}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Section */}
              <div className="mt-8 rounded-2xl overflow-hidden border border-gray-200 shadow-inner">
                 <iframe
                  title="Google Maps"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={selectedShop.mapUrl}
                />
              </div>

              {/* Action Buttons Row */}
              <div className="flex items-center justify-between gap-4 mt-8 pb-10">
                <button className="flex-1 bg-green-500 text-white py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-bold shadow-lg active:scale-95 transition-transform">
                  <MessageCircle size={18} />
                  PEDIDO
                </button>
                <button onClick={handleBack} className="text-[#0A224E] font-bold text-xs uppercase tracking-widest">
                  VOLVER
                </button>
                <button className="bg-[#0A224E] text-white p-3 rounded-xl flex items-center gap-2 text-xs font-bold shadow-lg">
                  <User size={16} />
                  DUEÑO
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Floating Buttons */}
      {currentView === View.HOME && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 w-full px-12">
          <button
            onClick={handleShare}
            className="w-full bg-white border-4 border-green-500 rounded-2xl py-3 flex items-center justify-center gap-3 text-lg font-bold text-[#0A224E] shadow-xl hover:bg-gray-50 active:scale-95 transition-transform"
          >
            <Share2 className="text-green-500" />
            Compartir
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
