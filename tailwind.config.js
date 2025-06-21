module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#7dd3fc', // sky-300
          DEFAULT: '#0ea5e9', // sky-500
          dark: '#0369a1', // sky-800
        },
        accent: {
          light: '#f472b6', // pink-400
          DEFAULT: '#db2777', // pink-600
        },
        background: {
          light: '#f1f5f9', // slate-100
          DEFAULT: '#e0e7ef', // custom light
          dark: '#1e293b', // slate-800
        },
        card: {
          DEFAULT: '#ffffff',
          glass: 'rgba(255,255,255,0.7)'
        }
      },
      boxShadow: {
        card: '0 4px 24px 0 rgba(34,197,94,0.10)',
        glass: '0 8px 32px 0 rgba(31,41,55,0.18)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-to-br': 'linear-gradient(to bottom right, #7dd3fc, #db2777)',
      },
      borderRadius: {
        xl: '1.25rem',
        '2xl': '2rem',
      },
      fontFamily: {
        display: ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
