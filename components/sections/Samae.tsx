'use client';

import { motion } from 'framer-motion';
import { FaCheckCircle, FaShieldAlt, FaTachometerAlt, FaHeartbeat, FaDatabase } from 'react-icons/fa';

export default function SamaeSection() {
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

  const benefits = [
    {
      icon: FaCheckCircle,
      title: 'Eliminação de Quedas',
      description: 'Sistema 100% redundante que elimina qualquer possibilidade de interrupção de energia',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: FaShieldAlt,
      title: 'Proteção de Dados',
      description: 'Backup contínuo e proteção contra perda de dados críticos da instituição',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FaTachometerAlt,
      title: 'Performance',
      description: 'Monitoramento contínuo garantindo performance máxima dos sistemas',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: FaHeartbeat,
      title: 'Continuidade Operacional',
      description: 'Operação ininterrupta 24/7 com SLA de 99,9% de disponibilidade',
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: FaDatabase,
      title: 'Monitoramento em Tempo Real',
      description: 'Dashboard inteligente com alertas automáticos e controle remoto',
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <section id="samae" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
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
            <div className="inline-block px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 backdrop-blur-sm mb-4">
              <span className="text-green-400 text-sm font-semibold">🏛️ Projeto Especial</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Solução para <span className="text-green-400">SAMAE Brusque</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Fornecimento e instalação de sistema completo de energia com redundância, monitoramento inteligente e suporte especializado
            </p>
          </motion.div>

          {/* Solution Overview */}
          <motion.div
            variants={itemVariants}
            className="mb-16 p-8 rounded-2xl border border-green-500/30 bg-gradient-to-r from-green-500/10 to-cyan-500/10 backdrop-blur-xl"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Solução Proposta</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="text-accent font-semibold flex items-center space-x-2">
                  <FaCheckCircle />
                  <span>Componentes Principais</span>
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <span className="text-green-400">✓</span>
                    <span>2 Nobreaks UPS corporativos (20 kVA cada)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-400">✓</span>
                    <span>Sistema ATS automático de transferência</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-400">✓</span>
                    <span>Software avançado de monitoramento</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-400">✓</span>
                    <span>Instalação elétrica completa</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-400">✓</span>
                    <span>Treinamento especializado da equipe</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="text-accent font-semibold flex items-center space-x-2">
                  <FaShieldAlt />
                  <span>Recursos Avançados</span>
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <span className="text-green-400">✓</span>
                    <span>Sincronização automática de fase</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-400">✓</span>
                    <span>Proteção contra picos de tensão</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-400">✓</span>
                    <span>Monitoramento preditivo com IA</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-400">✓</span>
                    <span>Suporte técnico 24/7</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-400">✓</span>
                    <span>Manutenção preventiva incluída</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div variants={itemVariants} className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Benefícios Esperados</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * index }}
                    className="group"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${benefit.color} rounded-xl blur-lg opacity-0 group-hover:opacity-40 transition-all duration-300`} />
                    <div className="relative bg-secondary/40 backdrop-blur-xl border border-accent/20 rounded-xl p-6 h-full hover:border-green-500/50 transition-all duration-300">
                      <Icon className="text-2xl text-accent mb-3" />
                      <h4 className="text-white font-semibold mb-2">{benefit.title}</h4>
                      <p className="text-gray-400 text-sm">{benefit.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* ROI Section */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-accent/20"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
              <p className="text-gray-400">Disponibilidade Garantida</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">24/7</div>
              <p className="text-gray-400">Suporte Especializado</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">0</div>
              <p className="text-gray-400">Risco de Perda de Dados</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
