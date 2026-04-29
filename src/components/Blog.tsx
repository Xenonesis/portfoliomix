
import { motion } from 'framer-motion';
import { ExternalLink, Calendar } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Web Accessibility Basics',
      excerpt: 'Understanding the fundamentals of web accessibility and its importance in modern web development.',
      date: '2024',
      link: 'https://iaddy.netlify.app/blog_posts/web_accessibility_basics',
      category: 'Web Development'
    },
    {
      title: 'Web Security Fundamentals',
      excerpt: 'Exploring the core principles of web security and best practices for secure web development.',
      date: '2024',
      link: 'https://iaddy.netlify.app/blog_posts/web_security_fundamentals',
      category: 'Security'
    },
    {
      title: 'The Rise of AI in Cybersecurity',
      excerpt: 'How artificial intelligence is transforming the cybersecurity landscape.',
      date: '2024',
      link: 'https://iaddy.netlify.app/blog_posts/the_rise_of_ai_in_cybersecurity',
      category: 'AI & Security'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-dark-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-dark-primary mb-4">Latest Blog Posts</h2>
          <p className="text-xl text-dark-secondary max-w-2xl mx-auto">
            Insights on web development, cybersecurity, and emerging technologies
          </p>
          <div className="w-20 h-1 bg-dark-accent mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-dark-bg rounded-xl p-6 border border-dark-border hover:border-dark-accent/50 transition-all duration-300 shadow-soft hover:shadow-medium group"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-dark-accent/10 text-dark-accent text-sm rounded-full mb-3">
                  {post.category}
                </span>
                <h3 className="text-xl font-semibold text-dark-primary mb-3 group-hover:text-dark-accent transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-dark-secondary leading-relaxed mb-4">
                  {post.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center text-dark-secondary text-sm">
                  <Calendar size={16} className="mr-2" />
                  <span>{post.date}</span>
                </div>
                <motion.a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-dark-accent hover:text-blue-400 transition-colors duration-300 font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read More
                  <ExternalLink size={16} className="ml-1" />
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://iaddy.netlify.app/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-dark-accent hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-300 shadow-soft hover:shadow-medium"
          >
            View All Blog Posts
            <ExternalLink size={16} className="ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;