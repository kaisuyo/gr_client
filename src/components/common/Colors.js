import a from 'color-alpha'

const basicColors = {
  brightSpring: "#f30045",
  trueSpring: "#ffbf00",
  lightSpring: "#efed6e",

  lightSummer: "#79cbdf",
  trueSummer: "#008aae",
  softSummer: "#e9a7c6",

  softAutumn: "#d4b900",
  trueAutumn: "#9f2f00",
  darkAutumn: "#2e4c06",

  darkWinter: "#47008a",
  trueWinter: "#005e75",
  brightWinter: "#d60079"
}

const Colors = Object.values(basicColors).map(color => ({color: color, alphaColor: a(color, 0.2), customAlpha: (value) => a(color, value)}))

export default Colors