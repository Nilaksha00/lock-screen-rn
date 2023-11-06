import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Svg, {Path} from 'react-native-svg';
import {COLORS, CORRECT_PIN} from '../CONSTANTS';

const KeyPad: React.FC = () => {
  const [pin, setPin] = useState<(string | null)[]>(Array(4).fill(null));
  const [countdown, setCountdown] = useState<number>(60);
  const [errorCount, setErrorCount] = useState<number>(3);
  const [isLocked, setIsLocked] = useState<boolean>(false);

  useEffect(() => {
    pin[3] != null && handlePinSubmit();
  }, [pin]);

  useEffect(() => {
    if (errorCount == 0) {
      setIsLocked(true);
      const interval = setInterval(() => {
        setCountdown(countdown - 1);
        if (countdown == 1) {
          setErrorCount(3);
          setCountdown(60);
          clearInterval(interval);
          setIsLocked(false);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [countdown, errorCount]);

  const keypadData: string[] = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '',
    '0',
    'x',
  ];

  const handleKeyPress = (key: string) => {
    for (let i: number = 0; i < 4; i++) {
      if (pin[i] == null) {
        setPin([...pin.slice(0, i), key, ...pin.slice(i + 1)]);
        return;
      }
    }
  };

  const handlePinSubmit = () => {
    if (pin.join('') == CORRECT_PIN.join('')) {
      setPin(Array(4).fill(null));
      setErrorCount(3);
      Alert.alert('Unlocked', '', [
        {
          text: 'OK',
          onPress: () => {console.log('OK Pressed')},
        },
      ]);
    } else {
      setErrorCount(errorCount - 1);
      setPin(Array(4).fill(null));
      if (errorCount > 1) {
        Alert.alert('Incorrect Pin', 'Try again ', [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
      }
      if (errorCount == 1) {
        Alert.alert('Incorrect Pin', 'You have no more attempts left', [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
      }
    }
  };

  const handleClear = () => {
    let tempPin: (string | null)[] = [...pin];
    for (let i = 3; i >= 0; i--) {
      if (tempPin[i] !== null) {
        tempPin[i] = null;
        setPin(tempPin);
        break;
      }
    }
  };

  const renderItem = ({item}: {item: string}) =>
    item == 'x' ? (
      <TouchableOpacity style={styles.clearKey} onPress={() => handleClear()}>
        <ClearButton />
      </TouchableOpacity>
    ) : (
      <TouchableOpacity
        style={item == '' ? styles.disabledKey : styles.key}
        disabled={item == '' ? true : false || isLocked}
        onPress={() => handleKeyPress(item)}>
        <Text style={styles.keyText}>{item}</Text>
      </TouchableOpacity>
    );

  return (
    <View style={styles.container}>
      <View style={styles.flexItem}>
        {errorCount < 3 && errorCount >= 1 && (
          <Text style={styles.errorText}>
            You have {errorCount} attempts left.
          </Text>
        )}
        {errorCount == 0 && (
          <Text style={styles.errorText}>Try again in {countdown} seconds</Text>
        )}

        <View style={styles.pinContainer}>
          {pin.map((item, index) => (
            <View
              style={[styles.pinItem, item == null ? null : styles.fillPinItem]}
              key={index}
            />
          ))}
        </View>
      </View>

      <FlatList
        data={keypadData}
        numColumns={3}
        keyExtractor={item => item}
        renderItem={renderItem}
        contentContainerStyle={{
          display: 'flex',
          flexGrow: 1,
        }}
      />
    </View>
  );
};

const ClearButton: React.FC = () => {
  return (
    <Svg
      fill="#5A7FD6"
      width={80}
      height={30}
      viewBox="0 0 640 640"
      stroke="#5A7FD6">
      <Path
        d="M576 64H205.26A63.97 63.97 0 0 0 160 82.75L9.37 233.37c-12.5 12.5-12.5 32.76 0 45.25L160 429.25c12 12 28.28 18.75 45.25 18.75H576c35.35 0 64-28.65 64-64V128c0-35.35-28.65-64-64-64zm-84.69 254.06c6.25 6.25 6.25 16.38 0 22.63l-22.62 22.62c-6.25 6.25-16.38 6.25-22.63 0L384 301.25l-62.06 62.06c-6.25 6.25-16.38 6.25-22.63 0l-22.62-22.62c-6.25-6.25-6.25-16.38 0-22.63L338.75 256l-62.06-62.06c-6.25-6.25-6.25-16.38 0-22.63l22.62-22.62c6.25-6.25 16.38-6.25 22.63 0L384 210.75l62.06-62.06c6.25-6.25 16.38-6.25 22.63 0l22.62 22.62c6.25 6.25 6.25 16.38 0 22.63L429.25 256l62.06 62.06z"
        fill="#5A7FD6"
      />
    </Svg>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flexItem: {
    marginVertical: 50,
    alignItems: 'center',
  },
  pinContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  key: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: COLORS.otherElements,
    margin: 10,
    borderRadius: 70,
    padding: 10,
    width: 70,
    height: 70,
  },
  disabledKey: {
    margin: 10,
    padding: 10,
    width: 70,
    height: 70,
    opacity: 0,
  },
  clearKey: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    paddingLeft: 10,
    width: 70,
    height: 70,
  },
  keyText: {
    fontSize: 30,
    fontFamily: 'Roboto-Light',
    color: COLORS.otherElements,
  },
  pinItem: {
    width: 15,
    height: 15,
    borderRadius: 30,
    borderColor: COLORS.otherElements,
    borderWidth: 1.5,
    marginHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fillPinItem: {
    backgroundColor: COLORS.otherElements,
  },
  errorText: {
    position: 'absolute',
    fontSize: 14,
    fontFamily: 'Roboto-Medium',
    color: COLORS.errorText,
    top: -40,
  },
});

export default KeyPad;
