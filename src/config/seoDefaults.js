/**
 * Per-language SEO copy: titles, descriptions, keywords, and product names for JSON-LD.
 * Tune these for Uzbekistan / Tashkent search intent.
 */

export const SEO_BY_LANG = {
  uz: {
    title: 'Gulqand – Toshkentda shirinliklar, meva va oziq-ovqat yetkazib berish',
    description:
      'Toshkentda yangi shirinliklar, mevalar va oziq-ovqatni onlayn buyurtma qiling. Gulqand – tez yetkazib berish va qulay narxlar. Anʼanaviy gulqand va mahalliy mahsulotlar.',
    keywords:
      'gulqand, shirinliklar sotib olish, mevalar yetkazib berish, oziq-ovqat online, Toshkent yetkazib berish, onlayn doʻkon, mahalliy mahsulotlar',
    ogTitle: 'Gulqand – Yangi shirinliklar va mevalar | Toshkent',
    ogDescription:
      'Toshkent boʻylab tez yetkazib berish. Shirinliklar, mevalar va oziq-ovqat — Gulqand.',
    products: [
      { slug: 'classic', name: 'Klassik Gulqand' },
      { slug: 'premium', name: 'Premium Gulqand' },
      { slug: 'royal', name: 'Qirollik Gulqandi' },
    ],
  },
  ru: {
    title: 'Gulqand – сладости, фрукты и продукты с доставкой в Ташкенте',
    description:
      'Купить свежие сладости, фрукты и продукты онлайн в Ташкенте. Быстрая доставка и выгодные цены. Традиционный гулканда и местные товары от Gulqand.',
    keywords:
      'купить сладости Ташкент, доставка фруктов Ташкент, гулканда, продукты на дом, интернет магазин Узбекистан, доставка еды Ташкент',
    ogTitle: 'Gulqand – сладости и фрукты | Доставка в Ташкенте',
    ogDescription:
      'Свежие сладости, фрукты и продукты с доставкой по Ташкенту.',
    products: [
      { slug: 'classic', name: 'Классический гулканд' },
      { slug: 'premium', name: 'Премиум гулканд' },
      { slug: 'royal', name: 'Королевский гулканд' },
    ],
  },
  en: {
    title: 'Gulqand – Fresh sweets, fruit & grocery delivery in Tashkent',
    description:
      'Buy fresh sweets, fruit, and groceries online in Tashkent, Uzbekistan. Fast delivery and fair prices. Traditional rose gulqand and local products at Gulqand.',
    keywords:
      'buy sweets online Tashkent, grocery delivery Uzbekistan, gulqand, fruit delivery Tashkent, Uzbekistan online store, halal sweets',
    ogTitle: 'Gulqand – Sweets & fruit delivery | Tashkent',
    ogDescription:
      'Order sweets, fresh fruit, and groceries with delivery across Tashkent.',
    products: [
      { slug: 'classic', name: 'Classic Gulqand' },
      { slug: 'premium', name: 'Premium Gulqand' },
      { slug: 'royal', name: 'Royal Gulqand' },
    ],
  },
};

export function getSeoForLang(lang) {
  return SEO_BY_LANG[lang] || SEO_BY_LANG.en;
}
