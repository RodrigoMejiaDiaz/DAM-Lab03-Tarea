import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from 'react-native';

const DATA = [
  {
    id: '0',
    title: 'First Item',
    imagen: 'https://picsum.photos/60/300',
  },
  {
    id: '1',
    title: 'Second Item',
    imagen: 'https://picsum.photos/100/300',
  },
  {
    id: '2',
    title: 'Third Item',
    imagen: 'https://picsum.photos/200/300',
  },
];

const Item = ({title, imagen}) => (
  <View style={styles.item}>
    <Image
      source={{uri: imagen}}
      style={{width: 60, height: 60, borderRadius: 30}}
    />
    <Text style={styles.title}>{title}</Text>
  </View>
);

const LaLista = () => {
  const renderItem = ({item}) => {
    return <Item title={item.title} imagen={item.imagen} />;
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default LaLista;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
