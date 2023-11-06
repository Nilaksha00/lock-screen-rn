import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import KeyPad from './components/KeyPad';
import {SafeAreaView} from 'react-native-safe-area-context';
import PinInput from './components/PinInput';
import {COLORS} from './CONSTANTS';

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
    flex: 1,
    paddingVertical: dimension.height * 0.2,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    width: dimension.width,
    height: dimension.height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 26,
    fontFamily: 'Roboto-Light',
    color: COLORS.otherElements,
  }
});

export default App;
