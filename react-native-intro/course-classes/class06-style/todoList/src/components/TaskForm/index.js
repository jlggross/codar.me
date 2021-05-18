import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const styles = StyleSheet.create({
  input: {
    margin: 8,
    borderColor: '#333',
    borderWidth: 1,
  },
});

export const TaskForm = () => {
  return <TextInput name="task" style={styles.input} />;
};
