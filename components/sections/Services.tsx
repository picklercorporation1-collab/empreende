'use client';

import { motion } from 'framer-motion';
import {
  FaLightbulb,
  FaProjectDiagram,
  FaChartLine,
  FaNetworkWired,
  FaServer,
  FaClipboardList,
  FaCheck,
} from 'react-icons/fa';
import { Service } from '@/types';

const services: Service[] = [
  {
    id: 'ups',
    title: 'UPS e Nobreaks',
    description: 'Sistemas de Nobreak corporativos para proteção contra quedas de energia',
    icon: '⚡',
    features: ['Instalação profissional', 'Configuração avançada', 'Manutenção preventiva'],
    color: 'from-yellow-500 to-orange-500',
  },
  {
    id: 'ats',
    title: 'Sistema ATS',
    description: 'Transferência Automática de Fonte com redundância total',
    icon: '🔄',
    features: ['Comutação automática', 'Proteção de circuitos', 'Sincronização de fase'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'monitoring',
    title: 'Monitoramento Inteligente',
    description: 'Dashboards em tempo real com alertas inteligentes e controle remoto',
    icon: '📊',
    features: ['Alertas em tempo real', 'Dashboards customizáveis', 'API avançada'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'networks',
    title: 'Redes Corporativas',
    description: 'Infraestrutura de rede de alta performance e confiabilidade',
    icon: '🌐',
    features: ['Cabeamento estruturado', 'Switches gerenciados', 'Redundância'],
    color: 'from-green-500 to-teal-500',
  },
  {
    id: 'datacenters',
    title: 'Data Centers',
    description: 'Infraestrutura completa com redundância e backup automático',
    icon: '🗄️',
    features: ['Ar condicionado dedicado', 'Backup 24/7', 'Segurança física'],
    color: 'from-red-500 to-pink-500',
  },
  {
    id: 'consulting',
    title: 'Consultoria Pública',
    description: 'Projetos especializados para prefeituras, SAMAE e autarquias',
    icon: '📋',
    features: ['Licitações públicas', 'Planejamento estratégico', 'Implementação completa'],
    color: 'from-indigo-500 to-purple-500',
  },
];

interface ServiceCardProps extends Service {
  index: number;
}

function ServiceCard({ title, description, icon, features, color, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index, duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="group relative h-full"
    >
      <div className={`absolute inset-0 bg-gradient-to-r ${color} rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-all duration-300`} />

      <div className="relative bg-secondary/40 backdrop-blur-xl border border-accent/20 rounded-2xl p-8 h-full hover:border-accent/50 transition-all duration-300">
        {/* Icon */}
        <div className="text-5xl mb-4">{icon}</div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-6 leading-relaxed">{description}</p>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center space-x-2 text-gray-300 text-sm">
              <FaCheck className="text-accent flex-shrink-0" size={12} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          className={`w-full py-2 px-4 rounded-lg bg-gradient-to-r ${color} text-white font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-4`}
        >
          Saiba Mais
        </button>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="services" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Nossos <span className="text-accent">Serviços</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Soluções completas em infraestrutura crítica, monitoramento e proteção tecnológica
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} {...service} index={index} />
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-16"
          >
            <p className="text-gray-400 mb-4">Procurando uma solução específica?</p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-accent to-blue-500 text-primary rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Solicitar Consultoria
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
