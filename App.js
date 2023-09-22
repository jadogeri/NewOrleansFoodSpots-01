import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/Home/HomeScreen";
import ModeScreen from  "./src/screens/Mode/ModeScreen";
import StageScreen from "./src/screens/Stage/StageScreen";
import CharacterScreen from "./src/screens/Character/CharacterScreen";


//in this file we have three route names
//Home, components and Lists are keys ** route names**
// which will be diplayed to the screen immediately using navigate function
const navigator = createStackNavigator(
  {   
    Home: HomeScreen,
    Mode: ModeScreen,
    Stage: StageScreen,
    Character: CharacterScreen
  },
  {
    initialRouteName: "Mode",
    defaultNavigationOptions: {
      title: "Mortal Kombat",
    },
  }
);

const App = createAppContainer(navigator);
export default App;



