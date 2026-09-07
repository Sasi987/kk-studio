import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import usePageTitle from "../utils/usePageTitle.js";
import PageHeader from "../components/PageHeader.jsx";
import SafeImage from "../components/SafeImage.jsx";
import Button from "../components/Button.jsx";
import { serviceOptions } from "../data/services.js";
import { BUSINESS } from "../utils/business.js";
import { IMAGES } from "../assets/images/index.js";
import { fadeUp, stagger, viewport } from "../utils/motion.js";

const EMPTY = {
  name: "",
  phone: "",
  email: "",
  service: "",
  date: "",
  time: "",
  message: "",
};

const STEPS = [
  { title: "Request", text: "Share your details and preferred date. Nothing is charged at this stage." },
  { title: "Confirm", text: "We call or message you back to confirm availability and provide a custom quote." },
  { title: "Photograph", text: "We meet at the studio or on location and make something worth keeping." },
];

function validate(values) {
  const errors = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your full name.";
  const digits = values.phone.replace(/\D/g, "");
  if (digits.length < 10) errors.phone = "Please enter a valid 10-digit phone number.";
  if (values.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.service) errors.service = "Please choose a service.";
  return errors;
}

export default function Booking() {
  usePageTitle("Book a Session");
  const [searchParams] = useSearchParams();
  const requested = searchParams.get("service") || "";

  const [values, setValues] = useState(() => ({
    ...EMPTY,
    service: serviceOptions.includes(requested) ? requested : "",
  }));
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const successRef = useRef(null);

  // If the ?service param changes while on the page, reflect it in the form
  useEffect(() => {
    if (requested && serviceOptions.includes(requested)) {
      setValues((v) => ({ ...v, service: requested }));
    }
  }, [requested]);

  // Move focus to the success panel once the request is recorded
  useEffect(() => {
    if (submitted && successRef.current) {
      successRef.current.focus();
    }
  }, [submitted]);

  const today = useMemo(() => new Date().toISOString().split("T")[0], []);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) {
      setErrors((err) => {
        const copy = { ...err };
        delete copy[name];
        return copy;
      });
    }
  };

  const onSubmit = (e) => {
    // No backend is configured — never post to a fake endpoint.
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const first = Object.keys(nextErrors)[0];
      const el = document.getElementById(`field-${first}`);
      if (el) el.focus();
      return;
    }
    setSubmitted(true);
  };

  const whatsappHref = useMemo(() => {
    const lines = [
      "Hello KK Digital Studio, I would like to request a booking.",
      "",
      `Name: ${values.name}`,
      `Phone: ${values.phone}`,
      values.email ? `Email: ${values.email}` : null,
      `Service: ${values.service}`,
      values.date ? `Preferred date: ${values.date}` : null,
      values.time ? `Preferred time: ${values.time}` : null,
      values.message ? `Message: ${values.message}` : null,
    ].filter(Boolean);
    return `${BUSINESS.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
  }, [values]);

  const reset = () => {
    setValues({ ...EMPTY });
    setErrors({});
    setSubmitted(false);
  };

  const field = (name, label, input, hint) => (
    <div className={`field ${errors[name] ? "has-error" : ""}`}>
      <label htmlFor={`field-${name}`}>{label}</label>
      {input}
      {hint && !errors[name] && <span className="form__hint">{hint}</span>}
      {errors[name] && (
        <span className="field__error" id={`error-${name}`} role="alert">
          {errors[name]}
        </span>
      )}
    </div>
  );

  return (
    <>
      <PageHeader
        eyebrow="Booking"
        title={["Let's Create", "Something Timeless."]}
        text="Tell us what you are planning. We respond personally to every request with availability and a custom quote."
        image={IMAGES.bookingHeader}
        imageAlt="Bride and groom during an evening wedding ceremony"
      />

      <section className="section" aria-labelledby="booking-form-title">
        <div className="container">
          <div className="booking__grid">
            <motion.aside className="booking__aside" variants={stagger} initial="hidden" whileInView="show" viewport={viewport}>
              <motion.div className="frame" variants={fadeUp}>
                <SafeImage src={IMAGES.bookingAside} alt="Couple in traditional attire smiling indoors" />
              </motion.div>
              <motion.ol className="booking__steps" variants={fadeUp}>
                {STEPS.map((s, i) => (
                  <li key={s.title} className="booking__step">
                    <span className="booking__step-num">0{i + 1}</span>
                    <div>
                      <b>{s.title}</b>
                      {s.text}
                    </div>
                  </li>
                ))}
              </motion.ol>
              <motion.p className="form__hint" variants={fadeUp}>
                Prefer to talk? Call <a href={BUSINESS.phoneTel} style={{ color: "var(--offwhite)" }}>{BUSINESS.phoneDisplay}</a>.
              </motion.p>
            </motion.aside>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewport}>
              <h2 id="booking-form-title" className="display display--sm" style={{ marginBottom: "2.5rem" }}>
                Request a Booking
              </h2>

              {submitted ? (
                <div className="form__success" ref={successRef} tabIndex={-1} aria-live="polite">
                  <span className="eyebrow">Request Recorded</span>
                  <h3 className="display display--sm">
                    Thank you, <em>{values.name.split(" ")[0]}.</em>
                  </h3>
                  <p className="body-text">
                    Your enquiry has been prepared. Online submission is not yet connected, so please send the request
                    to the studio on WhatsApp with one tap, or call us directly — we will confirm availability and
                    share a custom quote.
                  </p>
                  <div className="form__summary">
                    <div>
                      <span>Service</span>
                      {values.service}
                    </div>
                    {(values.date || values.time) && (
                      <div>
                        <span>Preferred</span>
                        {[values.date, values.time].filter(Boolean).join(" · ")}
                      </div>
                    )}
                    <div>
                      <span>Contact</span>
                      {values.phone}
                      {values.email ? ` · ${values.email}` : ""}
                    </div>
                  </div>
                  <div className="form__success-actions">
                    <Button href={whatsappHref}>Send via WhatsApp</Button>
                    <Button href={BUSINESS.phoneTel} variant="outline" arrow={false}>
                      Call {BUSINESS.phoneDisplay}
                    </Button>
                    <Button onClick={reset} variant="link" arrow={false}>
                      New Request
                    </Button>
                  </div>
                </div>
              ) : (
                <form className="form" onSubmit={onSubmit} noValidate>
                  <div className="form__row">
                    {field(
                      "name",
                      "Full Name *",
                      <input
                        id="field-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={values.name}
                        onChange={onChange}
                        placeholder="Your name"
                        required
                        aria-required="true"
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? "error-name" : undefined}
                      />
                    )}
                    {field(
                      "phone",
                      "Phone *",
                      <input
                        id="field-phone"
                        name="phone"
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        value={values.phone}
                        onChange={onChange}
                        placeholder="10-digit mobile number"
                        required
                        aria-required="true"
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={errors.phone ? "error-phone" : undefined}
                      />
                    )}
                  </div>

                  <div className="form__row">
                    {field(
                      "email",
                      "Email",
                      <input
                        id="field-email"
                        name="email"
                        type="email"
                        inputMode="email"
                        autoComplete="email"
                        value={values.email}
                        onChange={onChange}
                        placeholder="Optional"
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? "error-email" : undefined}
                      />
                    )}
                    {field(
                      "service",
                      "Service *",
                      <select
                        id="field-service"
                        name="service"
                        value={values.service}
                        onChange={onChange}
                        required
                        aria-required="true"
                        aria-invalid={Boolean(errors.service)}
                        aria-describedby={errors.service ? "error-service" : undefined}
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    )}
                  </div>

                  <div className="form__row">
                    {field(
                      "date",
                      "Preferred Date",
                      <input id="field-date" name="date" type="date" min={today} value={values.date} onChange={onChange} />
                    )}
                    {field(
                      "time",
                      "Preferred Time",
                      <input id="field-time" name="time" type="time" value={values.time} onChange={onChange} />
                    )}
                  </div>

                  {field(
                    "message",
                    "Message",
                    <textarea
                      id="field-message"
                      name="message"
                      rows={4}
                      value={values.message}
                      onChange={onChange}
                      placeholder="Venue, number of people, special requests…"
                    />
                  )}

                  <div className="form__footer">
                    <Button type="submit" arrow>
                      Request Booking
                    </Button>
                    <p className="form__hint">
                      * Required. Submitting prepares your enquiry for WhatsApp or a call — no payment is taken online.
                    </p>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
