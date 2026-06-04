'use client';

import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface CounterProps {
  target: number;
  label: string;
  suffix?: string;
}

function Counter({ target, label, suffix = '' }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <div ref={ref} className="text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-accent mb-2"
      >
        {count}
        {suffix}
      </motion.div>
      <p className="text-gray-400">{label}</p>
    </div>
  );
}

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Sobre a <span className="text-accent">SFD Tech</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              18 anos de excelência em infraestrutura crítica e proteção tecnológica
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                A <span className="text-accent font-semibold">System For Down Tech</span> é uma empresa especializada em soluções de infraestrutura crítica com 18 anos de experiência no mercado. Nossa equipe de 53 colaboradores altamente qualificados trabalha para garantir a continuidade operacional dos nossos clientes.
              </p>

              <p className="text-gray-300 leading-relaxed">
                Com presença em mais de 15 cidades e um histórico comprovado em contratos públicos, a SFD Tech se destaca pela entrega de soluções personalizadas, suporte 24/7 e tecnologias de última geração.
              </p>

              <div className="pt-4 space-y-3">
                <h3 className="text-white font-semibold text-lg">Nossa Missão</h3>
                <p className="text-gray-400">
                  Fornecer soluções tecnológicas e energéticas de alta disponibilidade para garantir a continuidade operacional dos clientes.
                </p>
              </div>

              <div className="pt-4 space-y-3">
                <h3 className="text-white font-semibold text-lg">Nossa Visão</h3>
                <p className="text-gray-400">
                  Ser referência nacional em infraestrutura crítica, monitoramento inteligente e proteção de ambientes tecnológicos.
                </p>
              </div>
            </motion.div>

            {/* Values Grid */}
            <motion.div variants={itemVariants}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: 'Excelência', icon: '⭐' },
                  { title: 'Transparência', icon: '🔍' },
                  { title: 'Inovação', icon: '💡' },
                  { title: 'Comprometimento', icon: '🎯' },
                  { title: 'Ética', icon: '✓' },
                  { title: 'Responsabilidade', icon: '📋' },
                  { title: 'Família', icon: '👥' },
                  { title: 'Respeito', icon: '🤝' },
                ].map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * index }}
                    className="p-4 rounded-lg border border-accent/30 bg-accent/5 hover:bg-accent/10 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="text-2xl mb-2">{value.icon}</div>
                    <p className="text-white font-semibold group-hover:text-accent transition-colors">
                      {value.title}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Statistics */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-5 gap-8 py-12 border-t border-b border-accent/20"
          >
            <Counter target={18} label="Anos de Mercado" />
            <Counter target={53} label="Colaboradores" />
            <Counter target={200} label="Projetos" suffix="+" />
            <Counter target={99} label="Disponibilidade %" suffix=".9%" />
            <Counter target={15} label="Cidades Atendidas" suffix="+" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
