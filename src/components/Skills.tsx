import { motion } from 'framer-motion';
import { Shield, Code2, Globe, Smartphone, Brain, Cloud, Database, Terminal } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Cybersecurity',
      icon: Shield,
      accent: 'var(--color-accent-cyan)',
      skills: [
        { name: 'Penetration Testing', proficiency: 90 },
        { name: 'Vulnerability Assessment', proficiency: 95 },
        { name: 'Digital Forensics', proficiency: 85 },
        { name: 'CTF Challenges', proficiency: 95 },
        { name: 'Network Security', proficiency: 88 },
        { name: 'SIEM Tools', proficiency: 75 },
      ],
    },
    {
      title: 'Programming',
      icon: Code2,
      accent: 'var(--color-accent-green)',
      skills: [
        { name: 'Python', proficiency: 95 },
        { name: 'JavaScript', proficiency: 92 },
        { name: 'TypeScript', proficiency: 88 },
        { name: 'C++', proficiency: 70 },
        { name: 'Go', proficiency: 68 },
        { name: 'SQL', proficiency: 85 },
      ],
    },
    {
      title: 'Web Development',
      icon: Globe,
      accent: 'var(--color-accent-amber)',
      skills: [
        { name: 'React', proficiency: 92 },
        { name: 'Next.js', proficiency: 85 },
        { name: 'Node.js', proficiency: 88 },
        { name: 'Laravel', proficiency: 90 },
        { name: 'PHP', proficiency: 92 },
        { name: 'Tailwind CSS', proficiency: 85 },
      ],
    },
    {
      title: 'Mobile Dev',
      icon: Smartphone,
      accent: '#a855f7',
      skills: [
        { name: 'Android', proficiency: 85 },
        { name: 'Flutter', proficiency: 70 },
        { name: 'Kotlin', proficiency: 68 },
        { name: 'Java', proficiency: 82 },
        { name: 'React Native', proficiency: 60 },
      ],
    },
    {
      title: 'AI/ML',
      icon: Brain,
      accent: '#f97316',
      skills: [
        { name: 'TensorFlow', proficiency: 72 },
        { name: 'PyTorch', proficiency: 70 },
        { name: 'Computer Vision', proficiency: 85 },
        { name: 'NLP', proficiency: 70 },
        { name: 'Scikit-learn', proficiency: 82 },
        { name: 'OpenCV', proficiency: 85 },
      ],
    },
    {
      title: 'DevOps',
      icon: Cloud,
      accent: '#06b6d4',
      skills: [
        { name: 'Docker', proficiency: 85 },
        { name: 'Kubernetes', proficiency: 70 },
        { name: 'AWS', proficiency: 82 },
        { name: 'GCP', proficiency: 68 },
        { name: 'Azure', proficiency: 68 },
        { name: 'CI/CD', proficiency: 85 },
      ],
    },
    {
      title: 'Databases',
      icon: Database,
      accent: '#eab308',
      skills: [
        { name: 'PostgreSQL', proficiency: 85 },
        { name: 'MongoDB', proficiency: 72 },
        { name: 'Redis', proficiency: 70 },
        { name: 'MySQL', proficiency: 92 },
        { name: 'SQLite', proficiency: 85 },
      ],
    },
    {
      title: 'Systems',
      icon: Terminal,
      accent: '#ec4899',
      skills: [
        { name: 'Linux', proficiency: 95 },
        { name: 'Ubuntu', proficiency: 95 },
        { name: 'Arch Linux', proficiency: 88 },
        { name: 'Windows', proficiency: 85 },
        { name: 'macOS', proficiency: 72 },
        { name: 'Kali Linux', proficiency: 95 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-[var(--color-bg-secondary)] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--color-accent-cyan) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
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
            <span>cat skills.json</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[var(--color-text-primary)] mb-4">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl">
            A comprehensive toolkit built through years of hands-on experience in cybersecurity and software development.
          </p>
        </motion.div>

        {/* Skills grid - asymmetric layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.08 }}
                viewport={{ once: true, margin: '-50px' }}
                className="group relative bg-[var(--color-bg-primary)] border border-[var(--color-border-subtle)] rounded-xl p-6 hover:border-[var(--color-border-medium)] transition-all duration-300"
                style={{
                  '--category-accent': category.accent,
                } as React.CSSProperties}
              >
                {/* Accent glow on hover */}
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${category.accent}10, transparent 40%)`,
                  }}
                />

                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div 
                    className="p-3 rounded-lg bg-[var(--color-bg-tertiary)] group-hover:scale-110 transition-transform duration-300"
                    style={{ color: category.accent }}
                  >
                    <IconComponent size={24} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-[var(--color-text-primary)]">
                    {category.title}
                  </h3>
                </div>

                {/* Skills list with progress bars */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-xs text-[var(--color-text-secondary)]">
                          {skill.name}
                        </span>
                        <span 
                          className="font-mono text-xs"
                          style={{ color: category.accent }}
                        >
                          {skill.proficiency}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-[var(--color-bg-tertiary)] rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ backgroundColor: category.accent }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          transition={{ 
                            duration: 0.8, 
                            delay: skillIndex * 0.05,
                            ease: 'easeOut'
                          }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Technologies', value: '50+', icon: Code2 },
            { label: 'Years Experience', value: '5+', icon: Terminal },
            { label: 'Projects Completed', value: '30+', icon: Globe },
            { label: 'Certifications', value: '10+', icon: Shield },
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-[var(--color-bg-primary)] border border-[var(--color-border-subtle)] rounded-xl"
            >
              <stat.icon className="w-6 h-6 text-[var(--color-accent-cyan)] mx-auto mb-3" />
              <div className="font-display text-3xl font-bold text-[var(--color-text-primary)] mb-1">
                {stat.value}
              </div>
              <div className="font-mono text-xs text-[var(--color-text-tertiary)]">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
