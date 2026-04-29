import { motion } from 'framer-motion';
import { ExternalLink, Star, GitFork, Terminal, Shield, Cpu } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'code-guardian-report',
      description: 'Enterprise-Grade AI-Powered Security Analysis Platform',
      tech: ['TypeScript', 'React', 'Node.js', 'AI/ML'],
      stars: 49,
      forks: 44,
      github: 'https://github.com/Xenonesis/code-guardian-report',
      category: 'security',
    },
    {
      title: 'Juris.AI',
      description: 'AI-driven legal assistance platform built with TypeScript',
      tech: ['TypeScript', 'AI', 'Legal Tech', 'Next.js'],
      stars: 8,
      forks: 5,
      github: 'https://github.com/Xenonesis/Juris.AI',
      category: 'ai',
    },
    {
      title: 'tracy',
      description: "OSINT orchestrator that maps a target's digital footprint",
      tech: ['Python', 'OSINT', 'Security', 'Automation'],
      stars: 6,
      forks: 0,
      github: 'https://github.com/Xenonesis/tracy',
      category: 'security',
    },
    {
      title: 'WebSage',
      description: 'Browser extension with professional fake news detection',
      tech: ['JavaScript', 'Browser Extension', 'AI', 'Security'],
      stars: 6,
      forks: 1,
      github: 'https://github.com/Xenonesis/WebSage',
      category: 'security',
    },
    {
      title: 'Budget-Buddy',
      description: 'AI-powered financial management application',
      tech: ['TypeScript', 'AI', 'Finance', 'React'],
      stars: 5,
      forks: 4,
      github: 'https://github.com/Xenonesis/Budget-Buddy',
      category: 'ai',
    },
    {
      title: 'SEO-Website',
      description: 'SEO-optimized website with best practices',
      tech: ['HTML', 'CSS', 'JavaScript', 'SEO'],
      stars: 3,
      forks: 0,
      github: 'https://github.com/Xenonesis/SEO-Website',
      category: 'web',
    },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'security': return Shield;
      case 'ai': return Cpu;
      default: return Terminal;
    }
  };

  return (
    <section id="projects" className="py-24 bg-[var(--color-bg-primary)] relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(var(--color-accent-cyan) 1px, transparent 1px), linear-gradient(90deg, var(--color-accent-cyan) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
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
            <span>ls -la projects/</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[var(--color-text-primary)] mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl">
            Showcasing innovative solutions in cybersecurity, AI, and full-stack development
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const CategoryIcon = getCategoryIcon(project.category);
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true, margin: '-50px' }}
                className="group relative bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] rounded-xl p-6 hover:border-[var(--color-border-medium)] transition-all duration-300"
              >
                {/* Project header with icon */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[var(--color-bg-tertiary)] rounded-lg text-[var(--color-accent-cyan)] group-hover:scale-110 transition-transform duration-300">
                      <CategoryIcon size={20} />
                    </div>
                    <h3 className="font-mono text-lg font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-cyan)] transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[var(--color-text-secondary)] text-sm mb-6 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[var(--color-bg-tertiary)] text-[var(--color-text-tertiary)] font-mono text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-3 py-1 text-[var(--color-text-muted)] font-mono text-xs">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>

                {/* Stats and links */}
                <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border-subtle)]">
                  <div className="flex items-center gap-4 text-[var(--color-text-tertiary)]">
                    <div className="flex items-center gap-1">
                      <Star size={14} />
                      <span className="font-mono text-xs">{project.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork size={14} />
                      <span className="font-mono text-xs">{project.forks}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-[var(--color-text-tertiary)] hover:text-[var(--color-accent-cyan)] transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-[var(--color-text-tertiary)] hover:text-[var(--color-accent-cyan)] transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={18} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Xenonesis"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-transparent border border-[var(--color-accent-cyan)] text-[var(--color-accent-cyan)] font-mono text-sm rounded-lg hover:bg-[var(--color-accent-cyan)] hover:text-[var(--color-bg-primary)] transition-all duration-300 glitch-hover"
          >
            <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>View All Projects on GitHub</span>
            <ExternalLink size={16} className="ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
