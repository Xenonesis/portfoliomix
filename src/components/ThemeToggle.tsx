import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Monitor } from 'lucide-react';

type Theme = 'dark' | 'light' | 'system';

const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Load saved theme preference
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    
    // Determine actual theme based on preference
    let actualTheme: 'dark' | 'light';
    
    if (theme === 'system') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      actualTheme = prefersDark ? 'dark' : 'light';
    } else {
      actualTheme = theme;
    }

    // Apply theme
    if (actualTheme === 'light') {
      root.classList.add('light-theme');
      root.style.setProperty('--color-bg-primary', '#fafafa');
      root.style.setProperty('--color-bg-secondary', '#ffffff');
      root.style.setProperty('--color-bg-tertiary', '#f0f0f0');
      root.style.setProperty('--color-bg-elevated', '#ffffff');
      root.style.setProperty('--color-text-primary', '#0f172a');
      root.style.setProperty('--color-text-secondary', '#334155');
      root.style.setProperty('--color-text-tertiary', '#475569');
      root.style.setProperty('--color-text-muted', '#64748b');
      root.style.setProperty('--color-border-subtle', 'rgba(0, 0, 0, 0.12)');
      root.style.setProperty('--color-border-medium', 'rgba(0, 0, 0, 0.2)');
      root.style.setProperty('--color-border-strong', 'rgba(0, 0, 0, 0.3)');
      // Accent colors for light mode - darker cyan for visibility
      root.style.setProperty('--color-accent-cyan', '#0891b2');
      root.style.setProperty('--color-accent-cyan-dim', 'rgba(8, 145, 178, 0.15)');
      root.style.setProperty('--color-accent-green', '#059669');
      root.style.setProperty('--color-accent-green-dim', 'rgba(5, 150, 105, 0.15)');
    } else {
      root.classList.remove('light-theme');
      root.style.setProperty('--color-bg-primary', '#0a0a0f');
      root.style.setProperty('--color-bg-secondary', '#12121a');
      root.style.setProperty('--color-bg-tertiary', '#1a1a24');
      root.style.setProperty('--color-bg-elevated', '#22222e');
      root.style.setProperty('--color-text-primary', '#ffffff');
      root.style.setProperty('--color-text-secondary', '#a0a0b8');
      root.style.setProperty('--color-text-tertiary', '#6b6b80');
      root.style.setProperty('--color-text-muted', '#4a4a5e');
      root.style.setProperty('--color-border-subtle', 'rgba(255, 255, 255, 0.06)');
      root.style.setProperty('--color-border-medium', 'rgba(255, 255, 255, 0.1)');
      root.style.setProperty('--color-border-strong', 'rgba(255, 255, 255, 0.15)');
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (theme === 'system') {
        // Trigger re-render when system theme changes
        setTheme('system');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  const themeOptions = [
    { value: 'dark', icon: Moon, label: 'Dark' },
    { value: 'light', icon: Sun, label: 'Light' },
    { value: 'system', icon: Monitor, label: 'System' },
  ] as const;

  const currentOption = themeOptions.find(opt => opt.value === theme) || themeOptions[0];
  const CurrentIcon = currentOption.icon;

  return (
    <div className="relative">
      {/* Toggle button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 bg-[var(--color-bg-secondary)] border border-[var(--color-border-medium)] rounded-lg text-[var(--color-text-secondary)] hover:text-[var(--color-accent-cyan)] hover:border-[var(--color-accent-cyan)] transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <CurrentIcon size={18} />
      </motion.button>

      {/* Dropdown menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop to close */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[-1]"
            />
            
            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full right-0 mt-2 w-48 bg-[var(--color-bg-secondary)] border border-[var(--color-border-medium)] rounded-lg shadow-xl overflow-hidden z-50"
            >
              {themeOptions.map((option, index) => {
                const Icon = option.icon;
                const isActive = theme === option.value;
                
                return (
                  <motion.button
                    key={option.value}
                    onClick={() => {
                      setTheme(option.value);
                      setIsOpen(false);
                    }}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors duration-200 ${
                      isActive 
                        ? 'bg-[var(--color-accent-cyan-dim)] text-[var(--color-accent-cyan)]' 
                        : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-tertiary)] hover:text-[var(--color-text-primary)]'
                    }`}
                  >
                    <Icon size={18} />
                    <span className="font-mono text-sm">{option.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeTheme"
                        className="ml-auto w-2 h-2 rounded-full bg-[var(--color-accent-cyan)]"
                      />
                    )}
                  </motion.button>
                );
              })}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeToggle;
