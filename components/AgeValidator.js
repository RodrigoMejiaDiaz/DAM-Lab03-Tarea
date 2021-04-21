import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

const ageValidator = props => {
  const [age, setAge] = useState('');
  let texto;
  if (age >= 18) {
    texto = <Text style={styles.text}>Es mayor de edad</Text>;
  }
  if (age < 18) {
    texto = <Text style={styles.text}>Es menor de edad</Text>;
  }
  return (
    <View>
      <Text style={styles.text}>{props.textAge}</Text>
      <TextInput
        style={styles.input}
        onChangeText={age => setAge(age)}
        defaultValue={age}
        keyboardType={'numeric'}
        maxLength={2}
      />
      {texto}
    </View>
  );
};

export default ageValidator;

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: 'white',
  },
  input: {
    backgroundColor: 'white',
    fontSize: 20,
  },
});
