'use client';

import { motion } from 'framer-motion';
import { FaArrowRight, FaPlay } from 'react-icons/fa';
import Link from 'next/link';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6 flex justify-center">
            <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 backdrop-blur-sm">
              <span className="text-accent text-sm font-semibold">🚀 Tecnologia Avançada</span>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Infraestrutura crítica para um mundo que
            <span className="block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">
                não pode parar
              </span>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Soluções completas em energia, monitoramento e proteção tecnológica para órgãos públicos e empresas. 18 anos de experiência garantindo continuidade operacional.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <a
              href="#contact"
              className="group px-8 py-4 bg-gradient-to-r from-accent to-blue-500 text-primary rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 hover:scale-105"
            >
              <span>Solicitar Proposta</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="px-8 py-4 border border-accent/50 text-accent rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-accent/10 transition-all duration-300"
            >
              <FaPlay size={16} />
              <span>Conhecer Soluções</span>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto py-8 border-t border-accent/20"
          >
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent">18</div>
              <p className="text-gray-400 text-sm">Anos de Mercado</p>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent">53</div>
              <p className="text-gray-400 text-sm">Colaboradores</p>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent">99.9%</div>
              <p className="text-gray-400 text-sm">Disponibilidade</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating element */}
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="text-accent opacity-50 animate-bounce">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
