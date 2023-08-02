//we have to import all theme files in togeother
import { colors } from "./colors";
import { space, lineHeights } from "./spacing";
import { sizes } from "./sizes";
import { fonts, fontWeights, fontSizes } from "./fonts";
//by creating theme object that allow  us to put our theme into the theme in the theme provider
//that will be suppling at the app.js file and here we have lots of props those are having some values init in js files

export const theme = {
  colors,
  space,
  lineHeights,
  sizes,
  fonts,
  fontSizes,
  fontWeights,
};