import { useEffect, useState, type FormEvent } from "react";
import { useLocation } from "react-router-dom";
import { cn } from "@/utils/cn";
import { PageHero } from "@/components/Sections";
import { Button, Eyebrow, Reveal, usePageMeta } from "@/components/ui";
import { SocialLinks } from "@/components/Footer";
import { WsMark } from "@/components/Logo";
import {
  IconMail,
  IconPhone,
  IconGlobe,
  IconClock,
  IconCheck,
} from "@/components/Icons";
import {
  BUDGET_OPTIONS,
  CONTACT_INFO,
  GENRE_OPTIONS,
  SERVICE_OPTIONS,
} from "@/lib/data";

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  genre: string;
  budget: string;
  description: string;
};

const EMPTY: FormData = {
  name: "",
  email: "",
  phone: "",
  service: "",
  genre: "",
  budget: "",
  description: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+\d][\d\s().-]{6,19}$/;

function validate(d: FormData) {
  const e: Partial<Record<keyof FormData, string>> = {};
  if (d.name.trim().length < 2) e.name = "Please tell us your full name.";
  if (!EMAIL_RE.test(d.email.trim())) e.email = "Please enter a valid email address.";
  if (d.phone.trim() && !PHONE_RE.test(d.phone.trim()))
    e.phone = "That phone number doesn't look right.";
  if (!d.service) e.service = "Please choose the service you're interested in.";
  if (d.description.trim().length < 20)
    e.description = "Give us at least a sentence or two (20+ characters) about your project.";
  return e;
}

const NEXT_STEPS = [
  ["We read every word", "Your inquiry lands with a senior member of the squad — not a bot."],
  ["A conversation, not a pitch", "We schedule a free discovery call to understand your story and goals."],
  ["A plan with a price", "You receive a tailored roadmap and transparent quote. No obligation."],
];

export default function Contact() {
  usePageMeta(
    "Contact — Wordsmith Squad",
    "Let's bring your story to life. Send a project inquiry for ghostwriting, editing, publishing, design or marketing."
  );
  const location = useLocation();
  const [data, setData] = useState<FormData>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState<FormData | null>(null);

  useEffect(() => {
    const service = (location.state as { service?: string } | null)?.service;
    if (service && SERVICE_OPTIONS.includes(service)) {
      setData((d) => ({ ...d, service }));
    }
  }, [location.state]);

  const set = (k: keyof FormData, v: string) => {
    setData((d) => ({ ...d, [k]: v }));
    if (touched[k]) {
      const e = validate({ ...data, [k]: v });
      setErrors((prev) => ({ ...prev, [k]: e[k] }));
    }
  };

  const blur = (k: keyof FormData) => {
    setTouched((t) => ({ ...t, [k]: true }));
    const e = validate(data);
    setErrors((prev) => ({ ...prev, [k]: e[k] }));
  };

  const submit = (ev: FormEvent) => {
    ev.preventDefault();
    const e = validate(data);
    setErrors(e);
    setTouched({ name: true, email: true, phone: true, service: true, description: true });
    const first = Object.keys(e)[0];
    if (first) {
      document.getElementById(`field-${first}`)?.focus();
      return;
    }
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setDone(data);
      setData(EMPTY);
      setTouched({});
    }, 900);
  };

  const err = (k: keyof FormData) =>
    touched[k] && errors[k] ? (
      <p id={`err-${k}`} role="alert" className="mt-1.5 text-xs text-danger">
        {errors[k]}
      </p>
    ) : null;

  const fieldCls = (k: keyof FormData) =>
    cn("field", touched[k] && errors[k] && "error");

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        ghost="Hello"
        title={
          <>
            Let&rsquo;s Bring Your Story to <em className="text-sheen italic">Life.</em>
          </>
        }
        text="Tell us where your book stands — a whisper of an idea or a full draft — and we'll tell you honestly how to get it to the shelf."
      />

      <section className="bg-ivory pt-8 pb-28 md:pt-12 md:pb-40">
        <div className="wrap grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* ------------ contact rail ------------ */}
          <div className="space-y-6">
            <Reveal>
              <div className="spot relative overflow-hidden rounded-[2rem] bg-ink p-8 md:p-10">
                <Eyebrow tone="light">Reach the Squad</Eyebrow>
                <ul className="mt-8 space-y-6">
                  <li className="flex items-start gap-4">
                    <IconMail className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    <div>
                      <p className="text-[0.625rem] font-semibold tracking-[0.24em] text-ivory/45 uppercase">Email</p>
                      <a href={`mailto:${CONTACT_INFO.email}`} className="mt-1 block text-sm text-ivory transition-colors hover:text-gold-light">
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <IconPhone className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    <div>
                      <p className="text-[0.625rem] font-semibold tracking-[0.24em] text-ivory/45 uppercase">
                        Phone <span className="text-gold/60">· placeholder</span>
                      </p>
                      <p className="mt-1 text-sm text-ivory">{CONTACT_INFO.phone}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <IconGlobe className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    <div>
                      <p className="text-[0.625rem] font-semibold tracking-[0.24em] text-ivory/45 uppercase">Serving</p>
                      <p className="mt-1 text-sm leading-relaxed text-ivory">{CONTACT_INFO.regions}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <IconClock className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    <div>
                      <p className="text-[0.625rem] font-semibold tracking-[0.24em] text-ivory/45 uppercase">Studio hours</p>
                      <p className="mt-1 text-sm text-ivory">{CONTACT_INFO.hours}</p>
                      <p className="mt-1 text-xs text-ivory/50">Replies within two business days.</p>
                    </div>
                  </li>
                </ul>
                <div className="hairline my-8" />
                <p className="text-[0.625rem] font-semibold tracking-[0.24em] text-ivory/45 uppercase">
                  Follow the story
                </p>
                <SocialLinks className="mt-4" />
                <p className="mt-4 text-[0.6875rem] leading-relaxed text-ivory/35">
                  Contact details and social profiles are placeholders, ready to be replaced with
                  live channels before launch.
                </p>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="rounded-[2rem] border border-beige bg-paper p-8 md:p-10">
                <Eyebrow>What Happens Next</Eyebrow>
                <ol className="mt-7 space-y-6">
                  {NEXT_STEPS.map(([t, s], i) => (
                    <li key={t} className="flex gap-4">
                      <span className="font-display flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/20 text-sm font-semibold text-gold-dark">
                        {i + 1}
                      </span>
                      <div>
                        <p className="font-display text-lg font-semibold text-ink">{t}</p>
                        <p className="mt-1 text-sm leading-relaxed text-ink/60">{s}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>

          {/* ------------ form ------------ */}
          <Reveal delay={100}>
            <div className="relative rounded-[2.25rem] border border-beige bg-paper p-8 shadow-[0_50px_100px_-50px_rgba(23,23,23,0.35)] md:p-12">
              {done ? (
                <div className="animate-fade flex min-h-130 flex-col items-center justify-center py-10 text-center" aria-live="polite">
                  <span className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold bg-ivory">
                    <IconCheck className="h-8 w-8 text-gold-dark" />
                  </span>
                  <h2 className="font-display mt-8 text-3xl font-semibold text-ink md:text-4xl">
                    Consider Your First Page <em className="text-gold-dark italic">Turned.</em>
                  </h2>
                  <p className="mt-5 max-w-md leading-relaxed text-ink/65">
                    Thank you, {done.name.split(" ")[0]}. Your inquiry about{" "}
                    <strong className="text-ink">{done.service}</strong> has been received. A member
                    of the squad will write to <strong className="text-ink">{done.email}</strong>{" "}
                    within two business days.
                  </p>
                  <p className="mt-4 max-w-sm text-xs leading-relaxed text-ink/40">
                    Preview mode: this demo validates and confirms locally — connect your email
                    service or CRM to deliver inquiries to your inbox.
                  </p>
                  <Button onClick={() => setDone(null)} variant="outline-dark" className="mt-9">
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={submit} noValidate>
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <Eyebrow>Project Inquiry</Eyebrow>
                      <h2 className="font-display mt-4 text-2xl font-semibold text-ink md:text-3xl">
                        Tell us about your book
                      </h2>
                    </div>
                    <WsMark tone="onLight" className="hidden h-12 w-12 opacity-70 sm:block" />
                  </div>

                  <div className="mt-9 grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="field-name" className="field-label">
                        Full Name <span className="text-gold-dark">*</span>
                      </label>
                      <input
                        id="field-name"
                        type="text"
                        autoComplete="name"
                        className={fieldCls("name")}
                        placeholder="Jane Austen"
                        value={data.name}
                        onChange={(e) => set("name", e.target.value)}
                        onBlur={() => blur("name")}
                        aria-invalid={!!(touched.name && errors.name)}
                        aria-describedby={errors.name ? "err-name" : undefined}
                      />
                      {err("name")}
                    </div>
                    <div>
                      <label htmlFor="field-email" className="field-label">
                        Email Address <span className="text-gold-dark">*</span>
                      </label>
                      <input
                        id="field-email"
                        type="email"
                        autoComplete="email"
                        className={fieldCls("email")}
                        placeholder="you@example.com"
                        value={data.email}
                        onChange={(e) => set("email", e.target.value)}
                        onBlur={() => blur("email")}
                        aria-invalid={!!(touched.email && errors.email)}
                        aria-describedby={errors.email ? "err-email" : undefined}
                      />
                      {err("email")}
                    </div>
                    <div>
                      <label htmlFor="field-phone" className="field-label">
                        Phone Number
                      </label>
                      <input
                        id="field-phone"
                        type="tel"
                        autoComplete="tel"
                        className={fieldCls("phone")}
                        placeholder="+1 (555) 000-0000"
                        value={data.phone}
                        onChange={(e) => set("phone", e.target.value)}
                        onBlur={() => blur("phone")}
                        aria-invalid={!!(touched.phone && errors.phone)}
                        aria-describedby={errors.phone ? "err-phone" : undefined}
                      />
                      {err("phone")}
                    </div>
                    <div>
                      <label htmlFor="field-service" className="field-label">
                        Type of Service Required <span className="text-gold-dark">*</span>
                      </label>
                      <select
                        id="field-service"
                        className={fieldCls("service")}
                        value={data.service}
                        onChange={(e) => set("service", e.target.value)}
                        onBlur={() => blur("service")}
                        aria-invalid={!!(touched.service && errors.service)}
                        aria-describedby={errors.service ? "err-service" : undefined}
                      >
                        <option value="" disabled>
                          Select a service…
                        </option>
                        {SERVICE_OPTIONS.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                      {err("service")}
                    </div>
                    <div>
                      <label htmlFor="field-genre" className="field-label">
                        Book Genre
                      </label>
                      <select
                        id="field-genre"
                        className="field"
                        value={data.genre}
                        onChange={(e) => set("genre", e.target.value)}
                      >
                        <option value="" disabled>
                          Select a genre…
                        </option>
                        {GENRE_OPTIONS.map((g) => (
                          <option key={g} value={g}>
                            {g}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="field-budget" className="field-label">
                        Estimated Budget
                      </label>
                      <select
                        id="field-budget"
                        className="field"
                        value={data.budget}
                        onChange={(e) => set("budget", e.target.value)}
                      >
                        <option value="" disabled>
                          Select a range…
                        </option>
                        {BUDGET_OPTIONS.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <div className="flex items-baseline justify-between">
                        <label htmlFor="field-description" className="field-label">
                          Project Description <span className="text-gold-dark">*</span>
                        </label>
                        <span className={cn("text-[0.6875rem]", data.description.trim().length >= 20 ? "text-success" : "text-ink/35")}>
                          {data.description.trim().length} / 20 min
                        </span>
                      </div>
                      <textarea
                        id="field-description"
                        rows={6}
                        className={cn(fieldCls("description"), "resize-y")}
                        placeholder="What's the story? Where are you in the journey — idea, outline, draft? What does success look like for this book?"
                        value={data.description}
                        onChange={(e) => set("description", e.target.value)}
                        onBlur={() => blur("description")}
                        aria-invalid={!!(touched.description && errors.description)}
                        aria-describedby={errors.description ? "err-description" : undefined}
                      />
                      {err("description")}
                    </div>
                  </div>

                  <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                    <Button type="submit" variant="gold" disabled={submitting} className="w-full sm:w-auto" arrow={!submitting}>
                      {submitting ? "Sealing the envelope…" : "Submit Inquiry"}
                    </Button>
                    <p className="text-[0.6875rem] leading-relaxed text-ink/45 sm:max-w-55">
                      NDA-friendly · Free consultation · No spam, no obligation.
                    </p>
                  </div>
                  <p className="mt-5 text-[0.625rem] leading-relaxed text-ink/35">
                    Preview form: submissions are validated and confirmed locally. Connect your
                    email service or CRM endpoint to receive inquiries in production.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}