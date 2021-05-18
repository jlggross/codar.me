import * as React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#43bc70',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 28,
  },
});

export const App = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Hello World</Text>
    <TouchableOpacity onPress={() => console.log('clicked')}>
      <Text>Click-me</Text>
    </TouchableOpacity>
  </View>
);
