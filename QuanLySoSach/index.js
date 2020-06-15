/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import App from './src/containers/App'
import Root from './src/index'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Root);
