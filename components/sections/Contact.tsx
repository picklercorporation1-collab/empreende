'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { useState } from 'react';
import emailjs from 'emailjs-com';

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Initialize EmailJS (use a public key or set environment variable)
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'default_key');

      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_default',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_default',
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company,
          phone: formData.phone,
          message: formData.message,
          to_email: 'contato@sfdtech.com.br',
        }
      );

      if (response.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', company: '', email: '', phone: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden">
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
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Vamos trabalhar <span className="text-accent">juntos</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Entre em contato conosco para discutir sua solução de infraestrutura crítica
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Email */}
              <div className="p-6 rounded-2xl border border-accent/20 bg-secondary/40 backdrop-blur-xl hover:border-accent/50 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                    <FaEnvelope className="text-accent text-lg" />
                  </div>
                  <h3 className="text-white font-semibold">Email</h3>
                </div>
                <a href="mailto:contato@sfdtech.com.br" className="text-gray-400 hover:text-accent transition-colors">
                  contato@sfdtech.com.br
                </a>
              </div>

              {/* Phone */}
              <div className="p-6 rounded-2xl border border-accent/20 bg-secondary/40 backdrop-blur-xl hover:border-accent/50 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                    <FaPhone className="text-accent text-lg" />
                  </div>
                  <h3 className="text-white font-semibold">Telefone</h3>
                </div>
                <a href="tel:+5547" className="text-gray-400 hover:text-accent transition-colors">
                  +55 (47) XXXX-XXXX
                </a>
              </div>

              {/* Location */}
              <div className="p-6 rounded-2xl border border-accent/20 bg-secondary/40 backdrop-blur-xl hover:border-accent/50 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                    <FaMapMarkerAlt className="text-accent text-lg" />
                  </div>
                  <h3 className="text-white font-semibold">Localização</h3>
                </div>
                <p className="text-gray-400">Brusque - Santa Catarina, Brasil</p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Name */}
                  <input
                    type="text"
                    name="name"
                    placeholder="Seu Nome"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 bg-secondary/40 backdrop-blur-xl border border-accent/20 rounded-lg text-white placeholder-gray-500 focus:border-accent focus:outline-none transition-all duration-300"
                  />

                  {/* Company */}
                  <input
                    type="text"
                    name="company"
                    placeholder="Sua Empresa"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 bg-secondary/40 backdrop-blur-xl border border-accent/20 rounded-lg text-white placeholder-gray-500 focus:border-accent focus:outline-none transition-all duration-300"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Email */}
                  <input
                    type="email"
                    name="email"
                    placeholder="Seu Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 bg-secondary/40 backdrop-blur-xl border border-accent/20 rounded-lg text-white placeholder-gray-500 focus:border-accent focus:outline-none transition-all duration-300"
                  />

                  {/* Phone */}
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Seu Telefone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="px-4 py-3 bg-secondary/40 backdrop-blur-xl border border-accent/20 rounded-lg text-white placeholder-gray-500 focus:border-accent focus:outline-none transition-all duration-300"
                  />
                </div>

                {/* Message */}
                <textarea
                  name="message"
                  placeholder="Sua mensagem"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-secondary/40 backdrop-blur-xl border border-accent/20 rounded-lg text-white placeholder-gray-500 focus:border-accent focus:outline-none transition-all duration-300 resize-none"
                />

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-400"
                  >
                    ✓ Mensagem enviada com sucesso! Entraremos em contato em breve.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-400"
                  >
                    ✗ Erro ao enviar mensagem. Tente novamente.
                  </motion.div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 bg-gradient-to-r from-accent to-blue-500 text-primary rounded-lg font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Proposta'}
                </button>

                <p className="text-gray-500 text-sm text-center">
                  Respondemos todas as solicitações dentro de 24 horas
                </p>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
