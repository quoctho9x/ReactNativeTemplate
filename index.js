/**
 * @format
 */

import { AppRegistry, YellowBox } from 'react-native'
import App from './App/App'
import { name as appName } from './app.json'

// YellowBox.ignoreWarnings(['Require cycle:','Warning:']);
// console.disableYellowBox = true;
AppRegistry.registerComponent(appName, () => App)
