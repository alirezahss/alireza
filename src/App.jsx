import { motion } from 'framer-motion';
import Section from './components/Section';

const concerns = [
  'You want to look refreshed, not overdone, but fear treatments that look obvious.',
  'Busy schedules make consistent skin care feel impossible to maintain.',
  'Online advice is overwhelming and rarely tailored to your skin, lifestyle, and goals.'
];

const benefits = [
  {
    title: 'Personalized treatment plans',
    text: 'Every recommendation is mapped to your skin profile, timeline, and comfort level.'
  },
  {
    title: 'Science-first approach',
    text: 'We combine medical-grade diagnostics and evidence-based protocols for reliable outcomes.'
  },
  {
    title: 'Natural-looking results',
    text: 'Our philosophy is subtle enhancement so you still look like you, only more radiant.'
  }
];

const process = [
  ['1. Discovery consultation', 'We listen deeply, assess your skin, and define what success looks like for you.'],
  ['2. Precision treatment plan', 'You receive a clear plan with treatment options, timing, and expected milestones.'],
  ['3. Ongoing refinement', 'We track progress and adjust your plan so your results continue to evolve naturally.']
];

const testimonials = [
  {
    quote: 'I finally found a med spa that prioritizes subtle, confidence-boosting results. My skin has never looked healthier.',
    name: 'Danielle R.',
    role: 'Marketing Director'
  },
  {
    quote: 'Their team explained everything clearly and created a plan around my travel schedule. The experience felt truly personalized.',
    name: 'Michael T.',
    role: 'Tech Consultant'
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#f6fbf8] text-slate-800 selection:bg-emerald-200/60">
      <header className="sticky top-0 z-30 border-b border-emerald-100/80 bg-white/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <p className="text-xl font-semibold tracking-tight text-emerald-800">Avira Med Spa</p>
          <a href="#consultation" className="rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-700">
            Book a Free Consultation
          </a>
        </nav>
      </header>

      <main>
        <section className="relative overflow-hidden pb-16 pt-14 sm:pt-24">
          <div className="pointer-events-none absolute -left-16 top-10 h-56 w-56 rounded-full bg-emerald-100 blur-2xl" />
          <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-teal-100 blur-2xl" />

          <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <p className="mb-4 inline-flex rounded-full border border-emerald-200 bg-white px-4 py-1.5 text-sm font-medium text-emerald-700">
                Personalized Aesthetic Wellness in the U.S.
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
                Reveal naturally radiant skin without sacrificing your busy life.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
                Avira Med Spa blends clinical precision with a calm, luxury experience so you can achieve youthful, natural-looking results that fit your lifestyle.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a id="consultation" href="#final-cta" className="rounded-full bg-emerald-600 px-6 py-3 font-medium text-white transition hover:bg-emerald-700">
                  Book a Free Consultation
                </a>
                <a href="#process" className="rounded-full border border-emerald-200 bg-white px-6 py-3 font-medium text-emerald-700 transition hover:border-emerald-300 hover:text-emerald-800">
                  See How It Works
                </a>
              </div>
            </motion.div>

            <motion.div
              className="relative mx-auto w-full max-w-md"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="aspect-[4/5] overflow-hidden rounded-[3rem] border border-white/80 bg-gradient-to-br from-emerald-100 via-white to-teal-100 p-4 shadow-xl shadow-emerald-100/60">
                <img
                  src="https://images.unsplash.com/photo-1623428454614-abaf003d02f6?auto=format&fit=crop&w=1000&q=80"
                  alt="Client receiving skincare treatment"
                  loading="eager"
                  className="h-full w-full rounded-[2.5rem] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        <Section
          id="pain"
          eyebrow="Why clients come to us"
          title="You want results that feel like you—just healthier, brighter, and more confident."
          subtitle="Many of our clients felt stuck between expensive products that underdeliver and aggressive treatments that feel too risky."
        >
          <div className="grid gap-5 md:grid-cols-3">
            {concerns.map((item) => (
              <div key={item} className="rounded-3xl border border-rose-100 bg-rose-50/70 p-6">
                <p className="leading-relaxed text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="benefits"
          eyebrow="Our solution"
          title="A modern med spa experience centered on your goals."
          subtitle="From injectables and skin rejuvenation to long-term skin health strategies, we prioritize precision, transparency, and comfort."
          className="bg-white"
        >
          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map((benefit) => (
              <motion.article
                key={benefit.title}
                whileHover={{ y: -5 }}
                className="rounded-3xl border border-emerald-100 bg-emerald-50/50 p-7 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-slate-900">{benefit.title}</h3>
                <p className="mt-3 text-slate-600">{benefit.text}</p>
              </motion.article>
            ))}
          </div>
        </Section>

        <Section
          id="process"
          eyebrow="How it works"
          title="Simple, supportive, and designed around your schedule."
        >
          <ol className="space-y-5">
            {process.map(([step, text]) => (
              <li key={step} className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
                <h3 className="text-lg font-semibold text-slate-900">{step}</h3>
                <p className="mt-2 text-slate-600">{text}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="testimonials" eyebrow="Client results" title="Trusted by professionals who value subtle excellence." className="bg-white">
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <blockquote key={testimonial.name} className="rounded-3xl border border-teal-100 bg-teal-50/60 p-7">
                <p className="text-lg leading-relaxed text-slate-700">“{testimonial.quote}”</p>
                <footer className="mt-4 text-sm text-slate-500">
                  <span className="font-semibold text-slate-700">{testimonial.name}</span> · {testimonial.role}
                </footer>
              </blockquote>
            ))}
          </div>
        </Section>

        <Section
          id="about"
          eyebrow="Credibility"
          title="Clinical expertise, warm care, and measurable outcomes."
          subtitle="Our licensed aesthetic specialists and medical team have helped hundreds of clients build confidence through intentional, natural-looking enhancements."
        >
          <div className="grid gap-5 sm:grid-cols-3">
            {['Licensed U.S. practitioners', 'Medical-grade technology', 'Custom treatment roadmaps'].map((point) => (
              <div key={point} className="rounded-full border border-emerald-200 bg-white px-6 py-4 text-center font-medium text-emerald-800">
                {point}
              </div>
            ))}
          </div>
        </Section>

        <Section id="final-cta" className="bg-emerald-900 text-white">
          <div className="rounded-[2.5rem] border border-white/20 bg-emerald-800/40 p-8 text-center sm:p-12">
            <h2 className="text-3xl font-semibold sm:text-4xl">Ready to feel confident in your skin again?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-emerald-50/90">
              Book your free consultation and get a personalized, science-driven treatment plan designed around your goals.
            </p>
            <a href="#" className="mt-8 inline-flex rounded-full bg-white px-7 py-3 font-semibold text-emerald-900 transition hover:bg-emerald-50">
              Book a Free Consultation
            </a>
          </div>
        </Section>
      </main>

      <footer className="border-t border-emerald-100 bg-white py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Avira Med Spa. All rights reserved.</p>
          <p>123 Serenity Ave, Suite 210 · (555) 123-8844 · hello@aviramedspa.com</p>
        </div>
      </footer>
    </div>
  );
}
