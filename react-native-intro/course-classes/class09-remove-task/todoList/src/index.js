import * as React from 'react';
import {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Alert} from 'react-native';
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

  const onSuccess = async title => {
    try {
      const res = await axios({
        method: 'post',
        url: 'https://jsonplaceholder.typicode.com/todos',
        data: {
          userId: 1,
          title: title,
        },
      });

      setState(prev => ({
        ...prev,
        data: [res.data, ...prev.data], // If title is added in the back end, we add res.data to the list of tasks
      }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemove = async ({id, title}) => {
    try {
      await axios({
        method: 'delete',
        url: `https://jsonplaceholder.typicode.com/todos/${id}`, // In a real application this would remove the item from the back end
      });

      setState(prev => ({
        ...prev,
        data: prev.data.filter(item => item.id !== id),
      }));

      Alert.alert(`Task "${title}" has been removed.`);
    } catch (error) {
      console.log(error);
    }
    console.log(`Removing ${id}`);
  };

  const onRemove = item => {
    //Alert.alert(`Removing item ${item.id} - ${item.title}`);
    Alert.alert('Removing Item', `Do you want to remove "${item.title}"?`, [
      {
        text: 'No',
        style: 'remove-no',
      },
      {
        text: 'Yes',
        onPress: () => handleRemove(item),
      },
    ]);
  };

  // useEffect will run just the first time this component is built, so the dependency array is empty []
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos').then(res =>
      setState({
        loading: false,
        data: res.data,
      }),
    );
  }, []);

  return (
    <View style={styles.container}>
      {state.loading && <Text>Loading</Text>}

      <TaskForm onSuccess={onSuccess} />
      <TasksList tasks={state.data} onRemove={onRemove} />
    </View>
  );
};
