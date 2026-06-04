'use client';

import { motion } from 'framer-motion';

const technologies = [
  {
    name: 'IoT',
    description: 'Internet das Coisas para monitoramento inteligente',
    icon: '📱',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Cloud Computing',
    description: 'Infraestrutura em nuvem escalável e segura',
    icon: '☁️',
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Inteligência Artificial',
    description: 'IA para análise preditiva e automação',
    icon: '🤖',
    color: 'from-orange-500 to-red-500',
  },
  {
    name: 'Monitoramento Preditivo',
    description: 'Análise avançada para antecipar problemas',
    icon: '🔮',
    color: 'from-green-500 to-teal-500',
  },
  {
    name: 'Redes Inteligentes',
    description: 'SDN e virtualização de rede',
    icon: '🌐',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    name: 'Data Analytics',
    description: 'Análise de dados em tempo real',
    icon: '📊',
    color: 'from-indigo-500 to-purple-500',
  },
];

export default function TechnologiesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tecnologias de <span className="text-accent">Última Geração</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Implementamos as soluções mais avançadas do mercado
          </p>
        </motion.div>

        {/* Technologies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              className="group"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-all duration-300`} />

              <div className="relative bg-secondary/40 backdrop-blur-xl border border-accent/20 rounded-2xl p-8 h-full hover:border-accent/50 transition-all duration-300">
                <div className="text-5xl mb-4">{tech.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{tech.name}</h3>
                <p className="text-gray-400 text-sm">{tech.description}</p>

                {/* Animated bars */}
                <div className="mt-6 space-y-2">
                  <div className="h-1 bg-gradient-to-r from-accent to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500" style={{ animation: 'pulse 2s infinite' }} />
                  <div className="h-1 bg-gradient-to-r from-accent to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500" style={{ animation: 'pulse 2s infinite 0.2s' }} />
                  <div className="h-1 bg-gradient-to-r from-accent to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500" style={{ animation: 'pulse 2s infinite 0.4s' }} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Integration Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16 p-8 rounded-2xl border border-accent/20 bg-secondary/40 backdrop-blur-xl"
        >
          <p className="text-gray-300 mb-4">
            Todas as tecnologias são integradas em uma plataforma única e centralizada
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm">API RESTful</span>
            <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm">Webhooks</span>
            <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm">MQTT</span>
            <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm">WebSocket</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
