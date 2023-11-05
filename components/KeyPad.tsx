import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import React from 'react';
import Clear from './ClearButton';

const KeyPad: React.FC = () => {
  const keypadData = [
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

  const renderItem = ({item}: {item: any}) =>
    item == 'x' ? (
      <TouchableOpacity style={styles.clearKey}>
        <Clear />
      </TouchableOpacity>
    ) : (
      <TouchableOpacity
        style={item == '' ? styles.disabledKey : styles.key}
        onPress={() => handleKeyPress(item)}>
        <Text style={styles.keyText}>{item}</Text>
      </TouchableOpacity>
    );

  const handleKeyPress = (key: string) => {
    console.log(`Pressed key: ${key}`);
  };

  return (
      <View style={styles.container}>
        <FlatList
          data={keypadData}
          numColumns={3}
          keyExtractor={item => item}
          renderItem={renderItem}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  key: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: '#5A7FD6',
    margin: 10,
    borderRadius: 70,
    padding: 10,
    width: 70,
    height: 70,
  },
  disabledKey: {
    border: 'none',
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
    padding: 10,
    width: 70,
    height: 70,
  },
  keyText: {
    fontSize: 30,
    fontFamily: 'Roboto-Light',
    color: '#5A7FD6',
  },
});

export default KeyPad;
