import React from 'react';
import {useState} from 'react';
import {StyleSheet, View, Text, TextInput, Button} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 12,
  },

  input: {
    marginBottom: 12,
    borderColor: '#333',
    borderWidth: 1,
    backgroundColor: '#FFF',
    padding: 8,
  },

  title: {
    marginBottom: 12,
    fontSize: 18,
    fontWeight: '700',
  },
});

export const TaskForm = ({onSuccess}) => {
  const [state, setState] = useState('');

  const onChange = value => setState(value);

  const onSubmit = () => {
    if (state) {
      const item = {id: Math.random(), title: state};
      onSuccess(item);
      setState('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Task</Text>
      <TextInput
        name="task"
        value={state}
        style={styles.input}
        onChangeText={onChange}
      />
      <Button title="Add" onPress={onSubmit} disabled={!state} />
    </View>
  );
};
