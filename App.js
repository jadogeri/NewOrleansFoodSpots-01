import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen/SearchScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen/ResultsShowScreen";


//in this file we have three route names
//Home, components and Lists are keys ** route names**
// which will be diplayed to the screen immediately using navigate function
const navigator = createStackNavigator(
  {   
    Search: SearchScreen,
    ResultsShow:ResultsShowScreen
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "New Orleans Food Spots",
    },
  }
);

export default createAppContainer(navigator);


