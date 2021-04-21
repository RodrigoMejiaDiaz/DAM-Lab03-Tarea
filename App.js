import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AgeValidator from './components/AgeValidator';
import LaLista from './components/LaLista';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <AgeValidator textAge={'Age >= 18?'} />
        <LaLista />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
});
