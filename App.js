import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import AboutScreen from "./src/screens/AboutScreen";
import DetailScreen from "./src/screens/DetailScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import SearchScreen from "./src/screens/SearchScreen/SearchScreen";


//in this file we have three route names
//Home, components and Lists are keys ** route names**
// which will be diplayed to the screen immediately using navigate function
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Detail: DetailScreen,
    About: AboutScreen,
    Image: ImageScreen,
    Counter:CounterScreen,
    Color:ColorScreen,
    Search: SearchScreen


  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "New Orleans Food Spots",
    },
  }
);

export default createAppContainer(navigator);


