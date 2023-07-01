/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'Soft-red': 'hsl(10, 79%, 65%)',
      'Cyan': 'hsl(186, 34%, 60%)',
      'Dark-brown': 'hsl(25, 47%, 15%)',
      'Medium-brown': 'hsl(28, 10%, 53%)',
      'Cream': 'hsl(27, 66%, 92%)',
      'Very-pale-orange': 'hsl(33, 100%, 98%)'
    },
    fontFamily: {
      'DM-sans': ['DM Sans', 'sans-serif']
    }
  },
  plugins: [],
}

