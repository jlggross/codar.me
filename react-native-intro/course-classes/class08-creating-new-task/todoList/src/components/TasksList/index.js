import * as React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';

const styles = StyleSheet.create({
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#FFF',
  },

  itemText: {
    fontSize: 16,
  },
});

const Item = ({title}) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>{title}</Text>
    </View>
  );
};

export const TasksList = ({tasks}) => {
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => `${item.id}`}
      renderItem={({item}) => <Item {...item} />}
    />
  );
};
