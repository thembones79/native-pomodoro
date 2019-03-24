import { Dimensions } from "react-native";


const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");
const baseWidth = 360;
const baseHeight = 604;
const widthScale = SCREEN_WIDTH / baseWidth;
const heightScale = SCREEN_HEIGHT / baseHeight;
const { fontScale } = Dimensions.get("window");

export {widthScale, heightScale, fontScale};
