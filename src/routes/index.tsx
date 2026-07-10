import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone, Menu, X, MapPin, ShieldCheck, Users, Award, BadgeCheck, Sparkles,
  Home as HomeIcon, Building2, Dog, Droplets, Layers, Mountain, Leaf,
  Handshake, FileText, ClipboardCheck, Wrench, CreditCard,
  Star, ArrowRight, ChevronDown, Instagram, Facebook, Mail, Clock,
} from "lucide-react";
import logoAsset from "@/assets/jglawns-logo.png.asset.json";
import heroTurf from "@/assets/hero-turf.jpg";
import svcResidential from "@/assets/service-residential.jpg";
import svcCommercial from "@/assets/service-commercial.jpg";
import svcPet from "@/assets/service-pet.jpg";
import svcSod from "@/assets/service-sod.jpg";
import svcIrrigation from "@/assets/service-irrigation.jpg";
import svcRetaining from "@/assets/service-retaining.jpg";
import svcDrought from "@/assets/service-drought.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const PHONE = "(619) 792-3279";
const PHONE_HREF = "tel:(619) 792-3279";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#gallery" },
  { label: "Service Areas", href: "#areas" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Financing", href: "#cta" },
];

const TRUST = [
  { icon: MapPin, label: "100% Local" },
  { icon: Users, label: "Family Business" },
  { icon: Award, label: "16+ Years Experience" },
  { icon: ShieldCheck, label: "Insured" },
  { icon: BadgeCheck, label: "Fully Licensed #1035320" },
  { icon: Sparkles, label: "Bonded" },
];

const PRIMARY_SERVICES = [
  {
    icon: HomeIcon,
    title: "Residential Turf Installation",
    desc: "Premium synthetic lawns designed for San Diego homes beautiful year-round, virtually maintenance-free.",
    image: svcResidential,
    bullets: ["Custom-fit installation", "Realistic multi-blade turf", "Backed by manufacturer warranty"],
  },
  {
    icon: Building2,
    title: "Commercial Turf Installation",
    desc: "Durable, high-traffic turf for offices, retail, HOAs and hospitality clean curb appeal that lasts.",
    image: svcCommercial,
    bullets: ["Large-format projects", "ADA & drainage compliant", "Fast, low-disruption crews"],
  },
  {
    icon: Dog,
    title: "Pet Turf Installation",
    desc: "Antimicrobial pet turf with enhanced drainage soft on paws, odor-resistant, easy to rinse clean.",
    image: svcPet,
    bullets: ["Pet-safe infill", "Drainage up to 100 in/hr", "No mud. No pests. No fuss."],
  },
];

const SECONDARY_SERVICES = [
  { icon: Droplets, title: "Irrigation", desc: "Smart, water-wise systems.", image: svcIrrigation },
  { icon: Layers, title: "Sod Installation", desc: "Fresh, natural sod done right.", image: svcSod },
  { icon: Mountain, title: "Retaining Walls", desc: "Structural beauty that lasts.", image: svcRetaining },
  { icon: Leaf, title: "Drought Landscape", desc: "Low-water, high-impact designs.", image: svcDrought },
];

const PROCESS = [
  { icon: Handshake, title: "Free Consult", desc: "We listen to your vision and site." },
  { icon: FileText, title: "Estimation & Proposal", desc: "Clear scope, honest pricing." },
  { icon: ClipboardCheck, title: "We Do the Work", desc: "Craftsman crews, premium materials." },
  { icon: Wrench, title: "Final Inspection", desc: "Detail walkthrough with you." },
  { icon: CreditCard, title: "Payment", desc: "Flexible options & financing." },
];

const GALLERY = [g1, g2, g3, g4, g5, g6];

const REVIEWS = [
  { name: "Jasmine Molano", text: "Left me speechless the work JG Lawns Turf has accomplished at my house. I had a landscape completed months back and installed turf from another company that ended up being ripped out and replaced by JG.", stars: 5 },
  { name: "Jose Luis", text: "Very professional and detailed team. Delivered exactly what they promised and finished on time.", stars: 5 },
  { name: "Emily Reeves", text: "Love the yard so much. Kids and dogs can enjoy it year-round and the details are stunning.", stars: 5 },
];

const FAQ_ITEMS = [
  { q: "Can you provide references from past clients?", a: "Absolutely we're happy to share recent local projects and connect you with homeowners in your area. Just ask during your free consultation." },
  { q: "What sets you apart from other contractors in the area?", a: "16+ years of local experience, fully licensed and bonded, and a family-run team that treats every yard like our own. We use premium materials and stand behind our work." },
  { q: "Is there a fee for a consultation or estimate/quote?", a: "No. Consultations and written estimates are always 100% free with no obligation." },
];

const AREAS = ["North County", "East County", "South Bay", "Central San Diego", "Rural & Backcountry Areas"];

function Index() {
  return (
    <div id="home" className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <Process />
      <Gallery />
      <Reviews />
      <FAQ />
      <ServiceAreas />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* ---------- HEADER ---------- */
function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[color:var(--ink)]/95 backdrop-blur supports-[backdrop-filter]:bg-[color:var(--ink)]/80">
      <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3 shrink-0">
          <img src={logoAsset.url} alt="JG Lawns Turf logo" className="h-11 w-11 rounded-full ring-2 ring-brand/60" width={44} height={44} />
          <span className="hidden font-display text-lg font-black tracking-wider text-white sm:inline">JG LAWNS TURF</span>
        </a>
        <nav className="hidden min-w-0 items-center justify-center gap-7 lg:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-white/80 transition-colors hover:text-brand-glow">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={PHONE_HREF} className="hidden items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-brand hover:text-brand-glow md:inline-flex">
            <Phone className="h-4 w-4" /> {PHONE}
          </a>
          <a href="#hero-form" className="hidden items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-bold text-white shadow-glow transition-transform hover:-translate-y-0.5 md:inline-flex">
            Get Free Quote
          </a>
          <button onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white lg:hidden" aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-[color:var(--ink)] lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/85 hover:bg-white/5">
                {n.label}
              </a>
            ))}
            <a href={PHONE_HREF} className="mt-2 flex items-center justify-center gap-2 rounded-full border border-white/15 px-4 py-3 text-sm font-semibold text-white">
              <Phone className="h-4 w-4" /> {PHONE}
            </a>
            <a href="#hero-form" onClick={() => setOpen(false)} className="flex items-center justify-center rounded-full bg-gradient-brand px-4 py-3 text-sm font-bold text-white">
              Get Free Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <img src={heroTurf} alt="Freshly installed premium artificial turf lawn" className="absolute inset-0 -z-10 h-full w-full object-cover" width={1920} height={1200} />
      <div className="absolute inset-0 -z-10 bg-gradient-hero" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.15fr_1fr] lg:gap-14 lg:px-8 lg:py-28">
        {/* Left content */}
        <div className="flex flex-col justify-center text-white">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-brand/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-glow ring-1 ring-brand/30">
            <Sparkles className="h-3.5 w-3.5" /> Pay over time with monthly financing
          </span>
          <h1 className="mt-6 font-display text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            San Diego's <span className="text-gradient-brand">premium artificial turf</span> specialists
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            JG Lawns Turf delivers dependable, high-quality artificial turf solutions for residential
            and commercial outdoor spaces. Beautiful lawns installed to last.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#hero-form" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-bold text-white shadow-glow transition-transform hover:-translate-y-0.5">
              Get a Free Quote <ArrowRight className="h-4 w-4" />
            </a>
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:border-brand-glow hover:text-brand-glow">
              <Phone className="h-4 w-4" /> {PHONE}
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-xs uppercase tracking-wider text-white/70">
            <div className="flex items-center gap-1.5"><Star className="h-4 w-4 fill-gold text-gold" /><Star className="h-4 w-4 fill-gold text-gold" /><Star className="h-4 w-4 fill-gold text-gold" /><Star className="h-4 w-4 fill-gold text-gold" /><Star className="h-4 w-4 fill-gold text-gold" /></div>
            <span>Rated 5 stars on Google</span>
          </div>
        </div>

        {/* Right form */}
        <div id="hero-form" className="rounded-3xl border border-white/10 bg-[color:var(--ink)]/85 p-6 shadow-elegant backdrop-blur sm:p-8">
          <div className="flex items-center gap-3">
            <img src={logoAsset.url} alt="" className="h-11 w-11 rounded-full ring-1 ring-brand/50" width={44} height={44} />
            <div>
              <p className="font-display text-xl font-black uppercase tracking-wide text-white">Get a Free Quote</p>
              <p className="text-xs text-white/60">Response within 24 hours</p>
            </div>
          </div>
          <form
            className="mt-6 grid gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks! We'll be in touch shortly.");
            }}
          >
            <Field label="Full Name" required>
              <input required type="text" placeholder="Jane Doe" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40" />
            </Field>
            <Field label="Phone" required>
              <input required type="tel" placeholder="+1 (555) 555-5555" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40" />
            </Field>
            <Field label="Short message about your needs" required>
              <textarea required rows={4} placeholder="Tell us about your project location, size, timing…" className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/40" />
            </Field>
            <label className="flex items-start gap-3 text-xs text-white/70">
              <input required type="checkbox" className="mt-0.5 h-4 w-4 accent-[color:var(--brand)]" />
              <span>I agree to the <a className="text-brand-glow underline" href="#">terms & conditions</a> and to receive text messages from JG Lawns Turf.</span>
            </label>
            <button type="submit" className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-glow transition-transform hover:-translate-y-0.5">
              Send <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="grid gap-1.5">
      <span className="text-xs font-semibold uppercase tracking-wider text-white/70">{label}{required && <span className="text-brand-glow"> *</span>}</span>
      {children}
    </label>
  );
}

/* ---------- TRUST BAR ---------- */
function TrustBar() {
  return (
    <div className="border-b border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-4 px-4 py-6 sm:px-6 lg:justify-between lg:px-8">
        {TRUST.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground/80 sm:text-sm">
            <Icon className="h-4 w-4 text-brand" />
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- ABOUT ---------- */
function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <SectionEyebrow>About Us</SectionEyebrow>
          <h2 className="mt-3 font-display text-4xl font-black tracking-tight sm:text-5xl">
            Family-owned. Locally trusted. <span className="text-gradient-brand">Built to last.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Rooted in San Diego, JG Lawns Turf delivers superior landscaping solutions backed by
            decades of craftsmanship and a dedication to detail. From front yards to full commercial
            grounds we treat every project like it's our own.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="rounded-2xl border border-border bg-card px-5 py-4 shadow-card-soft">
              <p className="font-display text-3xl font-black text-brand-dark">16+</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Years Experience</p>
            </div>
            <div className="rounded-2xl border border-border bg-card px-5 py-4 shadow-card-soft">
              <p className="font-display text-3xl font-black text-brand-dark">1,200+</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Yards Transformed</p>
            </div>
            <div className="rounded-2xl border border-border bg-card px-5 py-4 shadow-card-soft">
              <p className="font-display text-3xl font-black text-brand-dark">5.0</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Google Rating</p>
            </div>
          </div>
          <div className="mt-8 flex items-center gap-3">
            <span className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[color:var(--brand-dark)]">Accredited Business</span>
            <span className="rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[color:var(--brand-dark)]">Licensed #1035320</span>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-brand opacity-20 blur-3xl" />
          <div className="grid place-items-center rounded-[2rem] border border-border bg-card p-10 shadow-elegant">
            <img src={logoAsset.url} alt="JG Lawns Turf" width={340} height={340} className="h-64 w-64 sm:h-80 sm:w-80" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-[2px] w-10 bg-gradient-brand" />
      <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-dark">{children}</span>
    </div>
  );
}

/* ---------- SERVICES ---------- */
function Services() {
  return (
    <section id="services" className="bg-[color:var(--muted)]/60 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <SectionEyebrow>Our Services</SectionEyebrow>
          <h2 className="mt-3 font-display text-4xl font-black tracking-tight sm:text-5xl">What we're <span className="text-gradient-brand">best at</span></h2>
         <p className="mt-4 text-muted-foreground">
            Three signature installations that turn ordinary yards into premium outdoor spaces.
          </p>
        </div>
       

        {/* Primary services */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PRIMARY_SERVICES.map((s) => (
            <article key={s.title} className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-card-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant">
              <div className="relative h-64 overflow-hidden">
                <img src={s.image} alt={s.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" width={1200} height={900} />
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--ink)]/80 via-[color:var(--ink)]/20 to-transparent" />
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-glow">
                  Signature Service
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/95 shadow-lg">
                    <s.icon className="h-5 w-5 text-brand-dark" />
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-black tracking-tight text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <ul className="mt-4 space-y-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-foreground/80">
                      <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand" /> {b}
                    </li>
                  ))}
                </ul>
                <a href="#hero-form" className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-dark transition-colors hover:text-brand">
                  Get a Quote <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Secondary services */}
        <div className="mt-14">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-gradient-brand" />
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">Also offering</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SECONDARY_SERVICES.map((s) => (
              <article key={s.title} className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-card-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-elegant">
                <div className="relative h-36 overflow-hidden">
                  <img src={s.image} alt={s.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" width={900} height={700} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--ink)]/70 to-transparent" />
                </div>
                <div className="flex items-center gap-3 p-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand-dark">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-display text-base font-black uppercase tracking-wide text-foreground">{s.title}</h4>
                    <p className="truncate text-xs text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- PROCESS ---------- */
function Process() {
  return (
    <section id="process" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <SectionEyebrow>Our Process</SectionEyebrow>
        <h2 className="mt-3 font-display text-4xl font-black tracking-tight sm:text-5xl">
          Five simple steps. <span className="text-gradient-brand">Zero surprises.</span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          Our proven flow keeps your project on time, on budget, and beautifully finished.
        </p>
      </div>

      <div className="relative mt-14">
        <div className="pointer-events-none absolute left-0 right-0 top-9 hidden h-[2px] bg-gradient-to-r from-transparent via-brand/40 to-transparent lg:block" />
        <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {PROCESS.map((p, i) => (
            <li key={p.title} className="relative flex flex-col items-center text-center">
              <div className="relative grid h-20 w-20 place-items-center rounded-full bg-card shadow-elegant ring-4 ring-brand/10">
                <p.icon className="h-8 w-8 text-brand-dark" />
                <span className="absolute -right-1 -top-1 grid h-7 w-7 place-items-center rounded-full bg-gradient-brand font-display text-xs font-black text-white shadow-glow">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-display text-base font-black uppercase tracking-wide text-foreground">{p.title}</h3>
              <p className="mt-2 max-w-[15rem] text-sm text-muted-foreground">{p.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- GALLERY ---------- */
function Gallery() {
  return (
    <section id="gallery" className="bg-[color:var(--muted)]/60 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <SectionEyebrow>See why our customers love us</SectionEyebrow>
          <h2 className="mt-3 font-display text-4xl font-black tracking-tight sm:text-5xl">See our work</h2>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {GALLERY.map((src, i) => (
            <figure key={i} className="group relative aspect-square overflow-hidden rounded-2xl bg-card shadow-card-soft">
              <img src={src} alt={`JG Lawns Turf project ${i + 1}`} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" width={900} height={900} />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--ink)]/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <figcaption className="absolute bottom-3 left-3 translate-y-2 text-xs font-semibold uppercase tracking-wider text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                Project #{i + 1}
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <a href="#gallery" className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-foreground transition-colors hover:border-brand hover:text-brand-dark">
            See all photos <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- REVIEWS ---------- */
function Reviews() {
  return (
    <section id="reviews" className="relative overflow-hidden bg-[color:var(--ink)] py-20 text-white">
      <div className="absolute inset-0 -z-10 opacity-25">
        <img src={heroTurf} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[color:var(--ink)]/80 via-[color:var(--ink)]/90 to-[color:var(--ink)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <SectionEyebrow>Discover what our customers have to say</SectionEyebrow>
          <h2 className="mt-3 font-display text-4xl font-black tracking-tight sm:text-5xl">Reviews</h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <article key={r.name} className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-elegant backdrop-blur transition-transform hover:-translate-y-1">
              <div className="flex gap-1">
                {Array.from({ length: r.stars }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-white/80">"{r.text}"</p>
              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                <span className="text-sm font-semibold">{r.name}</span>
                <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-[10px] font-black text-[#4285F4]">G</span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 text-center">
          <div className="rounded-2xl border border-gold/30 bg-white/5 px-6 py-5 shadow-elegant">
            <p className="font-display text-lg font-black uppercase tracking-wider text-white">Review us on Google</p>
            <div className="mt-2 flex justify-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="h-5 w-5 fill-gold text-gold" />))}
            </div>
            <a href="#" className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-2.5 text-xs font-bold uppercase tracking-wider  text-[color:var(--ink)]" style="color:#fff!important">
              Leave us a review
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center text-center">
        <SectionEyebrow>FAQ</SectionEyebrow>
        <h2 className="mt-3 font-display text-4xl font-black tracking-tight sm:text-5xl">Frequently Asked Questions</h2>
      </div>
      <div className="mt-10 divide-y divide-border overflow-hidden rounded-3xl border border-border bg-card shadow-card-soft">
        {FAQ_ITEMS.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.q}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-5 text-left transition-colors hover:bg-muted/60"
              >
                <span className="min-w-0 font-display text-base font-bold uppercase tracking-wide text-foreground sm:text-lg">{item.q}</span>
                <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-brand text-white transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                  <ChevronDown className="h-4 w-4" />
                </span>
              </button>
              {isOpen && (
                <div className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{item.a}</div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ---------- SERVICE AREAS ---------- */
function ServiceAreas() {
  return (
    <section id="areas" className="bg-[color:var(--muted)]/60 py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-border shadow-elegant">
          <iframe
            title="Service area map"
            src="https://www.google.com/maps?q=San+Diego%2C+CA&output=embed"
            className="h-[380px] w-full lg:h-full"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col justify-center">
          <SectionEyebrow>Proudly Serving</SectionEyebrow>
          <h2 className="mt-3 font-display text-4xl font-black tracking-tight sm:text-5xl">
            These <span className="text-gradient-brand">San Diego</span> areas
          </h2>
          <p className="mt-4 text-muted-foreground">
            From coastal communities to backcountry properties we cover all of San Diego County.
          </p>
          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {AREAS.map((a) => (
              <li key={a} className="flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-card-soft">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand-dark">
                  <MapPin className="h-4 w-4" />
                </span>
                <span className="font-semibold text-foreground">{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- FINAL CTA ---------- */
function FinalCTA() {
  return (
    <section id="cta" className="relative isolate overflow-hidden py-24">
      <img src={heroTurf} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[color:var(--ink)]/95 via-[color:var(--ink)]/85 to-[color:var(--brand-dark)]/75" />
      <div className="mx-auto max-w-4xl px-4 text-center text-white sm:px-6 lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gold">
          <Sparkles className="h-3.5 w-3.5" /> Monthly financing available
        </span>
        <h2 className="mt-6 font-display text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Ready to take the next step? <br />
          <span className="text-gradient-brand">Get a free quote today.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-white/80">
          Tell us about your project and we'll design a premium turf solution built for the way you live.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#hero-form" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-glow transition-transform hover:-translate-y-0.5">
            Get a Free Quote <ArrowRight className="h-4 w-4" />
          </a>
          <a href={PHONE_HREF} className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-4 text-sm font-bold uppercase tracking-wider text-white backdrop-blur transition-colors hover:border-brand-glow hover:text-brand-glow">
            <Phone className="h-4 w-4" /> Call {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="bg-[color:var(--ink)] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img src={logoAsset.url} alt="JG Lawns Turf" className="h-12 w-12 rounded-full ring-2 ring-brand/60" width={48} height={48} />
            <span className="font-display text-lg font-black tracking-wider">JG LAWNS TURF</span>
          </div>
          <p className="mt-4 text-sm text-white/70">
            Premium artificial turf installation & landscaping across San Diego County. Fully licensed, insured, and bonded.
          </p>
          <div className="mt-5 flex gap-3">
            <a href="#" className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-brand hover:text-brand-glow" aria-label="Instagram"><Instagram className="h-4 w-4" /></a>
            <a href="#" className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-brand hover:text-brand-glow" aria-label="Facebook"><Facebook className="h-4 w-4" /></a>
          </div>
        </div>

        <div>
          <p className="font-display text-sm font-black uppercase tracking-widest text-brand-glow">Services</p>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>Residential Turf Installation</li>
            <li>Commercial Turf Installation</li>
            <li>Pet Turf Installation</li>
            <li>Irrigation & Sod</li>
            <li>Retaining Walls & Landscape</li>
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-black uppercase tracking-widest text-brand-glow">Company</p>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {NAV.map((n) => <li key={n.href}><a href={n.href} className="transition-colors hover:text-brand-glow">{n.label}</a></li>)}
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-black uppercase tracking-widest text-brand-glow">Contact</p>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-brand-glow" /><a href={PHONE_HREF}>{PHONE}</a></li>
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-brand-glow" /> jglawnsturf@gmail.com</li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-brand-glow" /> Serving all of San Diego County</li>
            <li className="flex items-start gap-2"><Clock className="mt-0.5 h-4 w-4 text-brand-glow" /> Mon – Sat · 7am – 7pm</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-white/50 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} JG Lawns Turf. All rights reserved. · License #1035320</p>
          <p>Family-owned · Locally trusted · Fully insured</p>
        </div>
      </div>
    </footer>
  );
}
