export function TechSymbol({
  id,
  className = 'w-7 h-7',
}: {
  id: string;
  className?: string;
}) {
  switch (id) {
    case 'react':
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
          <circle cx="16" cy="16" r="2.7" fill="#38BDF8" />
          <ellipse cx="16" cy="16" rx="12.5" ry="4.8" stroke="#38BDF8" strokeWidth="1.7" />
          <ellipse
            cx="16"
            cy="16"
            rx="12.5"
            ry="4.8"
            transform="rotate(60 16 16)"
            stroke="#38BDF8"
            strokeWidth="1.7"
          />
          <ellipse
            cx="16"
            cy="16"
            rx="12.5"
            ry="4.8"
            transform="rotate(120 16 16)"
            stroke="#38BDF8"
            strokeWidth="1.7"
          />
        </svg>
      );

    case 'js':
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
          <rect x="4" y="4" width="24" height="24" rx="5" fill="#FACC15" />
          <path
            d="M14.5 16.5V22.5C14.5 24 13.6 24.8 12.2 24.8C11.2 24.8 10.5 24.3 10 23.6M22.2 18.2C21.8 17.5 21 17 20 17C18.7 17 17.8 17.7 17.8 18.7C17.8 19.7 18.5 20.1 20 20.6C21.6 21.1 22.5 21.6 22.5 23C22.5 24.2 21.4 25 19.8 25C18.4 25 17.4 24.4 16.9 23.5"
            stroke="#1E293B"
            strokeWidth="2.1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'ts':
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
          <rect x="4" y="4" width="24" height="24" rx="5" fill="#3B82F6" />
          <path
            d="M9.5 17H16M12.75 17V24.5M23 18.3C22.5 17.6 21.7 17.2 20.7 17.2C19.4 17.2 18.5 17.9 18.5 18.8C18.5 19.8 19.3 20.2 20.8 20.7C22.3 21.2 23.2 21.7 23.2 23.1C23.2 24.2 22.1 25 20.5 25C19.2 25 18.2 24.4 17.7 23.6"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'node':
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
          <polygon
            points="16,3.5 26.5,9.5 26.5,22.5 16,28.5 5.5,22.5 5.5,9.5"
            fill="#22C55E"
            fillOpacity="0.18"
            stroke="#22C55E"
            strokeWidth="1.9"
            strokeLinejoin="round"
          />
          <path
            d="M12.5 20.5V11.5L19.5 20.5V11.5"
            stroke="#22C55E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'mongo':
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
          <path
            d="M16 3.5C16 3.5 22.5 10.5 22.5 17.4C22.5 22.4 19 25.8 16 27.8C13 25.8 9.5 22.4 9.5 17.4C9.5 10.5 16 3.5 16 3.5Z"
            fill="#10B981"
            fillOpacity="0.22"
            stroke="#10B981"
            strokeWidth="1.9"
            strokeLinejoin="round"
          />
          <path d="M16 9.5V28.5" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );

    case 'express':
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
          <circle cx="16" cy="16" r="11.5" stroke="#94A3B8" strokeWidth="1.8" />
          <path
            d="M10 16H16.5M10 16C10 13.5 11.6 12 13.5 12C15.2 12 16.5 13.3 16.5 15.3V16M10 16C10 18.5 11.6 20 13.8 20C15 20 15.9 19.5 16.4 18.9M18.8 13.5L22.5 19.5M22.5 13.5L18.8 19.5"
            stroke="#94A3B8"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'mysql':
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
          <ellipse cx="16" cy="8.5" rx="9" ry="3.5" stroke="#0EA5E9" strokeWidth="1.8" />
          <path
            d="M7 8.5V23.5C7 25.4 11 27 16 27C21 27 25 25.4 25 23.5V8.5"
            stroke="#0EA5E9"
            strokeWidth="1.8"
          />
          <path d="M7 16C7 17.9 11 19.5 16 19.5C21 19.5 25 17.9 25 16" stroke="#0EA5E9" strokeWidth="1.6" />
        </svg>
      );

    case 'firebase':
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
          <path
            d="M8.5 23.5L11.2 6.5L17 15.2L21.5 10.5L23.5 23.5L16 27.5L8.5 23.5Z"
            fill="#F59E0B"
            fillOpacity="0.22"
            stroke="#F59E0B"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path d="M8.5 23.5L21.5 10.5" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case 'tailwind':
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
          <path
            d="M9 13.8C10.5 10.3 13 9.3 16 10.3C18.5 11.1 19.5 13.3 22 13.3C24 13.3 25.5 12 26.5 10.3C25 13.8 22.5 14.8 19.5 13.8C17 13 16 10.8 13.5 10.8C11.5 10.8 10 12 9 13.8ZM5.5 20.8C7 17.3 9.5 16.3 12.5 17.3C15 18.1 16 20.3 18.5 20.3C20.5 20.3 22 19 23 17.3C21.5 20.8 19 21.8 16 20.8C13.5 20 12.5 17.8 10 17.8C8 17.8 6.5 19 5.5 20.8Z"
            fill="#14B8A6"
          />
        </svg>
      );

    case 'git':
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
          <circle cx="10.5" cy="8.5" r="2.6" stroke="#F97316" strokeWidth="1.9" />
          <circle cx="10.5" cy="23.5" r="2.6" stroke="#F97316" strokeWidth="1.9" />
          <circle cx="21.5" cy="14" r="2.6" stroke="#F97316" strokeWidth="1.9" />
          <path d="M10.5 11.1V20.9M10.5 14H18.9" stroke="#F97316" strokeWidth="1.9" strokeLinecap="round" />
        </svg>
      );

    case 'shopify':
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
          <path
            d="M8.5 11.5H23.5L25 25.5H7L8.5 11.5Z"
            fill="#22C55E"
            fillOpacity="0.2"
            stroke="#22C55E"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M12.5 11.5V9.5C12.5 7.6 14 6 16 6C18 6 19.5 7.6 19.5 9.5V11.5"
            stroke="#22C55E"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M17.5 16.3C17 15.7 16.3 15.5 15.6 15.6C14.7 15.7 14.3 16.3 14.4 16.9C14.5 17.6 15.4 17.8 16.2 18.2C17.1 18.6 17.7 19.1 17.6 20.1C17.5 21 16.6 21.6 15.5 21.6C14.7 21.6 14 21.2 13.6 20.7"
            stroke="#22C55E"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
          <path
            d="M6 22L12 16L16.5 20L25.5 10.5"
            stroke="#34D399"
            strokeWidth="2.1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.5 10.5H25.5V15.5"
            stroke="#34D399"
            strokeWidth="2.1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}
