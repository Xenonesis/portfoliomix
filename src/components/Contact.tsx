import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Send, MapPin, Phone, ExternalLink } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactForm = z.infer<typeof contactSchema>;

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Form submitted:', data);
    reset();
    alert('Thank you for your message! I\'ll get back to you soon.');
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'contact@xenonesis.dev', link: 'mailto:contact@xenonesis.dev' },
    { icon: MapPin, label: 'Location', value: 'Gurugram, Haryana', link: null },
    { icon: Phone, label: 'Phone', value: '+91-XXXXXXXXXX', link: 'tel:+91-XXXXXXXXXX' },
  ];

  const socialLinks = [
    { 
      name: 'GitHub', 
      url: 'https://github.com/Xenonesis', 
      icon: ({ className }: { className?: string }) => (
        <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/aditya-kumar-tiwari/', 
      icon: ({ className }: { className?: string }) => (
        <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    { 
      name: 'Twitter/X', 
      url: 'https://twitter.com/XenonesisHacks', 
      icon: ({ className }: { className?: string }) => (
        <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
  ];

  return (
    <section id="contact" className="py-24 bg-[var(--color-bg-secondary)] relative overflow-hidden">
      {/* Background dots */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--color-accent-cyan) 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="font-mono text-[var(--color-accent-cyan)] text-sm mb-3 flex items-center gap-2">
            <span className="text-[var(--color-accent-green)]">$</span>
            <span>./send-message.sh</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[var(--color-text-primary)] mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl">
            Have a project in mind or want to collaborate? Let's connect!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="bg-[var(--color-bg-primary)] border border-[var(--color-border-subtle)] rounded-xl p-8">
              <h3 className="font-display text-2xl font-semibold text-[var(--color-text-primary)] mb-6 flex items-center gap-3">
                <Send className="text-[var(--color-accent-cyan)]" size={24} />
                Send a Message
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block font-mono text-xs text-[var(--color-text-tertiary)] mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...register('name')}
                      className="w-full px-4 py-3 bg-[var(--color-bg-secondary)] border border-[var(--color-border-medium)] rounded-lg text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent-cyan)] transition-colors font-mono text-sm"
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="mt-2 text-xs text-[var(--color-accent-amber)] font-mono">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block font-mono text-xs text-[var(--color-text-tertiary)] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register('email')}
                      className="w-full px-4 py-3 bg-[var(--color-bg-secondary)] border border-[var(--color-border-medium)] rounded-lg text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent-cyan)] transition-colors font-mono text-sm"
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="mt-2 text-xs text-[var(--color-accent-amber)] font-mono">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block font-mono text-xs text-[var(--color-text-tertiary)] mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    {...register('subject')}
                    className="w-full px-4 py-3 bg-[var(--color-bg-secondary)] border border-[var(--color-border-medium)] rounded-lg text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent-cyan)] transition-colors font-mono text-sm"
                    placeholder="Project Collaboration"
                  />
                  {errors.subject && (
                    <p className="mt-2 text-xs text-[var(--color-accent-amber)] font-mono">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block font-mono text-xs text-[var(--color-text-tertiary)] mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    {...register('message')}
                    className="w-full px-4 py-3 bg-[var(--color-bg-secondary)] border border-[var(--color-border-medium)] rounded-lg text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent-cyan)] transition-colors resize-none font-mono text-sm"
                    placeholder="Tell me about your project or idea..."
                  />
                  {errors.message && (
                    <p className="mt-2 text-xs text-[var(--color-accent-amber)] font-mono">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-[var(--color-accent-cyan)] text-[var(--color-bg-primary)] font-mono text-sm font-semibold rounded-lg hover:bg-[var(--color-accent-cyan-dim)] transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed glitch-hover"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Contact Details */}
            <div className="bg-[var(--color-bg-primary)] border border-[var(--color-border-subtle)] rounded-xl p-6">
              <h3 className="font-display text-xl font-semibold text-[var(--color-text-primary)] mb-6">
                Contact Info
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-2 bg-[var(--color-bg-tertiary)] rounded-lg text-[var(--color-accent-cyan)]">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-[var(--color-text-tertiary)] mb-1">{item.label}</p>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-[var(--color-text-primary)] hover:text-[var(--color-accent-cyan)] transition-colors duration-300 font-mono text-sm"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-[var(--color-text-primary)] font-mono text-sm">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-[var(--color-bg-primary)] border border-[var(--color-border-subtle)] rounded-xl p-6">
              <h3 className="font-display text-xl font-semibold text-[var(--color-text-primary)] mb-6">
                Connect
              </h3>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 px-4 py-3 bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] rounded-lg hover:border-[var(--color-accent-cyan)] transition-all duration-300 group"
                  >
                    <social.icon className="w-5 h-5 text-[var(--color-text-tertiary)] group-hover:text-[var(--color-accent-cyan)] transition-colors" />
                    <span className="text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-cyan)] font-mono text-sm flex-1">
                      {social.name}
                    </span>
                    <ExternalLink size={14} className="text-[var(--color-text-muted)] group-hover:text-[var(--color-accent-cyan)] transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-[var(--color-accent-cyan-dim)] to-[var(--color-accent-green-dim)] rounded-xl p-6 border border-[var(--color-accent-cyan)]/30">
              <h4 className="font-display text-lg font-semibold text-[var(--color-text-primary)] mb-2">
                Ready to Collaborate?
              </h4>
              <p className="text-[var(--color-text-secondary)] text-sm mb-4">
                I'm always interested in new opportunities and exciting projects in cybersecurity and technology.
              </p>
              <a
                href="mailto:contact@xenonesis.dev"
                className="inline-flex items-center px-6 py-3 bg-[var(--color-accent-cyan)] text-[var(--color-bg-primary)] font-mono text-sm font-semibold rounded-lg hover:bg-[var(--color-accent-cyan-dim)] transition-all duration-300"
              >
                <Mail size={16} className="mr-2" />
                Start a Conversation
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
