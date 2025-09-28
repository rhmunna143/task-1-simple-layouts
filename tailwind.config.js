import tailwindcss from 'tailwindcss'
import daisyui from 'daisyui'
export default {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {},
  },
  plugins: [tailwindcss, daisyui],
    daisyui: {
    themes: ["light", "dark"],
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
    rtl: false,
    prefix: "",
    logs: true,
  },
}