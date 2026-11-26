
import {
  useEffect,
  useState,
  type FormEvent,
} from "react";
import { useLocation } from "react-router-dom";

import { cn } from "@/utils/cn";
import { PageHero } from "@/components/Sections";
import {
  Button,
  Eyebrow,
  Reveal,
  usePageMeta,
} from "@/components/ui";
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

// ===================================================
// WORDSMITH SQUAD - CONTACT PAGE
// Hostinger frontend + Vercel email backend
// ===================================================

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  genre: string;
  budget: string;
  description: string;
};

type FieldName = keyof ContactFormData;

type FieldErrors = Partial<
  Record<FieldName, string>
>;

type ApiResponse = {
  success?: boolean;
  message?: string;
};

const EMPTY: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  service: "",
  genre: "",
  budget: "",
  description: "",
};

const EMAIL_RE =
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const PHONE_RE =
  /^[+\d][\d\s().-]{6,19}$/;

// IMPORTANT:
// Hostinger Environment Variables:
// VITE_CONTACT_API_URL=https://YOUR-VERCEL-DOMAIN.vercel.app/api/contact
//
// The Vercel domain must be replaced with your actual deployment.
// The URL is public and contains no secret keys.

const CONTACT_API_URL = (
  import.meta.env.VITE_CONTACT_API_URL || ""
).trim();

function validate(d: ContactFormData): FieldErrors {
  const errors: FieldErrors = {};

  if (d.name.trim().length < 2) {
    errors.name = "Please tell us your full name.";
  }

  if (!EMAIL_RE.test(d.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (
    d.phone.trim() &&
    !PHONE_RE.test(d.phone.trim())
  ) {
    errors.phone =
      "That phone number doesn't look right.";
  }

  if (!d.service) {
    errors.service =
      "Please choose the service you're interested in.";
  }

  if (d.description.trim().length < 20) {
    errors.description =
      "Please provide at least 20 characters about your project.";
  }

  return errors;
}

const NEXT_STEPS = [
  [
    "We read every word",
    "Your inquiry reaches our team for a careful review.",
  ],
  [
    "A conversation, not a pitch",
    "We discuss your story, your goals, and your requirements.",
  ],
  [
    "A plan with a price",
    "We prepare a tailored roadmap and transparent quote.",
  ],
] as const;

export default function Contact() {
  usePageMeta(
    "Contact — Wordsmith Squad",
    "Send a project inquiry for ghostwriting, editing, publishing, design or marketing."
  );

  const location = useLocation();

  const [data, setData] =
    useState<ContactFormData>({ ...EMPTY });

  const [errors, setErrors] =
    useState<FieldErrors>({});

  const [touched, setTouched] =
    useState<Partial<Record<FieldName, boolean>>>({});

  const [submitting, setSubmitting] =
    useState(false);

  const [done, setDone] =
    useState<ContactFormData | null>(null);

  const [submitError, setSubmitError] =
    useState("");

  // Preselect a service when redirected from another page.
  useEffect(() => {
    const service = (
      location.state as { service?: string } | null
    )?.service;

    if (
      service &&
      SERVICE_OPTIONS.includes(service)
    ) {
      setData((previous) => ({
        ...previous,
        service,
      }));
    }
  }, [location.state]);

  // ===================================================
  // FIELD HELPERS
  // ===================================================

  const set = (key: FieldName, value: string) => {
    const updated = {
      ...data,
      [key]: value,
    };

    setData(updated);

    if (touched[key]) {
      const updatedErrors = validate(updated);

      setErrors((previous) => ({
        ...previous,
        [key]: updatedErrors[key],
      }));
    }

    if (submitError) {
      setSubmitError("");
    }
  };

  const blur = (key: FieldName) => {
    setTouched((previous) => ({
      ...previous,
      [key]: true,
    }));

    const updatedErrors = validate(data);

    setErrors((previous) => ({
      ...previous,
      [key]: updatedErrors[key],
    }));
  };

  const fieldCls = (key: FieldName) =>
    cn(
      "field",
      touched[key] && errors[key] && "error"
    );

  const err = (key: FieldName) => {
    if (!touched[key] || !errors[key]) {
      return null;
    }

    return (
      <p
        id={`err-${key}`}
        role="alert"
        className="mt-1.5 text-xs text-danger"
      >
        {errors[key]}
      </p>
    );
  };

  // ===================================================
  // SUBMIT FORM
  // ===================================================

  const submit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (submitting) return;

    const validationErrors = validate(data);

    setErrors(validationErrors);

    setTouched({
      name: true,
      email: true,
      phone: true,
      service: true,
      genre: true,
      budget: true,
      description: true,
    });

    const firstError = Object.keys(
      validationErrors
    )[0];

    if (firstError) {
      document
        .getElementById(`field-${firstError}`)
        ?.focus();

      return;
    }

    // Never attempt a fake submission if the
    // actual production API URL is missing.
    if (!CONTACT_API_URL) {
      setSubmitError(
        "The contact form is not yet connected to our email service. Please contact us using the email address on this page."
      );
      return;
    }

    setSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch(
        CONTACT_API_URL,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const contentType =
        response.headers.get("content-type") || "";

      if (
        !contentType
          .toLowerCase()
          .includes("application/json")
      ) {
        throw new Error(
          "The email service returned an unexpected response. Please check the API deployment."
        );
      }

      let result: ApiResponse;

      try {
        result = (await response.json()) as ApiResponse;
      } catch {
        throw new Error(
          "The email service returned an invalid response."
        );
      }

      if (
        !response.ok ||
        result.success !== true
      ) {
        throw new Error(
          result.message ||
            "Unable to send your inquiry. Please try again."
        );
      }

      // Only show success after backend confirmation.
      setDone({ ...data });

      setData({ ...EMPTY });
      setTouched({});
      setErrors({});
      setSubmitError("");
    } catch (error) {
      console.error(
        "Contact form submission failed:",
        error
      );

      const message =
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.";

      // Browser network failures often mean
      // the API domain or CORS configuration is wrong.
      setSubmitError(
        message === "Failed to fetch"
          ? "Cannot connect to our email service. Please try again later or use the email address on this page."
          : message
      );
    } finally {
      setSubmitting(false);
    }
  };

  // ===================================================
  // PAGE
  // ===================================================

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        ghost="Hello"
        title={
          <>
            Let&rsquo;s Bring Your Story to{" "}
            <em className="text-sheen italic">
              Life.
            </em>
          </>
        }
        text="Tell us where your book stands — a whisper of an idea or a full draft — and we'll tell you how to get it to the shelf."
      />

      <section className="bg-ivory pb-28 pt-8 md:pb-40 md:pt-12">
        <div className="wrap grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

          {/* ====================================== */}
          {/* LEFT - CONTACT INFORMATION */}
          {/* ====================================== */}

          <div className="space-y-6">
            <Reveal>
              <div className="spot relative overflow-hidden rounded-[2rem] bg-ink p-8 md:p-10">
                <Eyebrow tone="light">
                  Reach the Squad
                </Eyebrow>

                <ul className="mt-8 space-y-6">

                  {/* EMAIL */}

                  <li className="flex items-start gap-4">
                    <IconMail className="mt-0.5 h-5 w-5 shrink-0 text-gold" />

                    <div>
                      <p className="text-[0.625rem] font-semibold uppercase tracking-[0.24em] text-ivory/45">
                        Email
                      </p>

                      <a
                        href={`mailto:${CONTACT_INFO.email}`}
                        className="mt-1 block break-all text-sm text-ivory transition-colors hover:text-gold-light"
                      >
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                  </li>

                  {/* PHONE */}

                  <li className="flex items-start gap-4">
                    <IconPhone className="mt-0.5 h-5 w-5 shrink-0 text-gold" />

                    <div>
                      <p className="text-[0.625rem] font-semibold uppercase tracking-[0.24em] text-ivory/45">
                        Phone{" "}
                        <span className="text-gold/60">
                          · placeholder
                        </span>
                      </p>

                      <p className="mt-1 text-sm text-ivory">
                        {CONTACT_INFO.phone}
                      </p>
                    </div>
                  </li>

                  {/* REGIONS */}

                  <li className="flex items-start gap-4">
                    <IconGlobe className="mt-0.5 h-5 w-5 shrink-0 text-gold" />

                    <div>
                      <p className="text-[0.625rem] font-semibold uppercase tracking-[0.24em] text-ivory/45">
                        Serving
                      </p>

                      <p className="mt-1 text-sm leading-relaxed text-ivory">
                        {CONTACT_INFO.regions}
                      </p>
                    </div>
                  </li>

                  {/* STUDIO HOURS */}

                  <li className="flex items-start gap-4">
                    <IconClock className="mt-0.5 h-5 w-5 shrink-0 text-gold" />

                    <div>
                      <p className="text-[0.625rem] font-semibold uppercase tracking-[0.24em] text-ivory/45">
                        Studio Hours
                      </p>

                      <p className="mt-1 text-sm text-ivory">
                        {CONTACT_INFO.hours}
                      </p>

                      <p className="mt-1 text-xs text-ivory/50">
                        Replies within two business days.
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="hairline my-8" />

                <p className="text-[0.625rem] font-semibold uppercase tracking-[0.24em] text-ivory/45">
                  Follow the Story
                </p>

                <SocialLinks className="mt-4" />

                <p className="mt-4 text-[0.6875rem] leading-relaxed text-ivory/35">
                  Connect with us to learn more about
                  our writing and publishing services.
                </p>
              </div>
            </Reveal>

            {/* ====================================== */}
            {/* WHAT HAPPENS NEXT */}
            {/* ====================================== */}

            <Reveal delay={140}>
              <div className="rounded-[2rem] border border-beige bg-paper p-8 md:p-10">
                <Eyebrow>
                  What Happens Next
                </Eyebrow>

                <ol className="mt-7 space-y-6">
                  {NEXT_STEPS.map(
                    ([title, description], index) => (
                      <li
                        key={title}
                        className="flex gap-4"
                      >
                        <span className="font-display flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/20 text-sm font-semibold text-gold-dark">
                          {index + 1}
                        </span>

                        <div>
                          <p className="font-display text-lg font-semibold text-ink">
                            {title}
                          </p>

                          <p className="mt-1 text-sm leading-relaxed text-ink/60">
                            {description}
                          </p>
                        </div>
                      </li>
                    )
                  )}
                </ol>
              </div>
            </Reveal>
          </div>

          {/* ====================================== */}
          {/* RIGHT - INQUIRY FORM */}
          {/* ====================================== */}

          <Reveal delay={100}>
            <div className="relative rounded-[2.25rem] border border-beige bg-paper p-8 shadow-[0_50px_100px_-50px_rgba(23,23,23,0.35)] md:p-12">

              {done ? (
                // SUCCESS SCREEN
                <div
                  className="animate-fade flex min-h-[520px] flex-col items-center justify-center py-10 text-center"
                  aria-live="polite"
                >
                  <span className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold bg-ivory">
                    <IconCheck className="h-8 w-8 text-gold-dark" />
                  </span>

                  <h2 className="font-display mt-8 text-3xl font-semibold text-ink md:text-4xl">
                    Consider Your First Page{" "}
                    <em className="italic text-gold-dark">
                      Turned.
                    </em>
                  </h2>

                  <p className="mt-5 max-w-md leading-relaxed text-ink/65">
                    Thank you,{" "}
                    {done.name.split(" ")[0]}.
                    Your inquiry about{" "}
                    <strong className="text-ink">
                      {done.service}
                    </strong>{" "}
                    has been submitted.
                    A member of the squad will
                    reply to{" "}
                    <strong className="text-ink">
                      {done.email}
                    </strong>{" "}
                    within two business days.
                  </p>

                  <p className="mt-4 max-w-sm text-xs leading-relaxed text-ink/40">
                    We look forward to learning
                    more about your project.
                  </p>

                  <Button
                    onClick={() => setDone(null)}
                    variant="outline-dark"
                    className="mt-9"
                  >
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                // FORM SCREEN
                <form onSubmit={submit} noValidate>
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <Eyebrow>
                        Project Inquiry
                      </Eyebrow>

                      <h2 className="font-display mt-4 text-2xl font-semibold text-ink md:text-3xl">
                        Tell us about your book
                      </h2>
                    </div>

                    <WsMark
                      tone="onLight"
                      className="hidden h-12 w-12 opacity-70 sm:block"
                    />
                  </div>

                  <div className="mt-9 grid gap-6 sm:grid-cols-2">

                    {/* FULL NAME */}

                    <div>
                      <label
                        htmlFor="field-name"
                        className="field-label"
                      >
                        Full Name{" "}
                        <span className="text-gold-dark">
                          *
                        </span>
                      </label>

                      <input
                        id="field-name"
                        type="text"
                        autoComplete="name"
                        className={fieldCls("name")}
                        placeholder="Jane Austen"
                        value={data.name}
                        onChange={(event) =>
                          set(
                            "name",
                            event.target.value
                          )
                        }
                        onBlur={() => blur("name")}
                        aria-invalid={
                          !!(
                            touched.name &&
                            errors.name
                          )
                        }
                        aria-describedby={
                          errors.name
                            ? "err-name"
                            : undefined
                        }
                      />

                      {err("name")}
                    </div>

                    {/* EMAIL */}

                    <div>
                      <label
                        htmlFor="field-email"
                        className="field-label"
                      >
                        Email Address{" "}
                        <span className="text-gold-dark">
                          *
                        </span>
                      </label>

                      <input
                        id="field-email"
                        type="email"
                        autoComplete="email"
                        className={fieldCls("email")}
                        placeholder="you@example.com"
                        value={data.email}
                        onChange={(event) =>
                          set(
                            "email",
                            event.target.value
                          )
                        }
                        onBlur={() => blur("email")}
                        aria-invalid={
                          !!(
                            touched.email &&
                            errors.email
                          )
                        }
                        aria-describedby={
                          errors.email
                            ? "err-email"
                            : undefined
                        }
                      />

                      {err("email")}
                    </div>

                    {/* PHONE */}

                    <div>
                      <label
                        htmlFor="field-phone"
                        className="field-label"
                      >
                        Phone Number
                      </label>

                      <input
                        id="field-phone"
                        type="tel"
                        autoComplete="tel"
                        className={fieldCls("phone")}
                        placeholder="+1 (555) 000-0000"
                        value={data.phone}
                        onChange={(event) =>
                          set(
                            "phone",
                            event.target.value
                          )
                        }
                        onBlur={() => blur("phone")}
                        aria-invalid={
                          !!(
                            touched.phone &&
                            errors.phone
                          )
                        }
                        aria-describedby={
                          errors.phone
                            ? "err-phone"
                            : undefined
                        }
                      />

                      {err("phone")}
                    </div>

                    {/* SERVICE */}

                    <div>
                      <label
                        htmlFor="field-service"
                        className="field-label"
                      >
                        Type of Service Required{" "}
                        <span className="text-gold-dark">
                          *
                        </span>
                      </label>

                      <select
                        id="field-service"
                        className={fieldCls("service")}
                        value={data.service}
                        onChange={(event) =>
                          set(
                            "service",
                            event.target.value
                          )
                        }
                        onBlur={() => blur("service")}
                        aria-invalid={
                          !!(
                            touched.service &&
                            errors.service
                          )
                        }
                        aria-describedby={
                          errors.service
                            ? "err-service"
                            : undefined
                        }
                      >
                        <option value="" disabled>
                          Select a service…
                        </option>

                        {SERVICE_OPTIONS.map(
                          (service) => (
                            <option
                              key={service}
                              value={service}
                            >
                              {service}
                            </option>
                          )
                        )}
                      </select>

                      {err("service")}
                    </div>

                    {/* GENRE */}

                    <div>
                      <label
                        htmlFor="field-genre"
                        className="field-label"
                      >
                        Book Genre
                      </label>

                      <select
                        id="field-genre"
                        className="field"
                        value={data.genre}
                        onChange={(event) =>
                          set(
                            "genre",
                            event.target.value
                          )
                        }
                      >
                        <option value="" disabled>
                          Select a genre…
                        </option>

                        {GENRE_OPTIONS.map(
                          (genre) => (
                            <option
                              key={genre}
                              value={genre}
                            >
                              {genre}
                            </option>
                          )
                        )}
                      </select>
                    </div>

                    {/* BUDGET */}

                    <div>
                      <label
                        htmlFor="field-budget"
                        className="field-label"
                      >
                        Estimated Budget
                      </label>

                      <select
                        id="field-budget"
                        className="field"
                        value={data.budget}
                        onChange={(event) =>
                          set(
                            "budget",
                            event.target.value
                          )
                        }
                      >
                        <option value="" disabled>
                          Select a range…
                        </option>

                        {BUDGET_OPTIONS.map(
                          (budget) => (
                            <option
                              key={budget}
                              value={budget}
                            >
                              {budget}
                            </option>
                          )
                        )}
                      </select>
                    </div>

                    {/* DESCRIPTION */}

                    <div className="sm:col-span-2">
                      <div className="flex items-baseline justify-between gap-3">
                        <label
                          htmlFor="field-description"
                          className="field-label"
                        >
                          Project Description{" "}
                          <span className="text-gold-dark">
                            *
                          </span>
                        </label>

                        <span
                          className={cn(
                            "text-[0.6875rem]",
                            data.description.trim()
                              .length >= 20
                              ? "text-success"
                              : "text-ink/35"
                          )}
                        >
                          {
                            data.description.trim()
                              .length
                          }{" "}
                          / 20 min
                        </span>
                      </div>

                      <textarea
                        id="field-description"
                        rows={6}
                        className={cn(
                          fieldCls("description"),
                          "resize-y"
                        )}
                        placeholder="What's the story? Where are you in the journey — idea, outline, draft? What does success look like for this book?"
                        value={data.description}
                        onChange={(event) =>
                          set(
                            "description",
                            event.target.value
                          )
                        }
                        onBlur={() =>
                          blur("description")
                        }
                        aria-invalid={
                          !!(
                            touched.description &&
                            errors.description
                          )
                        }
                        aria-describedby={
                          errors.description
                            ? "err-description"
                            : undefined
                        }
                      />

                      {err("description")}
                    </div>
                  </div>

                  {/* SUBMISSION */}

                  <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                    <Button
                      type="submit"
                      variant="gold"
                      disabled={submitting}
                      className="w-full sm:w-auto"
                      arrow={!submitting}
                    >
                      {submitting
                        ? "Sealing the envelope…"
                        : "Submit Inquiry"}
                    </Button>

                    <p className="text-[0.6875rem] leading-relaxed text-ink/45 sm:max-w-55">
                      NDA-friendly · Free consultation ·
                      No spam, no obligation.
                    </p>
                  </div>

                  {/* SUBMISSION ERROR */}

                  {submitError && (
                    <p
                      role="alert"
                      className="mt-4 rounded-xl border border-red-300 bg-red-50 p-4 text-sm leading-relaxed text-red-700"
                    >
                      {submitError}
                    </p>
                  )}

                  <p className="mt-5 text-[0.625rem] leading-relaxed text-ink/35">
                    Your project details are handled
                    with care. We will review your inquiry
                    and get back to you within two business days.
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
