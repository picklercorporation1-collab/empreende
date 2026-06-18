'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'SAMAE', href: '#samae' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-primary/95 backdrop-blur-md border-b border-accent/20'
          : 'bg-transparent'
      }`}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center space-x-2 group">
                <div className="relative w-10 h-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-blue-500 rounded-lg blur-sm group-hover:blur-md transition-all" />
                  <div className="relative bg-primary rounded-lg w-full h-full flex items-center justify-center">
                    <span className="text-accent font-bold text-lg">S</span>
                  </div>
                </div>
                <span className="hidden sm:inline text-white font-bold text-lg group-hover:text-accent transition-colors">
                  SFD Tech
                </span>
              </Link>
              <div className="hidden md:flex flex-col text-right">
                <span className="text-white font-semibold text-sm">Gabriel Pickler</span>
                <span className="text-gray-300 text-xs">CEO</span>
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 1) }}
                className="text-gray-300 hover:text-accent transition-colors relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-transparent group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="hidden md:block"
          >
            <a
              href="#contact"
              className="px-6 py-2 bg-gradient-to-r from-accent to-blue-500 text-primary rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Solicitar Proposta
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-accent hover:text-blue-400 transition-colors"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.nav
          initial={false}
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="px-4 py-4 space-y-4 border-t border-accent/20">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-gray-300 hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block w-full px-4 py-2 bg-gradient-to-r from-accent to-blue-500 text-primary rounded-lg font-semibold text-center"
              onClick={() => setIsOpen(false)}
            >
              Solicitar Proposta
            </a>
          </div>
        </motion.nav>
      </div>
    </motion.header>
  );
}
