import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function Section({ id, eyebrow, title, subtitle, children, className = '' }) {
  return (
    <section id={id} className={`relative py-20 sm:py-24 ${className}`}>
      <motion.div
        className="mx-auto max-w-6xl px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        {(eyebrow || title || subtitle) && (
          <div className="mb-10 max-w-3xl">
            {eyebrow && <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">{eyebrow}</p>}
            {title && <h2 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">{title}</h2>}
            {subtitle && <p className="mt-4 text-lg leading-relaxed text-slate-600">{subtitle}</p>}
          </div>
        )}
        {children}
      </motion.div>
    </section>
  );
}
