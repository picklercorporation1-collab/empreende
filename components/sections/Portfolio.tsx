'use client';

import { motion } from 'framer-motion';
import { FaImage } from 'react-icons/fa';
import { useState } from 'react';

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  results: string[];
}

const projects: ProjectItem[] = [
  {
    id: '1',
    title: 'Centro Administrativo Municipal',
    category: 'Público',
    description: 'Implementação de sistema de energia redundante para prefeitura',
    image: 'bg-gradient-to-br from-blue-500 to-cyan-500',
    results: ['99.9% Uptime', 'Zero Perdas de Dados', 'Economia de 30%'],
  },
  {
    id: '2',
    title: 'Hospital Regional',
    category: 'Saúde',
    description: 'Sistema crítico de proteção de energia para UTI',
    image: 'bg-gradient-to-br from-red-500 to-pink-500',
    results: ['Vida Salva', 'Equipamentos Protegidos', 'Monitoramento 24/7'],
  },
  {
    id: '3',
    title: 'Estação de Tratamento de Água',
    category: 'Infraestrutura',
    description: 'Infraestrutura de rede e monitoramento SCADA',
    image: 'bg-gradient-to-br from-green-500 to-teal-500',
    results: ['Produção Contínua', 'Qualidade Garantida', '+15% Eficiência'],
  },
  {
    id: '4',
    title: 'Data Center Corporativo',
    category: 'Tecnologia',
    description: 'Solução completa de infraestrutura para data center',
    image: 'bg-gradient-to-br from-purple-500 to-indigo-500',
    results: ['500+ Servidores', 'Redundância Total', 'Backup 24/7'],
  },
  {
    id: '5',
    title: 'Banco de Dados Regional',
    category: 'Financeiro',
    description: 'Sistema de proteção e monitoramento financeiro',
    image: 'bg-gradient-to-br from-yellow-500 to-orange-500',
    results: ['Segurança Total', 'Conformidade LGPD', 'Auditoria Contínua'],
  },
  {
    id: '6',
    title: 'Campus Universitário',
    category: 'Educação',
    description: 'Rede corporativa e sistema de monitoramento educacional',
    image: 'bg-gradient-to-br from-pink-500 to-rose-500',
    results: ['10+ Prédios', '5000+ Usuários', 'Educação Sem Limites'],
  },
];

export default function PortfolioSection() {
  const [filter, setFilter] = useState<string | null>(null);
  const categories = ['Público', 'Saúde', 'Infraestrutura', 'Tecnologia', 'Financeiro', 'Educação'];

  const filteredProjects = filter
    ? projects.filter((p) => p.category === filter)
    : projects;

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
    <section id="portfolio" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nosso <span className="text-accent">Portfólio</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Projetos realizados com sucesso em diferentes segmentos
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <button
            onClick={() => setFilter(null)}
            className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
              filter === null
                ? 'bg-gradient-to-r from-accent to-blue-500 text-primary'
                : 'border border-accent/30 text-gray-300 hover:border-accent/50'
            }`}
          >
            Todos
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                filter === cat
                  ? 'bg-gradient-to-r from-accent to-blue-500 text-primary'
                  : 'border border-accent/30 text-gray-300 hover:border-accent/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group cursor-pointer"
            >
              <div className="relative h-80 rounded-2xl overflow-hidden mb-4">
                {/* Background */}
                <div className={`absolute inset-0 ${project.image}`} />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-300" />

                {/* Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-20 h-20 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center backdrop-blur-sm">
                    <FaImage className="text-3xl text-accent" />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-accent/20 border border-accent/50 backdrop-blur-sm">
                  <span className="text-accent text-xs font-semibold">{project.category}</span>
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3">{project.description}</p>

                {/* Results */}
                <div className="flex flex-wrap gap-2">
                  {project.results.map((result, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent"
                    >
                      {result}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <p className="text-gray-400 mb-4">Quer fazer parte dos nossos sucessos?</p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-accent to-blue-500 text-primary rounded-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            Iniciar Projeto
          </a>
        </motion.div>
      </div>
    </section>
  );
}
