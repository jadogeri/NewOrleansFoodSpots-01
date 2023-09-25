import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen/SearchScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen/ResultsShowScreen";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import ContactScreen from "./src/screens/Contact/ContactScreen";
import AboutScreen from "./src/screens/About/AboutScreen";


const navigator = createStackNavigator(
  {   
    Search: SearchScreen,
    ResultsShow:ResultsShowScreen,
    Home:HomeScreen,
    About : AboutScreen,
    Contact : ContactScreen
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "New Orleans Food Spots",
    },
  }
);

export default createAppContainer(navigator);


