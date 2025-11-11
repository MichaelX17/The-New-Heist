import React from 'react';
import CountdownCircle from './components/CountdownCircle';
import ArticleSection from './components/ArticleSection';
import { motion } from 'framer-motion';

export default function App() {
  return (
    <div className="min-h-screen app-bg relative">
      {/* capa translúcida rosada encima del fondo */}
      <div className="absolute inset-0 bg-[rgba(255,77,166,0.25)] mix-blend-overlay"></div>
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen py-24 px-6">
        <motion.header
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="mb-8 text-center"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold neon-text">The Next Heist</h1>
          <h2 className="text-4xl sm:text-5xl font-extrabold neon-text">Countdown</h2>
          <p className="mt-2 text-white/70">19 / 11 / 2026</p>
        </motion.header>

        <section className="w-full flex flex-col items-center gap-6">
          <CountdownCircle />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-6 text-center max-w-2xl"
          >
          </motion.div>
        </section>
      </main>

      {/* se transición suave al pasar al artículo */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10"
      >
        <ArticleSection />
      </motion.div>

      {/* decoración inferior */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 to-transparent"></div>
    </div>
  );
}
