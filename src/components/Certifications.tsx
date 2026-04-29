
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Foundations of Cybersecurity',
      issuer: 'Google',
      date: 'Aug 2024',
      status: 'Completed',
      links: [
        { text: 'View', url: 'https://www.coursera.org/account/accomplishments/verify/IL7I0RLBABX3' },
        { text: 'Download', url: 'https://www.coursera.org/account/accomplishments/verify/IL7I0RLBABX3' }
      ]
    },
    {
      title: 'Cisco Cyber Threat Management',
      issuer: 'Cisco',
      date: 'In Progress',
      status: 'In Progress',
      links: [
        { text: 'View', url: 'https://www.credly.com/badges/1207700f-4d5d-4abb-a474-811a6d1eff23/linked_in_profile' },
        { text: 'Download', url: 'https://www.credly.com/badges/1207700f-4d5d-4abb-a474-811a6d1eff23/linked_in_profile' }
      ]
    },
    {
      title: 'Ethical Hacker',
      issuer: 'Cisco',
      date: 'Jul 2024',
      status: 'Completed',
      links: [
        { text: 'View', url: 'https://www.credly.com/badges/302ac20c-baba-46d5-a3c5-0ff6b32d6072/linked_in_profile' },
        { text: 'Download', url: 'https://www.credly.com/badges/302ac20c-baba-46d5-a3c5-0ff6b32d6072/linked_in_profile' }
      ]
    },
    {
      title: 'ISO 27001 Course',
      issuer: 'AKITRA',
      date: 'Nov 2024',
      status: 'Completed',
      links: [
        { text: 'View', url: 'https://akitra.com/tutor-certificate/?cert_hash=39c932cf67346187' },
        { text: 'Download', url: 'https://akitra.com/tutor-certificate/?cert_hash=39c932cf67346187' }
      ]
    },
    {
      title: 'Endpoint Security',
      issuer: 'Cisco',
      date: 'Jul 2024',
      status: 'Completed',
      links: [
        { text: 'View', url: 'https://www.credly.com/badges/47017e02-d9b2-45e3-bf63-732d622fcb66/linked_in_profile' },
        { text: 'Download', url: 'https://www.credly.com/badges/47017e02-d9b2-45e3-bf63-732d622fcb66/linked_in_profile' }
      ]
    },
    {
      title: 'Introduction to Cybersecurity',
      issuer: 'Cisco',
      date: 'Jul 2024',
      status: 'Completed',
      links: [
        { text: 'View', url: 'https://www.credly.com/badges/f6e3d7cb-b6bf-401f-b87a-447cca3abbcc/linked_in_profile' },
        { text: 'Download', url: 'https://www.credly.com/badges/f6e3d7cb-b6bf-401f-b87a-447cca3abbcc/linked_in_profile' }
      ]
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-dark-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-dark-primary mb-4">Certifications</h2>
          <p className="text-xl text-dark-secondary max-w-2xl mx-auto">
            Professional certifications in cybersecurity and technology
          </p>
          <div className="w-20 h-1 bg-dark-accent mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-bg rounded-xl p-6 border border-dark-border hover:border-dark-accent/50 transition-all duration-300 shadow-soft hover:shadow-medium"
            >
              <div className="flex items-start mb-4">
                <Award className="text-dark-accent mr-3 mt-1 flex-shrink-0" size={24} />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-dark-primary mb-1">{cert.title}</h3>
                  <p className="text-dark-secondary text-sm mb-2">{cert.issuer}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-dark-secondary text-sm">{cert.date}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      cert.status === 'Completed' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {cert.status}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex space-x-2">
                {cert.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-3 py-2 bg-dark-accent hover:bg-blue-600 text-white text-sm rounded-lg transition-colors duration-300 flex items-center justify-center"
                  >
                    {link.text}
                    <ExternalLink size={14} className="ml-1" />
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;