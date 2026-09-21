export const SITE_NAME = "مساج منزلي | كابتن علاوي";
export const CAPTAIN_NAME = "كابتن علاوي";

export const WHATSAPP_LOCAL = "01145307937";
export const WHATSAPP_DISPLAY = "0114 530 7937";
export const WHATSAPP_E164 = "201145307937";
export const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_E164}`;

export const DEFAULT_WHATSAPP_MSG =
  "السلام عليكم كابتن علاوي، أرغب في حجز جلسة مساج منزلي";

export function whatsappHref(message: string = DEFAULT_WHATSAPP_MSG) {
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
}

export const SERVICES = [
  {
    id: "therapeutic",
    title: "مساج علاجي",
    subtitle: "للتوتّر والآلام",
    image: "/images/therapeutic.jpg",
    body: "جلسة موجّهة للشدّ العضلي، آلام الظهر والرقبة، والتعافي بعد التمرين. يعتمد الكابتن على خبرته كمدرب رياضي لتحديد نقاط الضغط والعمل عليها بعمق محسوب يناسب جسمك.",
  },
  {
    id: "relaxation",
    title: "مساج استرخائي",
    subtitle: "لراحة الجسم",
    image: "/images/relaxation.jpg",
    body: "جلسة كاملة لهدوء الجسد والذهن. زيوت دافئة وإيقاع هادئ داخل بيتك، بعد يوم طويل أو قبل النوم — بدون صالات مشتركة أو انتظار.",
  },
  {
    id: "hijama",
    title: "حجامة",
    subtitle: "تنشيط الدورة الدموية",
    image: "/images/hijama.jpg",
    body: "حجامة منزلية بأدوات معقّمة تُستخدم لمرة واحدة. تُنفَّذ بشرح مبسّط قبل الجلسة، بهدف تنشيط الدورة وتخفيف الاحتقان وفق أصول الحجامة.",
  },
] as const;

export const STEPS = [
  {
    n: "01",
    title: "راسلنا على واتساب",
    body: "اضغط الزر واكتب اسمك والمنطقة والخدمة المطلوبة.",
  },
  {
    n: "02",
    title: "اتفق على الموعد",
    body: "نحدّد الوقت المناسب داخل القاهرة أو الجيزة حسب يومك.",
  },
  {
    n: "03",
    title: "عربون لتأكيد الحجز",
    body: "عربون مسبق 1200 جنيه لتثبيت الزيارة قبل الحضور.",
  },
  {
    n: "04",
    title: "الجلسة في منزلك",
    body: "نصل في الموعد المتفق عليه، بأدوات معقّمة وخصوصية كاملة.",
  },
] as const;
