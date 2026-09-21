import { useEffect, useState } from "react";
import { Menu, X, Home } from "lucide-react";
import { CAPTAIN_NAME, whatsappHref } from "@/lib/site";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#services", label: "الخدمات" },
  { href: "#about", label: "عن الكابتن" },
  { href: "#visit", label: "الزيارة" },
  { href: "#book", label: "الحجز" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-200",
        scrolled || open
          ? "border-b border-border bg-background/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-[4.25rem] sm:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-full border border-gold/40 text-gold">
            <Home className="size-4" strokeWidth={1.75} />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-sm font-semibold text-gold-bright">
              مساج منزلي
            </span>
            <span className="text-[0.7rem] text-muted">{CAPTAIN_NAME}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="التنقل">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold hidden sm:inline-flex"
          >
            <WhatsAppIcon className="size-4" />
            واتساب
          </a>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-gold/30 text-gold-bright md:hidden"
            aria-expanded={open}
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-background px-4 py-5 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="قائمة الجوال">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-3 text-base text-foreground"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-3"
              onClick={() => setOpen(false)}
            >
              <WhatsAppIcon className="size-4" />
              تواصل واتساب
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
