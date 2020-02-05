import {Dimensions} from 'react-native'
import {
    createAppContainer,
    createStackNavigator,
    createBottomTabNavigator,
    createDrawerNavigator,
} from 'react-navigation'

const {width, height} = Dimensions.get('screen');

//Screen
import ExampleScreen from 'App/Containers/Example/ExampleScreen'
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen'
import HomeScreen from 'App/Containers/Home/HomeScreen'
import SideMenu from 'App/Containers/SideMenu/SideMenu'
import ProfileScreen from 'App/Containers/Profile/ProfileScreen'


const StackNavigator = createStackNavigator(
    {
        // See https://reactnavigation.org/docs/en/stack-navigator.html#routeconfigs
        SplashScreen: SplashScreen,
        ExampleScreen: ExampleScreen,
        HomeScreen: HomeScreen,
        ProfileScreen: ProfileScreen,
    },
    {
        initialRouteName: 'SplashScreen',// By default the application will show the splash screen
        // See https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig
        headerMode: 'none',
        navigationOptions: {
            drawerLockMode: "locked-closed"
        }
    }
);

const DrawerNavigator = createDrawerNavigator(
    {
        StackNavigator
    }, {
        contentComponent: SideMenu,
        drawerWidth: Math.min(height, width) * 0.8,
        overlayColor: 'rgba(0,0,0,0.5)',
    }
);

export default createAppContainer(DrawerNavigator)
// export default createAppContainer(createBottomTabNavigator( {
//     Home: { screen: StackNavigator },
//     Settings: { screen: StackNavigator },
// }))
