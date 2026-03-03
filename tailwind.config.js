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
        sand: "#F8F2E8",
        night: "#1F2937",
        ocean: "#0B5563",
        mint: "#D4F3EE",
        coral: "#E76F51",
        cloud: "#FFFDF8"
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-work-sans)", "sans-serif"]
      },
      boxShadow: {
        soft: "0 20px 45px -22px rgba(31, 41, 55, 0.4)"
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(circle at top right, rgba(212,243,238,1) 0%, rgba(248,242,232,1) 40%, rgba(255,253,248,1) 100%)"
      }
    }
  },
  plugins: []
};
