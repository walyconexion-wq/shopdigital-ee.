
import React from 'react';
import { 
  Utensils, 
  IceCream, 
  Hotel, 
  Home as HomeIcon, 
  Plane, 
  Clock, 
  DollarSign, 
  Shirt, 
  Camera, 
  Gamepad2, 
  Plus, 
  PlusSquare 
} from 'lucide-react';
import { Category, Shop } from './types';

export const COLORS = {
  PRIMARY_BLUE: '#0A224E',
  LOGO_RED: '#FF0000',
  LOGO_GREEN: '#22C55E',
  WHITE: '#FFFFFF',
};

export const CATEGORIES: Category[] = [
  { id: 'gastro', name: 'Gastronomía', icon: <Utensils className="w-8 h-8 text-[#0A224E]" /> },
  { id: 'icecream', name: 'Heladerías', icon: <IceCream className="w-8 h-8 text-[#0A224E]" /> },
  { id: 'hotels', name: 'Hoteles', icon: <Hotel className="w-8 h-8 text-[#0A224E]" /> },
  { id: 'home', name: 'Hogar', icon: <HomeIcon className="w-8 h-8 text-[#0A224E]" /> },
  { id: 'travel', name: 'Viajes', icon: <Plane className="w-8 h-8 text-[#0A224E]" /> },
  { id: 'services', name: 'Servicios', icon: <Clock className="w-8 h-8 text-[#0A224E]" /> },
  { id: 'finance', name: 'Finanzas', icon: <DollarSign className="w-8 h-8 text-[#0A224E]" /> },
  { id: 'fashion', name: 'Indumentaria', icon: <Shirt className="w-8 h-8 text-[#0A224E]" /> },
  { id: 'tech', name: 'Tecnología', icon: <Camera className="w-8 h-8 text-[#0A224E]" /> },
  { id: 'entertainment', name: 'Entretenimiento', icon: <Gamepad2 className="w-8 h-8 text-[#0A224E]" /> },
  { id: 'health', name: 'Salud', icon: <Plus className="w-8 h-8 text-[#0A224E]" /> },
  { id: 'pharmacy', name: 'Farmacias', icon: <PlusSquare className="w-8 h-8 text-[#0A224E]" /> },
];

export const MOCK_SHOPS: Shop[] = [
  {
    id: '1',
    name: 'PIZZERÍA RUCALHUE',
    category: 'gastro',
    rating: 5,
    specialty: 'Pizza a la leña',
    image: 'https://picsum.photos/seed/pizz1/200/200',
    bannerImage: 'https://picsum.photos/seed/pizzbanner/800/400',
    offers: [
      { id: 'o1', name: 'Muzzarella', price: 228.10, image: 'https://picsum.photos/seed/muzza/100/100' },
      { id: 'o2', name: 'Napolitana', price: 310.80, image: 'https://picsum.photos/seed/napo/100/100' },
      { id: 'o3', name: 'Fugazzeta', price: 290.60, image: 'https://picsum.photos/seed/fuga/100/100' },
    ],
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13101.442991054592!2d-58.4682025!3d-34.821991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd1361c77876d%3A0x6a099c2d1d4d13e!2sEsteban%20Echeverr%C3%ADa%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1715456789012!5m2!1ses!2sar'
  },
  {
    id: '2',
    name: 'HELADERÍA EL SOL',
    category: 'icecream',
    rating: 4,
    specialty: 'Artesanal Premium',
    image: 'https://picsum.photos/seed/ice1/200/200',
    bannerImage: 'https://picsum.photos/seed/icebanner/800/400',
    offers: [
      { id: 'o4', name: '1kg Helado', price: 1500, image: 'https://picsum.photos/seed/kg/100/100' },
    ],
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.4042857039014!2d-58.4682025!3d-34.821991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDQ5JzE5LjIiUyA1OMKwMjgnMDUuNSJX!5e0!3m2!1ses!2sar!4v1715456789012!5m2!1ses!2sar'
  }
];
