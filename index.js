/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import KeyPad from './components/KeyPad';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => KeyPad);
