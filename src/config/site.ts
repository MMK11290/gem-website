export const siteConfig = {
  name: "سنگ‌های عقیق کابلی",
  phone: "09359747744",
  whatsapp: "https://wa.me/989359747744",
  instagram: "https://instagram.com/",
  email: "www.mahdikaboli@gmail.com",
  address: "نیشابور، ایران",
  hours: {
    weekdays: "۹:۰۰ تا ۱۸:۰۰",
    friday: "تعطیل",
  },
} as const;

export const getPhone = (): string => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('sitePhone');
    if (saved && saved.trim().length > 0) return saved;
  }
  return siteConfig.phone;
};
