
import { StyleSheet, View } from 'react-native';
import React from 'react';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import Appbar from './src/components/Appbar';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Appbar />
        <MemoDetailScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffdf6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 78,
  },
});
