import { type FormEvent, type ReactNode, useEffect, useState } from "react";
import {
  BadgeCheck,
  Droplets,
  Home,
  MapPin,
  Shield,
  Sparkle,
  Timer,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import {
  CAPTAIN_NAME,
  DEFAULT_WHATSAPP_MSG,
  SERVICES,
  STEPS,
  WHATSAPP_DISPLAY,
  WHATSAPP_LOCAL,
  whatsappHref,
} from "@/lib/site";

function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
    );
    nodes.forEach((node) => io.observe(node));
    return () => io.disconnect();
  }, []);
}

export function LandingPage() {
  useReveal();

  return (
    <div id="top" className="relative min-h-dvh bg-background">
      <SiteHeader />
      <Hero />
      <Services />
      <About />
      <Visit />
      <HowItWorks />
      <Booking />
      <Footer />
      <a
        href={whatsappHref()}
        target="_blank"
        rel="noopener noreferrer"
        className="fab-whatsapp"
        aria-label={`واتساب ${WHATSAPP_DISPLAY}`}
      >
        <WhatsAppIcon className="size-7" />
      </a>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-dvh overflow-hidden">
      <img
        src="/images/hero.jpg"
        alt="جلسة مساج منزلي في إضاءة دافئة"
        className="absolute inset-0 size-full object-cover object-[68%_center]"
      />
      <div className="absolute inset-0 bg-linear-to-l from-background/95 via-background/78 to-background/25" />
      <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-background/50" />

      <div className="relative mx-auto flex min-h-dvh max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 lg:justify-center lg:pb-20 lg:pt-32">
        <div className="max-w-xl" data-reveal>
          <p className="mb-4 flex items-center gap-3 text-sm tracking-[0.22em] text-gold">
            <span className="h-px w-8 bg-gold" />
            استرخاء · راحة · تعافي
          </p>
          <h1 className="gold-text font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            مساج منزلي
          </h1>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-background/50 px-4 py-1.5 text-sm text-gold-bright">
            <Home className="size-4" strokeWidth={1.75} />
            زيارات منزلية فقط
          </div>
          <h2 className="mt-6 font-display text-3xl font-semibold text-foreground sm:text-4xl">
            {CAPTAIN_NAME}
          </h2>
          <p className="mt-2 flex items-center gap-2 text-muted">
            <BadgeCheck className="size-4 text-gold" />
            مدرب معتمد من نقابة المهن الرياضية
          </p>
          <p className="mt-5 max-w-md text-base leading-7 text-muted">
            جلسة علاجية أو استرخائية أو حجامة… في خصوصية بيتك داخل القاهرة
            والجيزة. تجربة هادئة، بأدوات معقّمة، ومواعيد مرنة.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              <WhatsAppIcon className="size-4" />
              جاهز لتلقّي طلباتكم الآن
            </a>
            <a href="#services" className="btn-ghost">
              تعرّف على الخدمات
            </a>
          </div>
        </div>

        <div
          className="mt-10 w-full max-w-xs self-start lg:absolute lg:bottom-24 lg:left-6 lg:mt-0"
          data-reveal
        >
          <div className="surface-card rounded-xl p-5 shadow-gold">
            <p className="flex items-center gap-2 text-sm text-gold-bright">
              <MapPin className="size-4" />
              القاهرة والجيزة
            </p>
            <p className="mt-3 font-display text-4xl font-bold text-gold-bright">
              1200 <span className="text-2xl">ج</span>
            </p>
            <p className="mt-1 text-sm text-muted">عربون مسبق لتأكيد الموعد</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <HeaderBlock
          kicker="الخدمات"
          title="ثلاث جلسات… كل واحدة بهدف واضح"
          body="نختار التقنية حسب احتياجك: علاج للشدّ والألم، استرخاء كامل، أو حجامة لتنشيط الدورة."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className="surface-card group overflow-hidden rounded-xl"
              data-reveal
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <p className="text-xs tracking-[0.18em] text-gold">
                  {service.subtitle}
                </p>
                <h3 className="mt-1 font-display text-2xl font-semibold">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">{service.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-24 px-4 py-8 sm:px-6 lg:py-12">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div
          className="relative overflow-hidden rounded-xl gold-frame"
          data-reveal
        >
          <img
            src="/images/captain.jpg"
            alt="كابتن علاوي — مدرب معتمد"
            className="aspect-3/4 w-full object-cover"
          />
        </div>
        <div data-reveal>
          <p className="text-sm tracking-[0.22em] text-gold">عن الكابتن</p>
          <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
            مدرب معتمد…
            <span className="gold-text"> يزورك في بيتك</span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-muted">
            {CAPTAIN_NAME} مدرب معتمد من نقابة المهن الرياضية. يقدّم جلسات مساج
            علاجي واسترخائي وحجامة للرجال، بمعايير واضحة: أدوات معقّمة، ضغط
            محسوب، وخصوصية كاملة داخل المنزل.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            <Fact
              icon={<BadgeCheck className="size-5 text-gold" />}
              title="اعتماد نقابي"
              body="مدرب معتمد من نقابة المهن الرياضية."
            />
            <Fact
              icon={<Shield className="size-5 text-gold" />}
              title="خصوصية تامة"
              body="الجلسة لك وحدك — بدون صالة مشتركة."
            />
            <Fact
              icon={<Droplets className="size-5 text-gold" />}
              title="أدوات معقّمة"
              body="زيوت ومستلزمات تُجهَّز لكل زيارة."
            />
            <Fact
              icon={<Timer className="size-5 text-gold" />}
              title="مواعيد مرنة"
              body="نضبط الوقت حسب يومك عبر واتساب."
            />
          </ul>
        </div>
      </div>
    </section>
  );
}

function Fact({
  icon,
  title,
  body,
}: {
  icon: ReactNode;
  title: string;
  body: string;
}) {
  return (
    <li className="flex gap-3 rounded-lg border border-border bg-surface p-4">
      <span className="mt-0.5">{icon}</span>
      <span>
        <span className="block font-medium text-foreground">{title}</span>
        <span className="mt-1 block text-sm leading-6 text-muted">{body}</span>
      </span>
    </li>
  );
}

function Visit() {
  return (
    <section id="visit" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-stretch gap-8 overflow-hidden rounded-xl lg:grid-cols-2">
        <div className="relative min-h-72" data-reveal>
          <img
            src="/images/home-visit.jpg"
            alt="طاولة مساج جاهزة داخل منزل أنيق"
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent lg:bg-linear-to-l" />
        </div>
        <div className="flex flex-col justify-center px-1 py-4 lg:p-10" data-reveal>
          <p className="text-sm tracking-[0.22em] text-gold">نطاق الخدمة</p>
          <h2 className="mt-3 font-display text-4xl font-semibold">
            القاهرة والجيزة فقط
          </h2>
          <p className="mt-4 max-w-md text-base leading-8 text-muted">
            لا عيادة ولا استقبال. الزيارة المنزلية هي الأساس: نصل إليك بطاولة
            احترافية، ونجهّز ركنًا هادئًا في بيتك. تجربة مختلفة بخصوصيتك.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-gold/35 px-4 py-2 text-sm text-gold-bright">
              زيارات منزلية فقط
            </span>
            <span className="rounded-full border border-gold/35 px-4 py-2 text-sm text-gold-bright">
              مساج · حجامة · راحة
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="px-4 py-8 sm:px-6 lg:py-12">
      <div className="mx-auto max-w-6xl">
        <HeaderBlock
          kicker="خطوات الحجز"
          title="أربع خطوات واضحة"
          body="من رسالة واتساب إلى الجلسة في منزلك — بدون تعقيد."
        />
        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <li
              key={step.n}
              className="surface-card rounded-xl p-6"
              data-reveal
            >
              <p className="font-display text-3xl text-gold">{step.n}</p>
              <h3 className="mt-3 font-display text-xl font-semibold">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Booking() {
  const [name, setName] = useState("");
  const [area, setArea] = useState("القاهرة");
  const [service, setService] = useState<string>(SERVICES[0].title);
  const [note, setNote] = useState("");

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const lines = [
      "السلام عليكم كابتن علاوي",
      "أرغب في حجز جلسة مساج منزلي:",
      name.trim() ? `الاسم: ${name.trim()}` : null,
      `المنطقة: ${area}`,
      `الخدمة: ${service}`,
      note.trim() ? `ملاحظة: ${note.trim()}` : null,
    ].filter(Boolean);
    window.open(whatsappHref(lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="book" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div data-reveal>
          <p className="text-sm tracking-[0.22em] text-gold">الحجز</p>
          <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
            جاهز لتلقّي طلباتكم
            <span className="gold-text"> الآن</span>
          </h2>
          <p className="mt-4 max-w-md text-base leading-8 text-muted">
            املأ البيانات أو اضغط واتساب مباشرة. العربون المسبق{" "}
            <span className="text-gold-bright">1200 جنيه</span> لتأكيد الموعد.
          </p>
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-3 text-lg font-semibold text-gold-bright"
          >
            <WhatsAppIcon className="size-6" />
            {WHATSAPP_DISPLAY}
          </a>
          <p className="mt-2 text-sm text-subtle">رقم واتساب {WHATSAPP_LOCAL}</p>
          <blockquote className="mt-10 border-r-2 border-gold pr-5">
            <p className="font-display text-2xl text-foreground">
              تجربة مختلفة بخصوصيتك.
            </p>
            <p className="mt-2 flex items-center gap-2 text-sm text-muted">
              <Sparkle className="size-3.5 text-gold" />
              مساج · حجامة · راحة
            </p>
          </blockquote>
        </div>

        <form
          onSubmit={onSubmit}
          className="surface-card rounded-xl p-6 sm:p-8"
          data-reveal
        >
          <label className="mb-4 block">
            <span className="mb-2 block text-sm text-muted">الاسم</span>
            <input
              className="field"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="اكتب اسمك"
              autoComplete="name"
            />
          </label>
          <label className="mb-4 block">
            <span className="mb-2 block text-sm text-muted">المنطقة</span>
            <select
              className="field"
              value={area}
              onChange={(e) => setArea(e.target.value)}
            >
              <option>القاهرة</option>
              <option>الجيزة</option>
            </select>
          </label>
          <label className="mb-4 block">
            <span className="mb-2 block text-sm text-muted">الخدمة</span>
            <select
              className="field"
              value={service}
              onChange={(e) => setService(e.target.value)}
            >
              {SERVICES.map((item) => (
                <option key={item.id}>{item.title}</option>
              ))}
            </select>
          </label>
          <label className="mb-6 block">
            <span className="mb-2 block text-sm text-muted">ملاحظة (اختياري)</span>
            <textarea
              className="field min-h-24 resize-y"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="موعد مفضّل أو تفاصيل الألم"
            />
          </label>
          <button type="submit" className="btn-gold w-full">
            <WhatsAppIcon className="size-4" />
            إرسال الطلب عبر واتساب
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border px-4 py-10 pb-28 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center">
        <div className="gold-rule w-40" />
        <p className="font-display text-xl text-gold-bright">
          مساج · حجامة · راحة
        </p>
        <p className="text-sm text-muted">
          {CAPTAIN_NAME} — زيارات منزلية في القاهرة والجيزة
        </p>
        <a
          href={whatsappHref(DEFAULT_WHATSAPP_MSG)}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gold"
        >
          واتساب {WHATSAPP_DISPLAY}
        </a>
      </div>
    </footer>
  );
}

function HeaderBlock({
  kicker,
  title,
  body,
}: {
  kicker: string;
  title: string;
  body: string;
}) {
  return (
    <div className="max-w-2xl" data-reveal>
      <p className="text-sm tracking-[0.22em] text-gold">{kicker}</p>
      <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-muted">{body}</p>
    </div>
  );
}
