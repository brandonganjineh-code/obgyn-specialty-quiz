import { useState, useEffect } from 'react';

export default function ThemeToggle({ theme, setTheme }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
  };

  return (
    <button onClick={toggle} className="px-3 py-2 rounded-md border dark:border-gray-700 bg-white dark:bg-gray-800">
      {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
}
