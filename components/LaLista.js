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
    des:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,',
    imagen: 'https://picsum.photos/60/300',
  },
  {
    id: '1',
    title: 'Second Item',
    des:
      ' justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellu',
    imagen: 'https://picsum.photos/100/300',
  },
  {
    id: '2',
    title: 'Third Item',
    des:
      'r libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,',
    imagen: 'https://picsum.photos/200/300',
  },
  {
    id: '3',
    title: 'First Item',
    des:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,',
    imagen: 'https://picsum.photos/60/300',
  },
  {
    id: '4',
    title: 'Second Item',
    des:
      ' justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellu',
    imagen: 'https://picsum.photos/100/300',
  },
  {
    id: '5',
    title: 'Third Item',
    des:
      'r libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,',
    imagen: 'https://picsum.photos/200/300',
  },
];

const Item = ({title, imagen, des}) => (
  <View style={styles.item}>
    <Image source={{uri: imagen}} style={styles.imagen} />
    <View style={styles.itemDesc}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{des}</Text>
    </View>
  </View>
);

const LaLista = () => {
  const renderItem = ({item}) => {
    return <Item title={item.title} imagen={item.imagen} des={item.des} />;
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
  imagen: {width: 90, height: 90, borderRadius: 30},
  item: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  itemDesc: {flex: 1, padding: 5},
  desc: {},
  title: {fontSize: 20},
});
