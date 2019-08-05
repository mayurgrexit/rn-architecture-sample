import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./home/HomeScreen";
import DetailsScreen from "./details/DetailsScreen";

// Create AppNavigator and export AppContainer
const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: ({ navigation }) => {
                return {
                    title: 'Home'
                }
            }
        },
        Details: DetailsScreen
    },
    {
        initialRouteName: "Home"
    }
)

export default createAppContainer(AppNavigator)