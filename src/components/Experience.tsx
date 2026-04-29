
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Laravel Developer',
      company: 'Prarang',
      location: 'Remote',
      period: 'Sept 2025 - Oct 2025',
      type: 'Full-time',
      responsibilities: [
        'Specialize in PHP and Laravel framework development for building robust web applications',
        'Develop dynamic solutions using JavaScript and Python to enhance user experiences',
        'Implement cloud computing solutions to ensure scalable and efficient application deployment',
        'Combine security best practices with creative development approaches to build impactful digital experiences'
      ]
    },
    {
      title: 'Mentor (Part-time)',
      company: 'JhaMobii Technologies Pvt. Ltd.',
      location: 'Remote',
      period: 'Aug 2024 - Present',
      type: 'Part-time',
      responsibilities: [
        'Provided technical mentorship in cybersecurity to junior professionals and interns',
        'Guided team members through vulnerability assessments, threat analysis, and incident response strategies',
        'Supported learners in mastering security frameworks, cloud security, and penetration testing',
        'Ensured mentees understood best practices for securing networks and applications in real-world environments'
      ]
    },
    {
      title: 'Cybersecurity Intern',
      company: 'Null',
      location: 'Remote',
      period: 'Jun 2024 - Present',
      type: 'Internship',
      responsibilities: [
        'Conducted vulnerability assessments and implemented robust network security protocols',
        'Monitored network traffic and responded to security incidents with a focus on intrusion detection',
        'Worked with remote teams to secure client systems, ensuring compliance with industry standards',
        'Gained hands-on experience with SIEM tools, firewall configurations, and incident response strategies'
      ]
    },
    {
      title: 'Cybersecurity and AI/ML Intern',
      company: 'Quantam Pvt. Ltd.',
      location: 'Gurugram, Haryana',
      period: 'Oct 2024 - Present',
      type: 'Internship',
      responsibilities: [
        'Focused on hands-on projects in cybersecurity and AI/ML, applying theoretical knowledge to real-world challenges',
        'Collaborated with the Counseling Team and worked under the guidance of a dedicated mentor',
        'Enhanced understanding of cybersecurity protocols, AI/ML applications, confidentiality, and data protection',
        'Gained insights into corporate ethics and best practices for data security in a professional environment'
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Full-time': return 'bg-green-500';
      case 'Part-time': return 'bg-blue-500';
      case 'Internship': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section id="experience" className="py-20 bg-dark-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-dark-primary mb-4">Professional Experience</h2>
          <p className="text-xl text-dark-secondary max-w-2xl mx-auto">
            Building secure solutions and mentoring the next generation of cybersecurity professionals
          </p>
          <div className="w-20 h-1 bg-dark-accent mx-auto mt-4"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-dark-accent hidden lg:block"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-dark-accent rounded-full border-4 border-dark-bg hidden lg:block"></div>

                <div className="ml-0 lg:ml-16 bg-dark-bg rounded-xl p-6 border border-dark-border shadow-soft hover:shadow-medium transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-dark-primary mb-1">{exp.title}</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-dark-secondary">
                        <div className="flex items-center">
                          <Briefcase size={16} className="mr-2" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-2" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mt-2 lg:mt-0">
                      <div className="flex items-center text-dark-secondary">
                        <Calendar size={16} className="mr-2" />
                        <span>{exp.period}</span>
                      </div>
                      <span className={`text-xs px-3 py-1 rounded-full text-white ${getTypeColor(exp.type)}`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <motion.li
                        key={respIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: (index * 0.2) + (respIndex * 0.1) }}
                        viewport={{ once: true }}
                        className="flex items-start text-dark-secondary"
                      >
                        <span className="text-dark-accent mr-3 mt-1.5 flex-shrink-0">▹</span>
                        <span className="leading-relaxed">{resp}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;