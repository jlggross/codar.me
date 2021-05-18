import * as React from 'react';
import {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import axios from 'axios';

import {TasksList, TaskForm} from './components';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ebebec',
    flex: 1,
  },

  title: {
    fontSize: 28,
  },
});

export const App = () => {
  const [state, setState] = useState({
    loading: true,
    data: [],
  });

  const onSuccess = item => {
    setState(prev => ({
      ...prev,
      data: [...prev.data, item],
    }));
  };

  // useEffect will run just the first time this component is built, so the dependency array is empty []
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos').then(res =>
      setState({
        loading: false,
        data: [res.data.pop()],
      }),
    );
  }, []);

  return (
    <View style={styles.container}>
      {state.loading && <Text>Loading</Text>}

      <TaskForm onSuccess={onSuccess} />
      <TasksList tasks={state.data} />
    </View>
  );
};
