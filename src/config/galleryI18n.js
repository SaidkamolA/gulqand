/**
 * Gallery slide copy + image SEO (alt) in uz / ru / en — file naming convention: gulqand-gallery-*.jpg
 */

export const GALLERY_SLIDES_I18N = {
  uz: [
    {
      title: 'Anʼanaviy taʼm',
      description: 'Sharq taʼmi va zamonaviy sifat',
      alt: 'Gulqand galereyasi — anʼanaviy shirinliklar, Toshkent',
    },
    {
      title: 'Premium sifat',
      description: 'Faqat tabiiy ingredientlar',
      alt: 'Gulqand premium shirinliklari — gulqand-sweets',
    },
    {
      title: 'Maxsus retsept',
      description: 'Avloddan-avlodga uzatilgan retsept',
      alt: 'Gulqand maxsus retsept — atirgul bargi murabbosi',
    },
    {
      title: 'Sofistikatsiya',
      description: 'Maxsus tadbirlar uchun ideal',
      alt: 'Gulqand sofistikatsiya mahsulotlari',
    },
    {
      title: 'Sharq toʻplami',
      description: 'Sharq shirinliklari olamiga sayohat',
      alt: 'Gulqand sharq kolleksiyasi — gulqand-sweets',
    },
    {
      title: 'Klassik liniya',
      description: 'Hech qachon eskirilmaydigan taʼm',
      alt: 'Gulqand klassik gulqand — gulqand-sweets-classic',
    },
    {
      title: 'Premium seriya',
      description: 'Haqiqiy ustalik uchun',
      alt: 'Gulqand premium seriya — gulqand-sweets-premium',
    },
    {
      title: 'Qirollik liniyasi',
      description: 'Qirollik dasturxoniga munosib',
      alt: 'Gulqand qirollik liniyasi — gulqand-sweets-royal',
    },
    {
      title: 'Anʼanalar haqida video',
      description: 'Sharq anʼanalari muhitiga shoʼngʻing',
      alt: 'Gulqand — anʼanalar va ishlab chiqarish videosi',
    },
  ],
  ru: [
    {
      title: 'Традиционный вкус',
      description: 'Изысканное сочетание восточных специй',
      alt: 'Галерея Gulqand — традиционные сладости Ташкент',
    },
    {
      title: 'Премиум качество',
      description: 'Только натуральные ингредиенты',
      alt: 'Премиум сладости Gulqand — gulqand-sweets',
    },
    {
      title: 'Особый рецепт',
      description: 'Секретная рецептура поколений',
      alt: 'Особый рецепт гулканда — лепестки роз',
    },
    {
      title: 'Роскошная подача',
      description: 'Идеально для особых случаев',
      alt: 'Премиальная упаковка Gulqand',
    },
    {
      title: 'Восточная коллекция',
      description: 'Мир восточных сладостей',
      alt: 'Восточная коллекция сладостей — gulqand-sweets',
    },
    {
      title: 'Классический вариант',
      description: 'Традиционный вкус',
      alt: 'Классический гулканд Gulqand — gulqand-sweets-classic',
    },
    {
      title: 'Премиум серия',
      description: 'Для истинных ценителей',
      alt: 'Премиум серия Gulqand — gulqand-sweets-premium',
    },
    {
      title: 'Королевская линейка',
      description: 'Достойно королевского стола',
      alt: 'Королевская линейка — gulqand-sweets-royal',
    },
    {
      title: 'Видео о традициях',
      description: 'Атмосфера восточных традиций',
      alt: 'Видео о производстве и традициях Gulqand',
    },
  ],
  en: [
    {
      title: 'Traditional taste',
      description: 'Eastern spices and modern quality',
      alt: 'Gulqand gallery — traditional sweets Tashkent',
    },
    {
      title: 'Premium quality',
      description: 'Only natural ingredients',
      alt: 'Gulqand premium sweets — gulqand-sweets',
    },
    {
      title: 'Signature recipe',
      description: 'Generations-old secret recipe',
      alt: 'Gulqand signature rose petal preserve — gulqand-sweets',
    },
    {
      title: 'Elegant presentation',
      description: 'Perfect for special occasions',
      alt: 'Gulqand luxury packaging — gulqand-sweets',
    },
    {
      title: 'Eastern collection',
      description: 'Explore eastern confectionery',
      alt: 'Gulqand eastern sweets collection — gulqand-sweets',
    },
    {
      title: 'Classic line',
      description: 'A taste that never goes out of style',
      alt: 'Gulqand classic gulqand — gulqand-sweets-classic',
    },
    {
      title: 'Premium series',
      description: 'For true connoisseurs',
      alt: 'Gulqand premium series — gulqand-sweets-premium',
    },
    {
      title: 'Royal line',
      description: 'Fit for a royal table',
      alt: 'Gulqand royal line — gulqand-sweets-royal',
    },
    {
      title: 'Traditions video',
      description: 'Eastern traditions atmosphere',
      alt: 'Gulqand production and traditions video',
    },
  ],
};

export function getGallerySlides(lang) {
  return GALLERY_SLIDES_I18N[lang] || GALLERY_SLIDES_I18N.en;
}
