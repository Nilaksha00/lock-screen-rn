/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  Dimensions,
} from 'react-native';
import KeyPad from './components/KeyPad';
import {SafeAreaView} from 'react-native-safe-area-context';

const dimension = Dimensions.get('window');

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <View style={styles.container}>
        <Text style={styles.textStyle}>Enter Passcode</Text>
        <KeyPad />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    // backgroundColor: '#FAFAFA',
    backgroundColor: 'red',
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    height: dimension.height,
    width: dimension.width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 20,
    fontFamily: 'Roboto-Regular',
    color: '#5A7FD6',
    // marginTop: 100,
    // marginBottom: 50,
  },
});

export default App;
