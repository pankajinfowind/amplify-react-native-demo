/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import AppNavigation from './src/components/Routes';
import {withAuthenticator} from 'aws-amplify-react-native';

function App() {
  return <AppNavigation />;
}
export default withAuthenticator(App);
