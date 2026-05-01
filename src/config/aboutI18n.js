/** About section image alt text (SEO) — descriptive names gulqand-about-*.jpg */
export const ABOUT_IMAGE_ALTS = {
  uz: {
    one: 'Gulqand haqida — anʼanaviy ishlab chiqarish, Toshkent',
    two: 'Gulqand sifat — tabiiy ingredientlar va retsept',
  },
  ru: {
    one: 'О Gulqand — традиционное производство, Ташкент',
    two: 'Качество Gulqand — натуральные ингредиенты',
  },
  en: {
    one: 'About Gulqand — traditional production, Tashkent',
    two: 'Gulqand quality — natural ingredients and recipe',
  },
};

export function getAboutAlts(lang) {
  return ABOUT_IMAGE_ALTS[lang] || ABOUT_IMAGE_ALTS.en;
}
