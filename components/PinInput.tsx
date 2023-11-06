import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {COLORS} from '../CONSTANTS';

interface PinInputProps {
  enteredPin: string[];
}

const PinInput: React.FC<PinInputProps> = ({enteredPin}) => {
  const [pin, setPin] = useState<string[]>(enteredPin);

  return (
    <View style={styles.container}>
      {pin.map((item, index) => (
        <View
          style={[styles.pinItem, item == null ? null : styles.fillPinItem]}
          key={index}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
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
});

export default PinInput;
