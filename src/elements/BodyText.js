import { StyleSheet, View, Text } from 'react-native';
import React from 'react';

class BodyText extends React.Component {
  render() {
    return (
      <View>
        <Text style={style.text}>
          { }
        </Text>
        <BodyText>{this.state}</BodyText>
      </View>
    );
  }
}

const style = StyleSheet.create({
  text: {
    color: '#ddd',
    backgroundColor: '#eee',
  },
});

export default BodyText;
