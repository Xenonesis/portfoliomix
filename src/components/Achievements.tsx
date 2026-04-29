
import { motion } from 'framer-motion';
import { Trophy, Users, Target } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: 'University Sports Leader',
      organization: 'Sushant University | 2023 - 2024',
      icon: Trophy,
      description: 'Led the university\'s sports teams, organizing events that increased participation by 30% and securing top positions in tournaments.'
    },
    {
      title: 'NSS Leader (President)',
      organization: 'National Service Scheme | 2023 - Present',
      icon: Users,
      description: 'Coordinated community service initiatives and managed 320+ volunteers for health and education programs.'
    },
    {
      title: 'Subhead at Gaming Nexus',
      organization: 'Gaming Nexus | 2023 - Present',
      icon: Target,
      description: 'Oversaw esports tournaments, increased club funding by 50%, and mentored members in competitive gaming.'
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-dark-primary mb-4">Achievements</h2>
          <p className="text-xl text-dark-secondary max-w-2xl mx-auto">
            Leadership roles and community contributions
          </p>
          <div className="w-20 h-1 bg-dark-accent mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-dark-surface rounded-xl p-6 border border-dark-border hover:border-dark-accent/50 transition-all duration-300 shadow-soft hover:shadow-medium text-center"
              >
                <div className="mb-4">
                  <IconComponent size={48} className="text-dark-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-dark-primary mb-2">{achievement.title}</h3>
                  <p className="text-dark-secondary text-sm mb-4">{achievement.organization}</p>
                  <p className="text-dark-secondary leading-relaxed">{achievement.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;