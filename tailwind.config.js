/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        sand: "#0B1324",
        night: "#E6EEF8",
        ocean: "#45D0FF",
        mint: "#12233D",
        coral: "#7EE7FF",
        cloud: "#07101F"
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-work-sans)", "sans-serif"]
      },
      boxShadow: {
        soft: "0 20px 45px -20px rgba(0, 0, 0, 0.45)"
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(circle at 85% 10%, rgba(69,208,255,0.18) 0%, rgba(7,16,31,1) 36%, rgba(11,19,36,1) 100%)"
      }
    }
  },
  plugins: []
};
