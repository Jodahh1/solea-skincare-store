import type { Category, Product } from '@/types';

export const categories: Category[] = [
  {
    id: 'cleansing',
    title: 'Очищение',
    description: 'Мягкие гели и пенки для деликатного очищения кожи.',
    image: 'https://images.pexels.com/photos/6167867/pexels-photo-6167867.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 'moisture',
    title: 'Увлажнение',
    description: 'Кремы, которые сохраняют мягкость и комфорт весь день.',
    image: 'https://images.pexels.com/photos/18350286/pexels-photo-18350286.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 'serums',
    title: 'Сыворотки',
    description: 'Концентрированные формулы для естественного сияния кожи.',
    image: 'https://images.pexels.com/photos/8054400/pexels-photo-8054400.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 'sun',
    title: 'Солнцезащита',
    description: 'Лёгкие средства с SPF для ежедневной защиты кожи.',
    image: 'https://images.pexels.com/photos/16378488/pexels-photo-16378488.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
];

export const categoryTitle: Record<string, string> = {
  cleansing: 'Очищение',
  moisture: 'Увлажнение',
  serums: 'Сыворотки',
  sun: 'Солнцезащита',
};

export const products: Product[] = [
  {
    id: '1',
    slug: 'cleansing-gel',
    name: 'Очищающий гель для лица',
    price: 1490,
    category: 'cleansing',
    shortDescription: 'Деликатный гель для умывания, очищает кожу, не нарушая её барьер.',
    description:
      'Лёгкий гель для ежедневного умывания. Мягко очищает от загрязнений и лишнего себума, не пересушивая кожу. Подходит для утреннего и вечернего ритуала. Образует нежную пену, оставляет ощущение свежести и комфорта.',
    image: 'https://images.pexels.com/photos/16378446/pexels-photo-16378446.jpeg?auto=compress&cs=tinysrgb&w=900',
    imageAlt: 'Минималистичный флакон очищающего геля для лица',
    specs: [
      { label: 'Объём', value: '150 мл' },
      { label: 'Тип кожи', value: 'Все типы' },
      { label: 'Применение', value: 'Утро и вечер' },
      { label: 'Текстура', value: 'Лёгкий гель' },
    ],
  },
  {
    id: '2',
    slug: 'hydrating-serum',
    name: 'Увлажняющая сыворотка',
    price: 2190,
    category: 'serums',
    shortDescription: 'Сыворотка с гиалуроном для глубокого увлажнения и сияния.',
    description:
      'Концентрированная сыворотка для интенсивного увлажнения. Быстро впитывается, не оставляя липкости, и помогает сохранить мягкость кожи в течение дня. Используйте под крем для усиления эффекта.',
    image: 'https://images.pexels.com/photos/8101534/pexels-photo-8101534.jpeg?auto=compress&cs=tinysrgb&w=900',
    imageAlt: 'Флакон сыворотки с пипеткой на светлом фоне',
    specs: [
      { label: 'Объём', value: '30 мл' },
      { label: 'Тип кожи', value: 'Все типы' },
      { label: 'Применение', value: 'Утро и вечер' },
      { label: 'Текстура', value: 'Лёгкая, быстро впитывается' },
    ],
  },
  {
    id: '3',
    slug: 'face-cream',
    name: 'Крем для лица',
    price: 1890,
    category: 'moisture',
    shortDescription: 'Нежный крем для ежедневного увлажнения и комфорта кожи.',
    description:
      'Базовый крем для ежедневного ухода за кожей лица. Обеспечивает комфорт и увлажнение, легко распределяется и впитывается. Подходит как дневной и ночной уход. Идеален в паре с увлажняющей сывороткой.',
    image: 'https://images.pexels.com/photos/18350286/pexels-photo-18350286.jpeg?auto=compress&cs=tinysrgb&w=900',
    imageAlt: 'Белая банка крема для лица на мраморной поверхности',
    specs: [
      { label: 'Объём', value: '50 мл' },
      { label: 'Тип кожи', value: 'Нормальная и сухая' },
      { label: 'Применение', value: 'Утро и вечер' },
      { label: 'Текстура', value: 'Нежный крем' },
    ],
  },
  {
    id: '4',
    slug: 'spf-50-cream',
    name: 'Солнцезащитный крем SPF 50',
    price: 1690,
    category: 'sun',
    shortDescription: 'Лёгкий крем с SPF 50 для ежедневной защиты от солнца.',
    description:
      'Солнцезащитный крем с высоким фактором защиты. Невесомая текстура, не оставляет белых следов и ощущения плёнки. Подходит для ежедневного использования в городе и на отдыхе как финальный этап ухода.',
    image: 'https://images.pexels.com/photos/16378488/pexels-photo-16378488.jpeg?auto=compress&cs=tinysrgb&w=900',
    imageAlt: 'Флакон солнцезащитного крема SPF 50 на песке',
    specs: [
      { label: 'Объём', value: '50 мл' },
      { label: 'Тип кожи', value: 'Все типы' },
      { label: 'Применение', value: 'Утро, за 15 мин до выхода' },
      { label: 'Текстура', value: 'Лёгкий, без белых следов' },
    ],
  },
  {
    id: '5',
    slug: 'skincare-set',
    name: 'Набор для ухода',
    price: 4490,
    category: 'moisture',
    shortDescription: 'Полный ритуал: очищение, сыворотка и крем в одном наборе.',
    description:
      'Демонстрационный набор для ежедневного ухода, в который входят очищающий гель, увлажняющая сыворотка и крем для лица. Удобное решение, чтобы попробовать сразу несколько этапов ритуала SOLÉA. Идеальный подарок себе или близкому человеку.',
    image: 'https://images.pexels.com/photos/7691161/pexels-photo-7691161.jpeg?auto=compress&cs=tinysrgb&w=900',
    imageAlt: 'Набор косметических средств для ухода в белых флаконах',
    specs: [
      { label: 'Состав набора', value: 'Гель, сыворотка, крем' },
      { label: 'Тип кожи', value: 'Все типы' },
      { label: 'Применение', value: 'Ежедневный ритуал' },
      { label: 'Упаковка', value: 'Подарочная коробка' },
    ],
  },
  {
    id: '6',
    slug: 'balancing-toner',
    name: 'Тоник балансирующий',
    price: 1290,
    category: 'cleansing',
    shortDescription: 'Освежающий тоник, который подготавливает кожу к уходу.',
    description:
      'Тоник для завершения этапа очищения. Освежает, подготавливает кожу к дальнейшему уходу и придаёт ощущение комфорта. Лёгкая текстура не оставляет липкой плёнки. Используйте после умывания до нанесения сыворотки.',
    image: 'https://images.pexels.com/photos/6847827/pexels-photo-6847827.jpeg?auto=compress&cs=tinysrgb&w=900',
    imageAlt: 'Белый флакон тоника с деревянной крышкой',
    specs: [
      { label: 'Объём', value: '200 мл' },
      { label: 'Тип кожи', value: 'Все типы' },
      { label: 'Применение', value: 'После умывания' },
      { label: 'Текстура', value: 'Освежающая жидкость' },
    ],
  },
  {
    id: '7',
    slug: 'glow-oil',
    name: 'Масло для лица «Сияние»',
    price: 2490,
    category: 'serums',
    shortDescription: 'Питательное масло для мягкости и естественного сияния кожи.',
    description:
      'Невесомое масло для лица, которое помогает сохранить мягкость и придаёт коже ухоженный вид. Несколько капель достаточно для вечернего ритуала. Подходит как самостоятельный уход или добавка в крем для дополнительного питания.',
    image: 'https://images.pexels.com/photos/7796979/pexels-photo-7796979.jpeg?auto=compress&cs=tinysrgb&w=900',
    imageAlt: 'Янтарный стеклянный флакон с пипеткой на бежевом фоне',
    specs: [
      { label: 'Объём', value: '30 мл' },
      { label: 'Тип кожи', value: 'Сухая и нормальная' },
      { label: 'Применение', value: 'Вечер' },
      { label: 'Текстура', value: 'Невесомое масло' },
    ],
  },
  {
    id: '8',
    slug: 'night-mask',
    name: 'Ночная маска для лица',
    price: 2390,
    category: 'moisture',
    shortDescription: 'Маска для ночного ухода, дарит коже отдохнувший вид.',
    description:
      'Ночная маска, которая работает, пока вы отдыхаете. Помогает коже выглядеть мягкой и ухоженной к утру. Наносите тонким слоем как финальный этап вечернего ритуала за 15 минут до сна.',
    image: 'https://images.pexels.com/photos/8049841/pexels-photo-8049841.jpeg?auto=compress&cs=tinysrgb&w=900',
    imageAlt: 'Минималистичные тюбики косметических средств на фактурной поверхности',
    specs: [
      { label: 'Объём', value: '75 мл' },
      { label: 'Тип кожи', value: 'Все типы' },
      { label: 'Применение', value: 'Вечер, 2–3 раза в неделю' },
      { label: 'Текстура', value: 'Лёгкий гель' },
    ],
  },
];

export function formatPrice(value: number): string {
  return new Intl.NumberFormat('ru-RU').format(value) + ' ₽';
}
