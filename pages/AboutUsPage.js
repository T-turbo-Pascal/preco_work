import React from 'react';
import { View, Image, StyleSheet, Linking } from 'react-native';
import { Text, Divider, List, IconButton } from 'react-native-paper';

const AboutUsPage = () => (
  <View style={styles.container}>
    <Image
      source={require('../assets/img/aboutUs.jpg')}
      style={styles.image}
    />
    <Text style={styles.text}>
      We a team of O68 devs, working together to deliver quality products. 
    </Text>
    <Divider />
    <List.Item
      title="Follow us on Twitter"
      left={props => <List.Icon {...props} icon="twitter" />}
      right={props => (
        <IconButton
          {...props}
          icon="open-in-new"
          onPress={() => Linking.openURL('https://twitter.com/ToDoUK_log')}
        />
      )}
    />
    <List.Item
      title="Our design on Figma"
      left={props => <List.Icon {...props} icon="map" />}
      right={props => (
        <IconButton
          {...props}
          icon="open-in-new"
          onPress={() => Linking.openURL('https://www.figma.com/file/8NhZdxQY6rSpuyfNY1VbeZ/ToDoUk?node-id=0%3A1&t=QnQFD8NnUDTNCnE4-0')}
        />
      )}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    width: 310,
    height: 310,
    borderRadius: 20,
    marginVertical: 20,
    alignSelf: 'center',
  },
  text: {
    fontSize: 16,
    marginVertical: 20,
    textAlign: 'center',
  },
});

export default AboutUsPage;