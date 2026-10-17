
export default function Logo({ className = 'h-12 w-12' }) {
  return (
    <svg className={className} viewBox="0 0 64 64" role="img" aria-label="Shinka Welfare Society logo">
      <defs>
        <linearGradient id="logo-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#10b981" />
          <stop offset="1" stopColor="#064e3b" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="url(#logo-g)" />
      <path d="M32 47.5C19 38.5 14.5 31.6 14.5 25.3c0-5 3.9-8.8 8.7-8.8 3.6 0 6.8 2 8.8 5.4 2-3.4 5.2-5.4 8.8-5.4 4.8 0 8.7 3.8 8.7 8.8 0 6.3-4.5 13.2-17.5 22.2z" fill="#fff" />
      <path d="M32 21.5c2.6 3.2 3.8 5.2 3.8 7.3a3.8 3.8 0 0 1-7.6 0c0-2.1 1.2-4.1 3.8-7.3z" fill="#f59e0b" />
      <path d="M9 47c8 7 18 9.5 23 9.5S47 54 55 47" fill="none" stroke="#fbbf24" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}
