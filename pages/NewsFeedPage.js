import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const NewEvent = () => {
  const fbEventLink = "https://www.facebook.com/events/1355098918676959/?acontext=%7B%22ref%22%3A%2252%22%2C%22action_history%22%3A%22%5B%7B%5C%22surface%5C%22%3A%5C%22share_link%5C%22%2C%5C%22mechanism%5C%22%3A%5C%22share_link%5C%22%2C%5C%22extra_data%5C%22%3A%7B%5C%22invite_link_id%5C%22%3A531051945835768%7D%7D%5D%22%7D";
  const igPageLink = "https://www.instagram.com/beania.fmuk/";

  const openFBEvent = () => {
    Linking.openURL(fbEventLink);
  };

  const openIGPage = () => {
    Linking.openURL(igPageLink);
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Image source={{ uri: 'https://scontent.fbts10-1.fna.fbcdn.net/v/t39.30808-6/332140139_616770566951464_5773071828084799495_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=340051&_nc_ohc=5dr93S6Qf2YAX9eid3J&_nc_ht=scontent.fbts10-1.fna&oh=00_AfBhR0MiiQjycZIKWDKEZtlVQJsHcxV69j9ZJkny01DczQ&oe=64028243' }} style={styles.image} />
        <View style={styles.textContainer}>
          <Title style={styles.title}>OPEN SEMESTER PARTY 🔥</Title>
          <Paragraph style={styles.paragraph}>
            The semester is already in full swing, but you feel like it hasn’t even started yet? 🤔 Come and welcome it properly with us on THURSDAY 2nd of March 2023 in UNIX LINUX and grant yourself a desired boost of energy for the rest of the semester! 🔥
          </Paragraph>
          <Paragraph style={styles.paragraph}>
            A lot of fun awaits you, great music and the greatest people under the sun! 🤩 So, see you on the dance floor? 💃🏼🕺🏽
          </Paragraph>
          <Paragraph style={styles.paragraph}>
            Bring your friends and let’s fire it up together! Everyone is welcome! 🥳
          </Paragraph>
          <Paragraph style={styles.paragraph}>
            We are looking forward to seeing you! 💗 More info:
            <TouchableOpacity onPress={openFBEvent}>
              <Text style={styles.link}>FB event</Text>
            </TouchableOpacity>
            ,
            <TouchableOpacity onPress={openIGPage}>
              <Text style={styles.link}>IG page</Text>
            </TouchableOpacity>
          </Paragraph>
          <Paragraph style={styles.date}>2 March 2023 (Thursday) | 22:00 (10pm) | Unik Mlyny | 5€</Paragraph>
          <Paragraph style={styles.capacity}>*capacity is limited! Tickets will be sold on site!</Paragraph>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5'
  },
  card: {
    marginVertical: 10,
    padding: 0,
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    resizeMode: 'cover',
  },
  textContainer: {
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#222'
  },
  paragraph: {
    fontSize: 14,
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
    color: '#444'
  },
  date: {
    fontSize: 14,
    color: '#888',
    marginTop: 10,
    textAlign: 'center'
  },
  capacity: {
    fontSize: 14,
    color: 'red',
    marginTop: 10,
    textAlign: 'center'
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginHorizontal: 5
  }
});

export default function App() {
  return (
    <View style={styles.container}>
      <NewEvent />
    </View>
  );
}