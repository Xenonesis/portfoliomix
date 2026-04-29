import { motion } from 'framer-motion';
import { FileText, ExternalLink, MapPin, GraduationCap, Briefcase } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'BCA in Cybersecurity from Sushant University',
    },
    {
      icon: Briefcase,
      title: 'Experience',
      description: 'Laravel Developer at Prarang - Building secure web applications',
    },
    {
      icon: MapPin,
      title: 'Location',
      description: 'Gurugram, Haryana, India',
    },
  ];

  return (
    <section id="about" className="py-24 bg-[var(--color-bg-primary)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <span>cat about.md</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[var(--color-text-primary)] mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left column - Image and quick stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            {/* Profile image with glitch effect frame */}
            <div className="relative mb-8">
              <div className="absolute -inset-2 bg-gradient-to-r from-[var(--color-accent-cyan)] to-[var(--color-accent-green)] rounded-2xl opacity-20 blur-xl" />
              <img
                src="https://iaddy.netlify.app/1.png"
                alt="Aditya Kumar Tiwari"
                className="relative w-full max-w-md mx-auto rounded-2xl border-2 border-[var(--color-border-medium)] shadow-2xl"
              />
              
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[var(--color-accent-cyan)] -translate-x-1 -translate-y-1" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[var(--color-accent-cyan)] translate-x-1 -translate-y-1" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[var(--color-accent-cyan)] -translate-x-1 translate-y-1" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[var(--color-accent-cyan)] translate-x-1 translate-y-1" />
            </div>

            {/* Quick info cards */}
            <div className="space-y-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] rounded-lg"
                >
                  <div className="p-2 bg-[var(--color-bg-tertiary)] rounded-lg text-[var(--color-accent-cyan)]">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-mono text-xs text-[var(--color-accent-cyan)] mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-[var(--color-text-secondary)]">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right column - Bio and CTAs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="space-y-6 mb-8">
              <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
                Hi, I'm <span className="text-[var(--color-accent-cyan)] font-semibold">Aditya Kumar Tiwari</span>, a passionate 
                Cybersecurity Specialist and Full-Stack Developer based in Gurugram, Haryana. I thrive at the intersection of 
                technology and innovation, crafting secure and scalable solutions for real-world challenges.
              </p>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                With my BCA in Cybersecurity from Sushant University and experience as a Laravel Developer at Prarang, 
                I've specialized in PHP, Laravel, JavaScript, Python, and Cloud Computing. My mission is to combine 
                security best practices with creative development approaches to build impactful digital experiences.
              </p>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                When I'm not coding or hunting for vulnerabilities, you'll find me participating in CTF competitions, 
                exploring new technologies, or contributing to open-source projects.
              </p>
            </div>

            {/* Action buttons */}
            <div className="grid sm:grid-cols-2 gap-4">
              <motion.a
                href="https://github.com/Xenonesis"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center px-6 py-4 bg-[var(--color-bg-secondary)] border border-[var(--color-border-medium)] rounded-lg text-[var(--color-text-primary)] hover:border-[var(--color-accent-cyan)] transition-all duration-300"
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-5 h-5 mr-3 text-[var(--color-accent-cyan)] group-hover:animate-pulse" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="font-mono text-sm">View My Work</span>
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/itisaddy/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center px-6 py-4 bg-[var(--color-accent-cyan)] text-[var(--color-bg-primary)] rounded-lg hover:bg-[var(--color-accent-cyan-dim)] transition-all duration-300"
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="font-mono text-sm font-semibold">Get in Touch</span>
              </motion.a>
              
              <motion.a
                href="https://iaddy.netlify.app/Aditya.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center px-6 py-4 bg-[var(--color-bg-secondary)] border border-[var(--color-border-medium)] rounded-lg text-[var(--color-text-primary)] hover:border-[var(--color-accent-green)] transition-all duration-300"
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <FileText size={20} className="mr-3 text-[var(--color-accent-green)]" />
                <span className="font-mono text-sm">Download Resume</span>
              </motion.a>
              
              <motion.a
                href="https://iaddy.my.canva.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center px-6 py-4 bg-[var(--color-bg-secondary)] border border-[var(--color-border-medium)] rounded-lg text-[var(--color-text-primary)] hover:border-[var(--color-accent-amber)] transition-all duration-300"
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <ExternalLink size={20} className="mr-3 text-[var(--color-accent-amber)]" />
                <span className="font-mono text-sm">Online Resume</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
