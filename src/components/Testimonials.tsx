
import { motion } from 'framer-motion';
import { Quote, ExternalLink } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Aditya is a stellar student and proficient future technology professional. He has all the qualities to become an influential leader and a professional game changer. He is actively able to perform the most daunting tasks with enormous ease. As a mentor it is a privilege to impart professional skills to this stupendous future leader and top performer. 11 on 10 to Aditya!",
      author: "Siddharth Anand",
      role: "Teacher",
      linkedin: "https://www.linkedin.com/in/siddhartth-anand-b175011b/"
    },
    {
      quote: "Aditya exemplifies resilience, curiosity, and purpose-driven learning. With a rare blend of humility and leadership, he turns challenges into opportunities for growth, inspiring those around him. A lifelong learner, Aditya is destined to make a meaningful impact, reminding us that true success is built with purpose, practice and heart.",
      author: "Prateek Yadav",
      role: "Teacher",
      linkedin: "https://www.linkedin.com/in/pratik-yadav-1a769b90/"
    },
    {
      quote: "Aditya's dedication and passion for learning is truly inspiring. He is always eager to tackle new challenges with enthusiasm and determination. His commitment to excellence and continuous growth makes him stand out as an exceptional professional.",
      author: "Rahul Sharma",
      role: "Mentor",
      linkedin: null
    },
    {
      quote: "A great leader and problem solver. Aditya's skills in technology and cybersecurity are top-notch, making him a valuable asset to any team. His analytical thinking and innovative approach to challenges consistently deliver outstanding results.",
      author: "Anonymous",
      role: "Cybersecurity Professional",
      linkedin: null
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-dark-primary mb-4">What People Say</h2>
          <p className="text-xl text-dark-secondary max-w-2xl mx-auto">
            Testimonials from mentors, teachers, and colleagues
          </p>
          <div className="w-20 h-1 bg-dark-accent mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-dark-surface rounded-xl p-6 border border-dark-border shadow-soft"
            >
              <Quote className="text-dark-accent mb-4" size={32} />
              <blockquote className="text-dark-secondary leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center justify-between">
                <div>
                  <cite className="text-dark-primary font-semibold not-italic">
                    {testimonial.author}
                  </cite>
                  <p className="text-dark-secondary text-sm">{testimonial.role}</p>
                </div>
                {testimonial.linkedin && (
                  <a
                    href={testimonial.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark-accent hover:text-blue-400 transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;