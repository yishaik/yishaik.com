import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    setIsDark(html.classList.contains('dark'));
  }, []);

  const toggle = () => {
    const html = document.documentElement;
    const nextIsDark = !isDark;
    setIsDark(nextIsDark);
    html.classList.toggle('dark', nextIsDark);
    html.classList.toggle('light', !nextIsDark);
    localStorage.setItem('theme', nextIsDark ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggle}
      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[color:var(--color-rule)] text-ink transition-colors hover:border-[color:var(--color-accent)] hover:text-accent"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
          <circle cx="12" cy="12" r="4" />
          <path strokeLinecap="round" d="M12 3v1.5M12 19.5V21M3 12h1.5M19.5 12H21M5.2 5.2l1.1 1.1M17.7 17.7l1.1 1.1M5.2 18.8l1.1-1.1M17.7 6.3l1.1-1.1" />
        </svg>
      ) : (
        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.5 15a8.5 8.5 0 1 1-11.5-11.5 7 7 0 0 0 11.5 11.5Z" />
        </svg>
      )}
    </button>
  );
}
