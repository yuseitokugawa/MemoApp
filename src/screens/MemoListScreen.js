import React from 'react';
import { View, StyleSheet } from 'react-native';
import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';


class MemoListScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MemoList />
        <CircleButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});

export default MemoListScreen;
