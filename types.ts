// Added React import to resolve 'Cannot find namespace React' error when using React.ReactNode
import React from 'react';

export enum View {
  HOME = 'HOME',
  CATEGORY = 'CATEGORY',
  DETAIL = 'DETAIL'
}

export interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
}

export interface ProductOffer {
  id: string;
  name: string;
  price: number;
  image: string;
}

export interface Shop {
  id: string;
  name: string;
  category: string;
  rating: number;
  specialty: string;
  image: string;
  bannerImage: string;
  offers: ProductOffer[];
  mapUrl: string;
}
