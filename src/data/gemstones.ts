export type GemstoneType =
  | "کوارتز"
  | "آمتیست"
  | "سیترین"
  | "عقیق"
  | "تورمالین"
  | "دیگر";

export type Gemstone = {
  id: string;
  name: string;
  description: string;
  type: GemstoneType;
  imageUrl: string;
  price?: number;
  featured?: boolean;
};

export const GEM_TYPES: GemstoneType[] = [
  "کوارتز",
  "آمتیست",
  "سیترین",
  "عقیق",
  "تورمالین",
  "دیگر",
];

export const initialGemstones: Gemstone[] = [
  {
    id: "g1",
    name: "کوارتز شفاف درجه یک",
    description: "تکه سنگ کوارتز خام با شفافیت بالا و لبه‌های طبیعی. مناسب برای کلکسیون و تراش.",
    type: "کوارتز",
    imageUrl:
      "images/1.webp",
    price: 850000,
    featured: true,
  },
  {
    id: "g2",
    name: "آمتیست طبیعی",
    description: "سنگ آمتیست خام با رنگ بنفش عمیق و ساختار کریستالی زیبا.",
    type: "آمتیست",
    imageUrl:
      "images/2.webp",
    price: 1250000,
    featured: true,
  },
  {
    id: "g3",
    name: "سیترین طلایی",
    description: "سیترین خام با ته‌رنگ طلایی گرم و انرژی‌بخش.",
    type: "سیترین",
    imageUrl:
      "images/3.webp",
    featured: true,
  },
  {
    id: "g4",
    name: "عقیق خزه‌ای",
    description: "عقیق خام با الگوهای طبیعی و چشم‌نواز، مناسب حکاکی و جواهرسازی.",
    type: "عقیق",
    imageUrl:
      "images/4.webp",
    featured: true, // این سنگ را به بخش منتخب اضافه می‌کند
  },
  {
    id: "g5",
    name: "تورمالین چندرنگ",
    description: "سنگ تورمالین خام با طیف رنگی متنوع و ساختار سوزنی.",
    type: "تورمالین",
    imageUrl:
      "images/5.webp",
    price: 2100000,
  },
  {
    id: "g6",
    name: "کالکشن سنگ‌های خام",
    description: "مجموعه‌ای از سنگ‌های خام منتخب برای شروع کلکسیون شخصی.",
    type: "دیگر",
    imageUrl:
      "images/6.webp",
  },
    {
    id: "g7",
    name: "کوارتز شفاف درجه یک",
    description: "تکه سنگ کوارتز خام با شفافیت بالا و لبه‌های طبیعی. مناسب برای کلکسیون و تراش.",
    type: "کوارتز",
    imageUrl:
      "images/7.webp",
    price: 850000,
    featured: true,
  },
  {
    id: "g8",
    name: "آمتیست طبیعی",
    description: "سنگ آمتیست خام با رنگ بنفش عمیق و ساختار کریستالی زیبا.",
    type: "آمتیست",
    imageUrl:
      "images/8.webp",
    price: 1250000,
    featured: true,
  },
  {
    id: "g9",
    name: "سیترین طلایی",
    description: "سیترین خام با ته‌رنگ طلایی گرم و انرژی‌بخش.",
    type: "سیترین",
    imageUrl:
      "images/9.webp",
    featured: true,
  },
  {
    id: "g10",
    name: "عقیق خزه‌ای",
    description: "عقیق خام با الگوهای طبیعی و چشم‌نواز، مناسب حکاکی و جواهرسازی.",
    type: "عقیق",
    imageUrl:
      "images/10.webp",
  },
  {
    id: "g11",
    name: "تورمالین چندرنگ",
    description: "سنگ تورمالین خام با طیف رنگی متنوع و ساختار سوزنی.",
    type: "تورمالین",
    imageUrl:
      "images/11.webp",
    price: 2100000,
  },
  {
    id: "g12",
    name: "کالکشن سنگ‌های خام",
    description: "مجموعه‌ای از سنگ‌های خام منتخب برای شروع کلکسیون شخصی.",
    type: "دیگر",
    imageUrl:
      "images/12.webp",
  },
    {
    id: "g13",
    name: "کوارتز شفاف درجه یک",
    description: "تکه سنگ کوارتز خام با شفافیت بالا و لبه‌های طبیعی. مناسب برای کلکسیون و تراش.",
    type: "کوارتز",
    imageUrl:
      "images/13.webp",
    price: 850000,
    featured: true,
  },
  {
    id: "g14",
    name: "آمتیست طبیعی",
    description: "سنگ آمتیست خام با رنگ بنفش عمیق و ساختار کریستالی زیبا.",
    type: "آمتیست",
    imageUrl:
      "images/14.webp",
    price: 1250000,
    featured: true,
  },
  {
    id: "g15",
    name: "سیترین طلایی",
    description: "سیترین خام با ته‌رنگ طلایی گرم و انرژی‌بخش.",
    type: "سیترین",
    imageUrl:
      "images/15.webp",
    featured: true,
  },
  {
    id: "g16",
    name: "عقیق خزه‌ای",
    description: "عقیق خام با الگوهای طبیعی و چشم‌نواز، مناسب حکاکی و جواهرسازی.",
    type: "عقیق",
    imageUrl:
      "images/16.webp",
  },
  {
    id: "g17",
    name: "تورمالین چندرنگ",
    description: "سنگ تورمالین خام با طیف رنگی متنوع و ساختار سوزنی.",
    type: "تورمالین",
    imageUrl:
      "images/17.webp",
    price: 2100000,
  },
  {
    id: "g18",
    name: "کالکشن سنگ‌های خام",
    description: "مجموعه‌ای از سنگ‌های خام منتخب برای شروع کلکسیون شخصی.",
    type: "دیگر",
    imageUrl:
      "images/18.webp",
  },
    {
    id: "g19",
    name: "کوارتز شفاف درجه یک",
    description: "تکه سنگ کوارتز خام با شفافیت بالا و لبه‌های طبیعی. مناسب برای کلکسیون و تراش.",
    type: "کوارتز",
    imageUrl:
      "images/19.webp",
    price: 850000,
    featured: true,
  },
  {
    id: "g20",
    name: "آمتیست طبیعی",
    description: "سنگ آمتیست خام با رنگ بنفش عمیق و ساختار کریستالی زیبا.",
    type: "آمتیست",
    imageUrl:
      "images/20.webp",
    price: 1250000,
    featured: true,
  },
  {
    id: "g21",
    name: "سیترین طلایی",
    description: "سیترین خام با ته‌رنگ طلایی گرم و انرژی‌بخش.",
    type: "سیترین",
    imageUrl:
      "images/21.webp",
    featured: true,
  },
  {
    id: "g22",
    name: "عقیق خزه‌ای",
    description: "عقیق خام با الگوهای طبیعی و چشم‌نواز، مناسب حکاکی و جواهرسازی.",
    type: "عقیق",
    imageUrl:
      "images/22.webp",
  },
  {
    id: "g23",
    name: "تورمالین چندرنگ",
    description: "سنگ تورمالین خام با طیف رنگی متنوع و ساختار سوزنی.",
    type: "تورمالین",
    imageUrl:
      "images/23.webp",
    price: 2100000,
  },
  {
    id: "g24",
    name: "کالکشن سنگ‌های خام",
    description: "مجموعه‌ای از سنگ‌های خام منتخب برای شروع کلکسیون شخصی.",
    type: "دیگر",
    imageUrl:
      "images/24.webp",
  },
    {
    id: "g25",
    name: "کوارتز شفاف درجه یک",
    description: "تکه سنگ کوارتز خام با شفافیت بالا و لبه‌های طبیعی. مناسب برای کلکسیون و تراش.",
    type: "کوارتز",
    imageUrl:
      "images/25.webp",
    price: 850000,
    featured: true,
  },
  {
    id: "g26",
    name: "آمتیست طبیعی",
    description: "سنگ آمتیست خام با رنگ بنفش عمیق و ساختار کریستالی زیبا.",
    type: "آمتیست",
    imageUrl:
      "images/26.webp",
    price: 1250000,
    featured: true,
  },
  {
    id: "g27",
    name: "سیترین طلایی",
    description: "سیترین خام با ته‌رنگ طلایی گرم و انرژی‌بخش.",
    type: "سیترین",
    imageUrl:
      "images/27.webp",
    featured: true,
  },
  {
    id: "g28",
    name: "عقیق خزه‌ای",
    description: "عقیق خام با الگوهای طبیعی و چشم‌نواز، مناسب حکاکی و جواهرسازی.",
    type: "عقیق",
    imageUrl:
      "images/28.webp",
  },
  {
    id: "g29",
    name: "تورمالین چندرنگ",
    description: "سنگ تورمالین خام با طیف رنگی متنوع و ساختار سوزنی.",
    type: "تورمالین",
    imageUrl:
      "images/29.webp",
    price: 2100000,
  },
  {
    id: "g30",
    name: "کالکشن سنگ‌های خام",
    description: "مجموعه‌ای از سنگ‌های خام منتخب برای شروع کلکسیون شخصی.",
    type: "دیگر",
    imageUrl:
      "images/30.webp",
  },
    {
    id: "g31",
    name: "کوارتز شفاف درجه یک",
    description: "تکه سنگ کوارتز خام با شفافیت بالا و لبه‌های طبیعی. مناسب برای کلکسیون و تراش.",
    type: "کوارتز",
    imageUrl:
      "images/31.webp",
    price: 850000,
    featured: true,
  },
  {
    id: "g32",
    name: "آمتیست طبیعی",
    description: "سنگ آمتیست خام با رنگ بنفش عمیق و ساختار کریستالی زیبا.",
    type: "آمتیست",
    imageUrl:
      "images/32.webp",
    price: 1250000,
    featured: true,
  },
  {
    id: "g33",
    name: "سیترین طلایی",
    description: "سیترین خام با ته‌رنگ طلایی گرم و انرژی‌بخش.",
    type: "سیترین",
    imageUrl:
      "images/33.webp",
    featured: true,
  },
  {
    id: "g34",
    name: "عقیق خزه‌ای",
    description: "عقیق خام با الگوهای طبیعی و چشم‌نواز، مناسب حکاکی و جواهرسازی.",
    type: "عقیق",
    imageUrl:
      "images/34.webp",
  },
  {
    id: "g35",
    name: "تورمالین چندرنگ",
    description: "سنگ تورمالین خام با طیف رنگی متنوع و ساختار سوزنی.",
    type: "تورمالین",
    imageUrl:
      "images/35.webp",
    price: 2100000,
  },
  {
    id: "g36",
    name: "کالکشن سنگ‌های خام",
    description: "مجموعه‌ای از سنگ‌های خام منتخب برای شروع کلکسیون شخصی.",
    type: "دیگر",
    imageUrl:
      "images/36.webp",
  },
    {
    id: "g37",
    name: "کوارتز شفاف درجه یک",
    description: "تکه سنگ کوارتز خام با شفافیت بالا و لبه‌های طبیعی. مناسب برای کلکسیون و تراش.",
    type: "کوارتز",
    imageUrl:
      "images/37.webp",
    price: 850000,
    featured: true,
  },
  {
    id: "g38",
    name: "آمتیست طبیعی",
    description: "سنگ آمتیست خام با رنگ بنفش عمیق و ساختار کریستالی زیبا.",
    type: "آمتیست",
    imageUrl:
      "images/38.webp",
    price: 1250000,
    featured: true,
  },
  {
    id: "g39",
    name: "سیترین طلایی",
    description: "سیترین خام با ته‌رنگ طلایی گرم و انرژی‌بخش.",
    type: "سیترین",
    imageUrl:
      "images/39.webp",
    featured: true,
  },
  {
    id: "g40",
    name: "عقیق خزه‌ای",
    description: "عقیق خام با الگوهای طبیعی و چشم‌نواز، مناسب حکاکی و جواهرسازی.",
    type: "عقیق",
    imageUrl:
      "images/40.webp",
  },
  {
    id: "g41",
    name: "تورمالین چندرنگ",
    description: "سنگ تورمالین خام با طیف رنگی متنوع و ساختار سوزنی.",
    type: "تورمالین",
    imageUrl:
      "images/41.webp",
    price: 2100000,
  },
  {
    id: "g42",
    name: "کالکشن سنگ‌های خام",
    description: "مجموعه‌ای از سنگ‌های خام منتخب برای شروع کلکسیون شخصی.",
    type: "دیگر",
    imageUrl:
      "images/42.webp",
  },
    {
    id: "g43",
    name: "کوارتز شفاف درجه یک",
    description: "تکه سنگ کوارتز خام با شفافیت بالا و لبه‌های طبیعی. مناسب برای کلکسیون و تراش.",
    type: "کوارتز",
    imageUrl:
      "images/43.webp",
    price: 850000,
    featured: true,
  },
  {
    id: "g44",
    name: "آمتیست طبیعی",
    description: "سنگ آمتیست خام با رنگ بنفش عمیق و ساختار کریستالی زیبا.",
    type: "آمتیست",
    imageUrl:
      "images/44.webp",
    price: 1250000,
    featured: true,
  },
  {
    id: "g45",
    name: "سیترین طلایی",
    description: "سیترین خام با ته‌رنگ طلایی گرم و انرژی‌بخش.",
    type: "سیترین",
    imageUrl:
      "images/45.webp",
    featured: true,
  },
  {
    id: "g46",
    name: "عقیق خزه‌ای",
    description: "عقیق خام با الگوهای طبیعی و چشم‌نواز، مناسب حکاکی و جواهرسازی.",
    type: "عقیق",
    imageUrl:
      "images/46.webp",
  },
  {
    id: "g47",
    name: "تورمالین چندرنگ",
    description: "سنگ تورمالین خام با طیف رنگی متنوع و ساختار سوزنی.",
    type: "تورمالین",
    imageUrl:
      "images/47.webp",
    price: 2100000,
  },
  {
    id: "g48",
    name: "کالکشن سنگ‌های خام",
    description: "مجموعه‌ای از سنگ‌های خام منتخب برای شروع کلکسیون شخصی.",
    type: "دیگر",
    imageUrl:
      "images/48.webp",
  },
  {
    id: "g49",
    name: "کالکشن سنگ‌های خام",
    description: "مجموعه‌ای از سنگ‌های خام منتخب برای شروع کلکسیون شخصی.",
    type: "دیگر",
    imageUrl:
      "images/49.webp",
  },
];
