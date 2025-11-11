import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const TARGET = new Date("2026-11-19T00:00:00Z");
const START_DATE = new Date("2025-11-06T00:00:00Z");

// 🎌 Sistema de internacionalización
const translations = {
  en: {
    days: "days",
    hours: "hours", 
    minutes: "minutes",
    seconds: "seconds"
  },
  es: {
    days: "días",
    hours: "horas",
    minutes: "minutos", 
    seconds: "segundos"
  },
  fr: {
    days: "jours",
    hours: "heures",
    minutes: "minutes",
    seconds: "secondes"
  },
  de: {
    days: "tage",
    hours: "stunden",
    minutes: "minuten",
    seconds: "sekunden"
  },
  it: {
    days: "giorni",
    hours: "ore",
    minutes: "minuti",
    seconds: "secondi"
  },
  pt: {
    days: "dias",
    hours: "horas",
    minutes: "minutos",
    seconds: "segundos"
  }
};

// 🎯 Función para detectar el idioma del usuario
type SupportedLang = keyof typeof translations;

function getUserLanguage(): SupportedLang {
  if (typeof window === 'undefined') return 'en'; // Para SSR

  const browserLang = (typeof navigator !== 'undefined' ? navigator.language : 'en') || 'en';
  const primaryLang = browserLang.split('-')[0];

  return (primaryLang in translations) ? (primaryLang as SupportedLang) : 'en';
}

function getTimeData(target: Date) {
  const now = new Date();
  const diff = Math.max(0, target.getTime() - now.getTime());

  return {
    total: diff,
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    fracHours: (diff / (1000 * 60 * 60)) % 24,
    fracMinutes: (diff / (1000 * 60)) % 60,
    fracSeconds: (diff / 1000) % 60,
  };
}

/* 🌀 Círculo genérico con su propio blur */
function ProgressCircle({
  value,
  max,
  label,
  size = 140,
  gradientId,
}: {
  value: number;
  max: number;
  label: string;
  size?: number;
  gradientId: string;
}) {
  const radius = 65;
  const stroke = 10;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const progress = Math.min(1, Math.max(0, value / max));
  const strokeDashoffset = circumference * (1 - progress);

  const spring = useSpring(strokeDashoffset, { stiffness: 80, damping: 25 });
  useEffect(() => {
    spring.set(strokeDashoffset);
  }, [strokeDashoffset, spring]);

  const fmt = (n: number) => String(Math.floor(n)).padStart(2, "0");

  return (
    <motion.div
      className="relative flex flex-col items-center justify-center rounded-full 
                 bg-white/10 backdrop-blur-lg border border-white/20 
                 shadow-[0_0_25px_rgba(255,255,255,0.1)] p-3 sm:p-4"
      animate={{ scale: [1, 1.03, 1] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg viewBox="0 0 160 160" width={size} height={size}>
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF4DA6" />
            <stop offset="50%" stopColor="#8A3FFC" />
            <stop offset="100%" stopColor="#00C2FF" />
          </linearGradient>
          <filter id={`glow-${gradientId}`}>
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g transform="translate(80,80) rotate(-90)">
          <circle
            r={normalizedRadius}
            fill="none"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth={stroke}
          />
          <motion.circle
            r={normalizedRadius}
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            style={{ strokeDashoffset: spring, filter: `url(#glow-${gradientId})` }}
          />
        </g>
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <div className="text-xl sm:text-2xl font-extrabold text-white drop-shadow-lg">
          {fmt(value)}
        </div>
        <div className="text-xs sm:text-sm uppercase tracking-wider font-bold text-white/80">
          {label}
        </div>
      </div>
    </motion.div>
  );
}

export default function CountdownCircle() {
  const [time, setTime] = useState(() => getTimeData(TARGET));
  const [language, setLanguage] = useState<SupportedLang>('en'); // Idioma por defecto

  // 🌐 Detectar idioma al cargar el componente
  useEffect(() => {
    const userLanguage = getUserLanguage();
    setLanguage(userLanguage);
  }, []);

  const t = translations[language]; // Textos traducidos

  useEffect(() => {
    let frameId: number;
    const update = () => {
      setTime(getTimeData(TARGET));
      frameId = requestAnimationFrame(update);
    };
    frameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frameId);
  }, []);

  const totalDuration = TARGET.getTime() - START_DATE.getTime();
  const elapsed = totalDuration - time.total;
  const progress = Math.min(1, Math.max(0, elapsed / totalDuration));

  const radius = 90;
  const stroke = 12;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference * (1 - progress);

  const spring = useSpring(strokeDashoffset, { stiffness: 60, damping: 15 });
  useEffect(() => {
    spring.set(strokeDashoffset);
  }, [strokeDashoffset, spring]);

  return (
    <div className="flex flex-col items-center justify-center mt-8 gap-10 sm:gap-12">

      {/* 🪩 Círculo principal - TAMAÑO AUMENTADO 50% */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative flex flex-col items-center justify-center rounded-full 
                   bg-white/10 backdrop-blur-lg border border-white/20 
                   shadow-[0_0_25px_rgba(255,255,255,0.1)]
                   w-[300px] h-[300px] sm:w-[390px] sm:h-[390px] lg:w-[350px] lg:h-[350px]" // Aumentado ~50%
      >
        <svg viewBox="0 0 240 240" width="100%" height="100%">
          <defs>
            <linearGradient id="daysGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF4DA6" />
              <stop offset="50%" stopColor="#8A3FFC" />
              <stop offset="100%" stopColor="#00C2FF" />
            </linearGradient>
            <filter id="daysGlow">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <g transform="translate(120,120) rotate(-90)">
            <circle
              r={normalizedRadius}
              fill="none"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth={stroke}
            />
            <motion.circle
              r={normalizedRadius}
              fill="none"
              stroke="url(#daysGradient)"
              strokeWidth={stroke}
              strokeLinecap="round"
              strokeDasharray={circumference}
              style={{ strokeDashoffset: spring, filter: "url(#daysGlow)" }}
            />
          </g>
        </svg>

        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-center"
        >
          {/* TEXTO AUMENTADO ~50% */}
          <div className="text-5xl sm:text-7xl lg:text-8xl font-extrabold text-white drop-shadow-2xl">
            {time.days}
          </div>
          <div className="text-base sm:text-lg uppercase tracking-widest font-bold text-white/80">
            {t.days}
          </div>
        </motion.div>
      </motion.div>

      {/* ⏰ Círculos secundarios con su propio fondo */}
      <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
        <ProgressCircle value={time.fracHours} max={24} label={t.hours} gradientId="grad-hours" />
        <ProgressCircle value={time.fracMinutes} max={60} label={t.minutes} gradientId="grad-mins" />
        <ProgressCircle value={time.fracSeconds} max={60} label={t.seconds} gradientId="grad-secs" />
      </div>
    </div>
  );
}