'use client';

import { motion } from 'framer-motion';
import {
  FaTrophy,
  FaClock,
  FaHeadset,
  FaUsers,
  FaRocket,
  FaShieldAlt,
  FaChartLine,
  FaCertificate,
} from 'react-icons/fa';

const differentials = [
  {
    icon: FaTrophy,
    title: 'SLA 99,9%',
    description: 'Disponibilidade garantida com contrato de responsabilidade',
    color: 'text-yellow-400',
  },
  {
    icon: FaClock,
    title: 'Atendimento 24/7',
    description: 'Suporte técnico sempre disponível, dia e noite',
    color: 'text-blue-400',
  },
  {
    icon: FaHeadset,
    title: 'Suporte Especializado',
    description: 'Equipe técnica experiente e certificada',
    color: 'text-purple-400',
  },
  {
    icon: FaUsers,
    title: 'Equipe Qualificada',
    description: '53 colaboradores altamente treinados e certificados',
    color: 'text-green-400',
  },
  {
    icon: FaRocket,
    title: 'Tecnologia de Ponta',
    description: 'Soluções com tecnologias de última geração',
    color: 'text-orange-400',
  },
  {
    icon: FaShieldAlt,
    title: 'Alta Confiabilidade',
    description: 'Histórico de sucesso em contratos críticos',
    color: 'text-red-400',
  },
  {
    icon: FaChartLine,
    title: 'Gestão de Projetos',
    description: 'Metodologia profissional e transparente',
    color: 'text-indigo-400',
  },
  {
    icon: FaCertificate,
    title: 'Certificações',
    description: 'Certificadas em padrões de segurança e qualidade',
    color: 'text-pink-400',
  },
];

interface DifferentialCardProps {
  icon: React.ComponentType<{ className: string }>;
  title: string;
  description: string;
  color: string;
  index: number;
}

function DifferentialCard({ icon: Icon, title, description, color, index }: DifferentialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.05 * index, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-2xl border border-accent/20 bg-secondary/40 backdrop-blur-xl p-6 h-full hover:border-accent/50 transition-all duration-300">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

        {/* Content */}
        <div className="relative">
          <Icon className={`${color} text-3xl mb-4 group-hover:scale-110 transition-transform duration-300`} />
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>

        {/* Neon glow effect */}
        <div className={`absolute -bottom-1 -right-1 w-20 h-20 ${color.replace('text', 'bg')}/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-300`} />
      </div>
    </motion.div>
  );
}

export default function DifferentialsSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Por que escolher a <span className="text-accent">SFD Tech</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Diferenciais que garantem sua tranquilidade
          </p>
        </motion.div>

        {/* Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {differentials.map((diff, index) => (
            <DifferentialCard key={diff.title} {...diff} index={index} />
          ))}
        </div>

        {/* Trust Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="p-8 rounded-2xl border border-accent/20 bg-gradient-to-r from-accent/10 to-blue-500/10 backdrop-blur-xl text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Confiança de mais de 200 clientes
          </h3>
          <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
            Desde 2008, a SFD Tech fornece soluções de infraestrutura crítica para instituições públicas, privadas e hospitalares em todo o Brasil.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <div className="px-6 py-2 rounded-full bg-accent/20 border border-accent/50">
              <span className="text-accent font-semibold">18 anos</span>
            </div>
            <div className="px-6 py-2 rounded-full bg-accent/20 border border-accent/50">
              <span className="text-accent font-semibold">200+ projetos</span>
            </div>
            <div className="px-6 py-2 rounded-full bg-accent/20 border border-accent/50">
              <span className="text-accent font-semibold">0 perdas críticas</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
