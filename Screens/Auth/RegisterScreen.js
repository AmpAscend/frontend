import React from 'react';
import { View, Text } from 'react-native';

const RegisterScreen = ({ screenName }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{screenName}</Text>
      {/* Add input fields and buttons for login/register */}
    </View>
  );
}

export default RegisterScreen;
