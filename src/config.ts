// Single source of truth for all editable content.

export const site = {
  name: 'Marketing Up Academy',
  whatsappNumber: '201063408129',
  phoneDisplay: '+20 10 63408129',
  facebook: 'https://www.facebook.com/profile.php?id=61584726245983',
  instagram: 'https://www.instagram.com/marketingupacademy/',
  address: '14 شارع محمود صدقي، لوران، الإسكندرية',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent('14 Mahmoud Sedky Loran Alexandria Egypt'),
}

export const wa = (message?: string) =>
  `https://wa.me/${site.whatsappNumber}${message ? `?text=${encodeURIComponent(message)}` : ''}`

export const generalMessage = 'مرحباً، عايز أعرف تفاصيل الكورسات والحجز.'

export const nav = [
  { label: 'الرئيسية', href: '#home' },
  { label: 'عن الأكاديمية', href: '#about' },
  { label: 'الكورسات', href: '#courses' },
  { label: 'مميزاتنا', href: '#why' },
  { label: 'تواصل معنا', href: '#contact' },
]

export const offer = {
  label: 'عرض لفترة محدودة',
  note: 'سعر كل كورس لوحده، مش للكورسات كلها.',
  currency: 'ج.م',
}

export type CourseKind = 'marketing' | 'design' | 'video'

export interface Course {
  id: CourseKind
  name: string // used in the WhatsApp message
  arName: string
  description: string
  topics: string[]
  price: number
  originalPrice: number
}

export const courses: Course[] = [
  {
    id: 'marketing',
    name: 'Digital Marketing',
    arName: 'ديجيتال ماركتنج',
    description:
      'اتعلم إزاي تخطط لحملات تسويقية ناجحة، تفهم جمهورك، وتبني استراتيجية تساعد البراندات تحقق أهدافها.',
    topics: [
      'Marketing Fundamentals',
      'Market & Competitor Research',
      'Content Strategy',
      'Social Media Management',
      'Paid Advertising',
      'Campaign Analytics',
    ],
    price: 3500,
    originalPrice: 5000,
  },
  {
    id: 'design',
    name: 'Graphic Design',
    arName: 'جرافيك ديزاين',
    description: 'حول أفكارك لتصميمات احترافية واتعلم أساسيات التصميم وصناعة المحتوى البصري.',
    topics: [
      'Design Fundamentals',
      'Color Theory & Typography',
      'Visual Composition',
      'Social Media Designs',
      'Advertising Designs',
      'Professional Design Tools',
    ],
    price: 3500,
    originalPrice: 5000,
  },
  {
    id: 'video',
    name: 'Video Editing',
    arName: 'مونتاج',
    description: 'اتعلم صناعة الفيديوهات والمحتوى المرئي بداية من الفكرة وحتى إنتاج فيديو احترافي.',
    topics: [
      'Editing Fundamentals',
      'Cutting & Transitions',
      'Storytelling',
      'Sound Editing',
      'Color Correction',
      'Reels & Short-form Content',
    ],
    price: 3500,
    originalPrice: 5000,
  },
]

export const courseMessage = (c: Course) =>
  `مرحباً، مهتم بالاشتراك في كورس ${c.name}، ممكن أعرف تفاصيل الحجز؟`

export const about = {
  eyebrow: 'عن الأكاديمية',
  title: 'بنساعدك تحول شغفك لمهارة حقيقية',
  body: [
    'في Marketing Up Academy بنساعدك تبني مهارات عملية في التسويق الرقمي، الجرافيك ديزاين والمونتاج، وتفهم إزاي بتشتغل الصناعات الإبداعية والتسويقية على أرض الواقع.',
    'درّبنا عدد كبير من المتعلمين، وهدفنا إنك تخرج بمهارة تقدر تشتغل بيها وتبني بيها مستقبلك.',
  ],
  pillars: ['تعلّم بالتطبيق', 'فهم حقيقي للسوق', 'مهارة تشتغل بيها'],
}

export const why = [
  { icon: 'target', title: 'تعلّم عملي', text: 'بنركز على التطبيق من أول يوم، مش حفظ نظري.' },
  { icon: 'briefcase', title: 'مهارات مطلوبة في السوق', text: 'محتوى مرتبط باللي الشركات والبراندات بتحتاجه فعلاً.' },
  { icon: 'bulb', title: 'تفكير إبداعي', text: 'بنساعدك تطلع بأفكار مختلفة وتحولها لشغل ليه شخصية.' },
  { icon: 'list', title: 'تعلّم منظم', text: 'خطوات واضحة من الأساسيات لحد الشغل الاحترافي.' },
  { icon: 'folder', title: 'خبرة بالمشاريع', text: 'بتتعلم من خلال مشاريع تطبق بيها اللي اتعلمته.' },
]

export const heroes = {
  eyebrow: 'أبطالنا',
  title: 'أبطال الأكاديمية',
  text: 'لحظات حقيقية من قاعات الأكاديمية وتسليم الشهادات في كورسات الديجيتال ماركتنج، الجرافيك ديزاين والمونتاج.',
  photos: [
    { src: '/heroes/dm-1.webp', alt: 'خريجو كورس الديجيتال ماركتنج بشهاداتهم', tag: 'كورس Digital Marketing', size: 'wide' },
    { src: '/heroes/design.webp', alt: 'خريجو كورس الجرافيك ديزاين بشهاداتهم', tag: 'كورس Graphic Design', size: 'wide' },
    { src: '/heroes/academy.webp', alt: 'محاضرة داخل قاعة الأكاديمية', tag: 'داخل قاعة الأكاديمية', size: 'third' },
    { src: '/heroes/dm-2.webp', alt: 'دفعة أخرى من خريجي الديجيتال ماركتنج', tag: 'كورس Digital Marketing', size: 'third' },
    { src: '/heroes/video.webp', alt: 'خريجو كورس المونتاج بشهاداتهم', tag: 'كورس Video Editing', size: 'third' },
  ],
}

export const journey = [
  { title: 'تواصل معانا', text: 'ابعتلنا على واتساب واسأل عن الكورس اللي يناسبك.' },
  { title: 'اختار كورسك', text: 'ديجيتال ماركتنج، جرافيك ديزاين أو مونتاج.' },
  { title: 'اتعلم بالتطبيق', text: 'محتوى منظم ومشاريع تطبق بيها اللي بتتعلمه.' },
  { title: 'ابدأ رحلتك', text: 'اطلع بمهارة وشهادة وابني أول خطواتك في المجال.' },
]

export const faq = [
  {
    q: 'هل الكورسات مناسبة للمبتدئين؟',
    a: 'كل كورس بيبدأ بأساسيات المجال. ولو مش متأكد من مستواك ابعتلنا على واتساب ونرشحلك الأنسب ليك.',
  },
  {
    q: 'إيه اللي هتعلمه في كل كورس؟',
    a: 'محاور كل كورس موجودة بالتفصيل في قسم الكورسات فوق. ولو عايز تفاصيل أكتر عن أي محور، كلمنا على واتساب.',
  },
  {
    q: 'إزاي أقدر أحجز؟',
    a: 'اضغط على زر الحجز في الكورس اللي عايزه، وهيفتحلك واتساب برسالة جاهزة. وبعدها هنتواصل معاك بتفاصيل الحجز.',
  },
  {
    q: 'هل الكورسات أونلاين ولا حضوري؟',
    a: 'تفاصيل طريقة الدراسة والمواعيد بنأكدها معاك مباشرة على واتساب.',
  },
  {
    q: 'إيه تفاصيل العرض الحالي؟',
    a: 'سعر كل كورس حالياً 3,500 جنيه بدل 5,000 جنيه، وده السعر لكل كورس لوحده. العرض لفترة محدودة، كلمنا على واتساب لمعرفة التفاصيل.',
  },
]
