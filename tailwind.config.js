// tailwind.config.js
module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          gray: {
            100: 'var(--gray-100)',
            200: 'var(--gray-200)',
            300: 'var(--gray-300)',
            400: 'var(--gray-400)',
            500: 'var(--gray-500)',
            600: 'var(--gray-600)',
            700: 'var(--gray-700)',
            800: 'var(--gray-800)',
            900: 'var(--gray-900)',
          },
          primary: 'var(--primary)',
          'primary-light': 'var(--primary-light)',
          'primary-dark': 'var(--primary-dark)',
          'primary-foreground': 'var(--text-over-primary)',
          secondary: 'var(--gray-300)', // ou outra cor do seu theme
          'secondary-foreground': 'var(--text-over-primary-light)',
          destructive: 'var(--error)',
          'destructive-foreground': 'var(--text-over-error)',
          accent: 'var(--info)',
          'accent-foreground': 'var(--text-over-info)',
          success: 'var(--success)',
          warning: 'var(--warning)',
          link: 'var(--link-color)',
          'link-hover': 'var(--link-hover)',
          background: 'var(--gray-900)',
          foreground: 'var(--text-default)',
          muted: 'var(--text-muted)',
          disabled: 'var(--disabled)',
          'text-disabled': 'var(--text-disabled)',
          // Adicione todas as outras variáveis que quiser usar como classe do Tailwind!
        }
      }
    }
  }