import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from 'react-native';
import React from 'react';

const KeyPad: React.FC = () => {
  const keypadData: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

  const renderItem = ({item}: {item: string}) => (
    <TouchableOpacity style={styles.key} onPress={() => handleKeyPress(item)}>
      <Text style={styles.keyText}>{item}</Text>
    </TouchableOpacity>
  );

  const handleKeyPress = (key: string) => {
    console.log(`Pressed key: ${key}`);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <FlatList
          data={keypadData}
          numColumns={3}
          keyExtractor={item => item}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FAFAFA',
  },
  key: {
    // flex: 1,
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
  keyText: {
    fontSize: 30,
    fontFamily: 'Roboto-Light',
    color: '#5A7FD6',
  },
});

export default KeyPad;
