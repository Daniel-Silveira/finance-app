import { StatusBar } from "expo-status-bar";
import NavigateConfig from "./src/navigation";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    Gilroy: require("./assets/fonts/Gilroy-Regular.otf"),
    "Gilroy-Medium": require("./assets/fonts/Gilroy-Medium.otf"),
    "Gilroy-Bold": require("./assets/fonts/Gilroy-Bold.otf"),
  });
  
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="inverted" />
      <NavigateConfig />
    </>
  );
}
