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
      Sme tím vývojárov O68, ktorí spoločne pracujú na poskytovaní kvalitných produktov.
    </Text>
    <Divider />
    <List.Item
      title="Sledujte nás na Twitteri"
      left={props => <List.Icon {...props} icon="twitter" />}
      right={props => (
        <IconButton
          {...props}
          icon="open-in-new"
          onPress={() => Linking.openURL('https://twitter.com/ToDo_UK')}
        />
      )}
    />
    <List.Item
      title="Poskytnúť spätnú väzbu "
      left={props => <List.Icon {...props} icon="mail" />}
      right={props => (
        <IconButton
          {...props}
          icon="open-in-new"
          onPress={() => Linking.openURL('mailto:feedback.todouk@gmail.com?subject=Feedback&body=Poskytnite svoju spätnú väzbu')}
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