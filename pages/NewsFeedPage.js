import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Provider, Dialog, Portal, Paragraph, Button } from 'react-native-paper';

const NewsCard = ({ image, title, shortDescription, description }) => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity onPress={() => setVisible(true)}>
        <Image source={{ uri: image }} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.shortDescription}>{shortDescription}</Text>
      </TouchableOpacity>
      <Portal>
        <Dialog visible={visible} onDismiss={() => setVisible(false)}>
          <Dialog.Title>{title}</Dialog.Title>
          <Dialog.Content>
            <Paragraph>{description}</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setVisible(false)}>Close</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

const NewsFeed = () => {
  const news = [
    {
      image: 'https://www.fm.uniba.sk/typo3temp/pics/Online_konzultacie_info_01_f94f47ecd5.jpg',
      title: 'ONLINE LANGUAGE LEARNING CONSULTATIONS',
      shortDescription: 'We support our students in learning French, German or English.',
      description: 'The courses will be taught by subject teachers, so they will be able to answer questions related both to the entrance exams and to the curriculum subjects related to those subjects. The courses will be offered after school hours in high schools, outside of school vacations. International Management Studies Program: Time: 02.02.2023',
    },
    {
      image: 'https://www.fm.uniba.sk/typo3temp/pics/009_FOTO_Smart_City_360_8b813b19c9.jpg',
      title: 'Smart City 360° Summit',
      shortDescription: 'On 18.01.2023, under the guidance of Prof. Dagmar KAGÁŇOVA, PhD',
      description: 'On 18.01.2023, under the guidance of Prof. Dagmar KAGÁŇOVA, PhD, plenipotentiary representative of the Dean for grants at FM UK in Bratislava and co-founder of the European Alliance for Innovation in Slovakia (EAI SK), the first strategy meeting took place to prepare the 10th EAI Smart City 360° Summit, organised under the aegis of EAI SK and its president Prof. Imrich HLAMTACH in cooperation with FM UK. In addition to the above, the purpose of the strategy meeting was to establish contacts between experts from the domestic and international environment, to identify common research topics and projects, as well as the focus of individual conferences within the EAI Summit Smart City360°.',
    },
  ];

  return (
      <Provider>
        <View style={styles.container}>
          {news.map((n, i) => (
            <NewsCard
              key={i}
              image={n.image}
              title={n.title}
              shortDescription={n.shortDescription}
              description={n.description}
            />
          ))}
        </View>
      </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    width: '90%',
    marginVertical: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 10,
    textAlign: 'center',
  },
  shortDescription: {
    fontSize: 14,
    textAlign: 'center',
  },
});

export default NewsFeed;
