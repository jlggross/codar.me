import * as React from 'react';
import {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import axios from 'axios';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#43bc70',
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

      <FlatList
        data={state.data}
        keyExtractor={item => `${item.id}`}
        renderItem={({item}) => <Text>{item.title}</Text>}
      />
    </View>
  );
};
