// Convert western digits to Persian numerals
export function toPersianDigits(input: string | number): string {
  const map = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']
  return String(input).replace(/[0-9]/g, (d) => map[Number(d)])
}

export const TELEGRAM_URL = 'https://t.me/tiamatjourneys'
export const INSTAGRAM_URL = 'https://instagram.com/tiamatjourneys'

export type ExperienceCategory = 'سفرها' | 'کارگاه نجوم' | 'یوگا و تنفس' | 'رصد شب'

export type Experience = {
  id: string
  title: string
  category: ExperienceCategory
  date: string
  location: string
  duration: string
  capacity: string
  description: string
  level: string
}

export const experiences: Experience[] = [
  {
    id: 'night-yoga',
    title: 'شب رصد و یوگای آرامش',
    category: 'یوگا و تنفس',
    date: '۲۲ خرداد ۱۴۰۴',
    location: 'کویر مرنجاب',
    duration: 'یک شب',
    capacity: '۱۸ نفر',
    description:
      'شبی برای آرام‌شدن بدن با یوگای ملایم و سپس تماشای آسمان پرستاره به دور از نور شهر.',
    level: 'مبتدی',
  },
  {
    id: 'astro-basics',
    title: 'کارگاه نجوم مقدماتی: خواندن آسمان',
    category: 'کارگاه نجوم',
    date: '۵ تیر ۱۴۰۴',
    location: 'رصدگاه دماوند',
    duration: 'نیم‌روز',
    capacity: '۲۵ نفر',
    description:
      'یاد می‌گیریم چطور صورت‌های فلکی، ماه و سیارات را پیدا کنیم و آسمان شب را بخوانیم.',
    level: 'مبتدی',
  },
  {
    id: 'dark-sky-breath',
    title: 'سفر آسمان تاریک و تنفس',
    category: 'سفرها',
    date: '۱۹ تیر ۱۴۰۴',
    location: 'ارتفاعات طالقان',
    duration: 'آخرهفته',
    capacity: '۱۵ نفر',
    description:
      'دو روز حرکت آهسته در طبیعت، تمرین تنفس آگاهانه و رصد آسمانِ کم‌نور با راهنمایی علمی.',
    level: 'متوسط',
  },
  {
    id: 'astrophotography',
    title: 'کارگاه عکاسی ساده از آسمان شب',
    category: 'رصد شب',
    date: '۲ مرداد ۱۴۰۴',
    location: 'کویر مصر',
    duration: 'یک شب',
    capacity: '۱۲ نفر',
    description:
      'با هر دوربینی که داری یاد می‌گیری از ستاره‌ها و راه شیری عکس‌های ساده و زیبا بگیری.',
    level: 'مبتدی',
  },
]

export const filters = [
  'همه',
  'سفرها',
  'کارگاه نجوم',
  'یوگا و تنفس',
  'رصد شب',
] as const

export const offerings = [
  {
    icon: 'Telescope',
    title: 'نجوم برای همه',
    description: 'آشنایی ساده و قابل‌فهم با ماه، سیارات، صورت‌های فلکی و مسیر آسمان.',
  },
  {
    icon: 'Stars',
    title: 'رصد آسمان شب',
    description:
      'تماشای اجرام آسمانی با چشم، دوربین دوچشمی یا تلسکوپ در مکان‌های کم‌نور.',
  },
  {
    icon: 'Wind',
    title: 'یوگا و تنفس',
    description: 'تمرین‌های آرام برای حضور در بدن، تنظیم تنفس و آماده شدن برای سکوت شب.',
  },
  {
    icon: 'Compass',
    title: 'سفر آگاهانه',
    description:
      'حرکت آهسته در طبیعت، گفت‌وگو، مشاهده، و بازگشت به ارتباط با زمین و آسمان.',
  },
] as const

export const journeySteps = [
  {
    icon: 'MapPin',
    title: 'رسیدن و آشنا شدن',
    description: 'در مکان جمع می‌شویم، با هم و با محیط آشنا می‌شویم و آرام می‌گیریم.',
  },
  {
    icon: 'Wind',
    title: 'زمین‌گیری، تنفس و حرکت آرام',
    description: 'با یوگای ملایم و تمرین تنفس، بدن و ذهن را برای شب آماده می‌کنیم.',
  },
  {
    icon: 'Moon',
    title: 'آموزش ساده آسمان شب',
    description: 'یاد می‌گیریم آسمان را بخوانیم؛ ماه، سیارات و صورت‌های فلکی.',
  },
  {
    icon: 'Telescope',
    title: 'رصد و داستان‌های آسمان',
    description: 'با تلسکوپ و چشم رصد می‌کنیم و قصه‌های آسمان را می‌شنویم.',
  },
  {
    icon: 'Heart',
    title: 'سکوت، چای، گفت‌وگو و جمع‌بندی',
    description: 'کنار هم چای می‌نوشیم، در سکوت می‌نشینیم و تجربه را جمع می‌کنیم.',
  },
] as const

export const guides = [
  {
    name: 'راهنمای نجوم',
    role: 'آموزش و رصد آسمان شب',
    image: '/images/guide-astronomy.png',
    bio: 'سال‌هاست آسمان شب را رصد می‌کند و عاشق ساده‌کردن مفاهیم نجوم برای تازه‌واردهاست.',
    tags: ['مبتدی‌پسند', 'علمی'],
  },
  {
    name: 'مربی یوگا',
    role: 'یوگا، تنفس و حضور',
    image: '/images/guide-yoga.png',
    bio: 'تمرین‌های آرام و ایمن را برای همهٔ بدن‌ها طراحی می‌کند تا حضور در لحظه عمیق‌تر شود.',
    tags: ['آرام', 'تجربی'],
  },
  {
    name: 'راهنمای سفر و طبیعت',
    role: 'مسیر، ایمنی و طبیعت',
    image: '/images/guide-nature.png',
    bio: 'مسیرها و مکان‌های کم‌نور را می‌شناسد و سفر آرام و امن را ممکن می‌کند.',
    tags: ['تجربی', 'آرام'],
  },
] as const

export const gallery = [
  { src: '/images/gallery-stars.png', caption: 'آسمان پرستاره، دور از نور شهر' },
  { src: '/images/gallery-telescope.png', caption: 'رصد با تلسکوپ' },
  { src: '/images/gallery-yoga.png', caption: 'یوگا در دل طبیعت' },
  { src: '/images/gallery-mountain.png', caption: 'شب کویر و کوهستان' },
  { src: '/images/gallery-campfire.png', caption: 'چای و گفت‌وگو کنار آتش' },
  { src: '/images/gallery-group.png', caption: 'تماشای آسمان در جمع' },
] as const

export const testimonials = [
  {
    name: 'نگار',
    text: 'اولین بار بود با تلسکوپ ماه را می‌دیدم. آرامش آن شب و سکوت بعد از رصد را هیچ‌وقت فراموش نمی‌کنم.',
    role: 'همراه سفر آسمان تاریک',
  },
  {
    name: 'سامان',
    text: 'فکر می‌کردم نجوم پیچیده است، ولی همه‌چیز خیلی ساده و دوست‌داشتنی توضیح داده شد. یوگای قبل از رصد هم عالی بود.',
    role: 'همراه کارگاه نجوم',
  },
  {
    name: 'مریم',
    text: 'ترکیب تنفس، طبیعت و آسمان واقعاً حالم را خوب کرد. با یک حس تازه و آرام به شهر برگشتم.',
    role: 'همراه شب رصد و یوگا',
  },
] as const

export const practicalNotes = [
  {
    question: 'برای چه کسانی مناسب است؟',
    answer:
      'برای همه؛ از کسانی که تا حالا آسمان را با تلسکوپ ندیده‌اند تا علاقه‌مندان به طبیعت و آرامش. نیازی به پیش‌زمینه نیست.',
  },
  {
    question: 'چه چیزهایی همراه بیاوریم؟',
    answer:
      'لباس گرم، کفش راحت، قمقمه آب، زیرانداز و در صورت تمایل دوربین دوچشمی. بقیه چیزها را ما فراهم می‌کنیم.',
  },
  {
    question: 'اگر هوا ابری باشد چه می‌شود؟',
    answer:
      'برنامه را با وضعیت آسمان تطبیق می‌دهیم؛ یوگا، تنفس، آموزش و گفت‌وگو ادامه دارد و در صورت نیاز زمان رصد جابه‌جا می‌شود.',
  },
  {
    question: 'آیا نیاز به تجربه قبلی در نجوم یا یوگا داریم؟',
    answer: 'خیر. همه‌چیز از پایه و با ریتمی آرام و مبتدی‌پسند پیش می‌رود.',
  },
  {
    question: 'سطح سختی سفرها چگونه است؟',
    answer:
      'بیشتر برنامه‌ها آرام و کم‌فشارند. سطح هر برنامه روی کارت آن مشخص شده تا با خیال راحت انتخاب کنی.',
  },
] as const

export const faqs = [
  {
    question: 'آیا برنامه‌ها برای مبتدی‌ها مناسب است؟',
    answer: 'بله، تمام برنامه‌ها طوری طراحی شده‌اند که برای تازه‌واردها ساده و دلپذیر باشند.',
  },
  {
    question: 'آیا یوگا برای همه قابل انجام است؟',
    answer: 'بله، تمرین‌ها ملایم و قابل تنظیم با توان هر فرد هستند و نیازی به انعطاف خاصی ندارند.',
  },
  {
    question: 'آیا تجهیزات رصدی فراهم است؟',
    answer: 'بله، تلسکوپ و دوربین دوچشمی توسط راهنماها فراهم می‌شود؛ آوردن وسایل شخصی هم آزاد است.',
  },
  {
    question: 'آیا برنامه‌ها علمی هستند یا طالع‌بینی؟',
    answer:
      'تمرکز تیامات بر نجوم، مشاهده آسمان، طبیعت، یوگا و تجربه آگاهانه است؛ نه طالع‌بینی.',
  },
  {
    question: 'در صورت تغییر آب‌وهوا چه می‌شود؟',
    answer:
      'برنامه انعطاف‌پذیر است؛ بخش‌های دیگر اجرا می‌شوند و در صورت نیاز زمان یا مکان رصد تغییر می‌کند.',
  },
  {
    question: 'ثبت‌نام چگونه انجام می‌شود؟',
    answer: 'از طریق کانال تلگرام با ما در ارتباط باش؛ جزئیات و نحوه ثبت‌نام را آنجا اعلام می‌کنیم.',
  },
] as const
