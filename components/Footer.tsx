'use client';

import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaGithub, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="relative border-t border-accent/20 bg-gradient-to-b from-primary to-secondary">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
          >
            {/* Company Info */}
            <motion.div variants={itemVariants}>
              <h3 className="text-white font-bold mb-4 flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-accent to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">S</span>
                </div>
                <span>SFD Tech</span>
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Infraestrutura crítica para um mundo que não pode parar.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                  <FaLinkedin size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                  <FaGithub size={20} />
                </a>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants}>
              <h4 className="text-white font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#services" className="hover:text-accent transition-colors">
                    UPS e Nobreaks
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-accent transition-colors">
                    Data Centers
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-accent transition-colors">
                    Monitoramento
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-accent transition-colors">
                    Redes Corporativas
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div variants={itemVariants}>
              <h4 className="text-white font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#about" className="hover:text-accent transition-colors">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="hover:text-accent transition-colors">
                    Portfólio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-accent transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div variants={itemVariants}>
              <h4 className="text-white font-semibold mb-4">Contato</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start space-x-3">
                  <FaMapMarkerAlt className="text-accent mt-1 flex-shrink-0" />
                  <span>Brusque, Santa Catarina, Brasil</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaPhone className="text-accent flex-shrink-0" />
                  <a href="tel:+5547" className="hover:text-accent transition-colors">
                    +55 (47) XXXX-XXXX
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <FaEnvelope className="text-accent flex-shrink-0" />
                  <a href="mailto:contato@sfdtech.com.br" className="hover:text-accent transition-colors">
                    contato@sfdtech.com.br
                  </a>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            className="h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent my-8 origin-left"
          />

          {/* Bottom */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400"
          >
            <p>&copy; {currentYear} System For Down Tech. Todos os direitos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-accent transition-colors">
                Privacidade
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Termos
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Cookies
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
