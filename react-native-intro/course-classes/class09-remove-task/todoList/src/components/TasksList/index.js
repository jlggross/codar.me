import * as React from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';

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

const Item = ({title, onRemove, ...item}) => {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => onRemove({...item, title})}>
      <Text style={styles.itemText}>{title}</Text>
    </TouchableOpacity>
  );
};

export const TasksList = ({tasks, onRemove}) => {
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => `${item.id}`}
      renderItem={({item}) => <Item {...item} onRemove={onRemove} />}
    />
  );
};
