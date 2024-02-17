import React from 'react';
import { View, Text } from 'react-native';

const PlaceholderScreen = ({ screenName }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{screenName}</Text>
      <button>Click me</button>
    </View>
  );
}

export default PlaceholderScreen;
