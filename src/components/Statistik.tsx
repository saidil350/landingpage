"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 25, unit: "TAHUN", label: "PENGALAMAN INDUSTRI" },
  { value: 500, unit: "+", label: "KLIEN TRUSTED" },
  { value: 50, unit: "JUTA", label: "PRODUKSI/TAHUN" },
  { value: 15, unit: "", label: "CERTIFIED INTERNATIONAL" },
];

// Counter animation component
const Counter = ({ value, duration = 2 }: { value: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let startValue = 0;
      const endValue = value;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

        setCount(startValue + (endValue - startValue) * progress);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(endValue);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count.toFixed(value % 1 === 0 ? 0 : 1)}</span>;
};

const Statistik = () => {
  return (
    <section className="section-padding bg-secondary text-white overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white opacity-[0.02] transform translate-x-1/2 -skew-x-12" />

      {/* Pattern background */}
      <div className="absolute inset-0 bg-pattern-dots opacity-5" />

      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="flex items-baseline justify-center md:justify-start gap-1 mb-4">
                <span className="text-6xl md:text-7xl font-bold group-hover:text-primary transition-colors">
                  <Counter value={stat.value} />
                </span>
                <span className="text-2xl font-light text-white/80">{stat.unit}</span>
              </div>
              <p className="text-sm font-bold tracking-[0.2em] text-white/60 uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Info / Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-24 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <h3 className="text-3xl md:text-4xl text-white font-medium italic max-w-3xl leading-snug">
            "Kami berkomitmen menyediakan solusi kemasan plastik berkualitas tinggi dengan menjunjung tinggi nilai-nilai Islam dalam setiap aspek operasional."
          </h3>
          <div className="h-px w-24 bg-primary hidden lg:block" />
        </motion.div>
      </div>
    </section>
  );
};

export default Statistik;
