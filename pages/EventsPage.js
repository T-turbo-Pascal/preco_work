import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

const events = [
  {
    title: 'Final Exam',
    location: 'Room 102',
    time: '1:00 PM',
    date: 'May 7, 2023',
    description: 'Final exam in mathematics'
  },
  {
    title: 'Midterm Exam',
    location: 'Room 101',
    time: '10:00 AM',
    date: 'March 5, 2023',
    description: 'Prepare for the midterm exam in computer science'
  },
  {
    title: 'Thesis Defense',
    location: 'Room 103',
    time: '3:00 PM',
    date: 'June 10, 2023',
    description: 'Defend your thesis in electrical engineering'
  }
];

const EventPage = () => {
  
  const handleRemindMe = async (event) => {
    // Request permission to send notifications (optional)
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    if (status !== 'granted') {
      alert('Permission to send notifications has not been granted');
      return;
    }

    // Schedule the notification
    await Notifications.scheduleNotificationAsync({
      content: {
        title: `Reminder: ${event.title}`,
        body: `${event.description}\nLocation: ${event.location}\nTime: ${event.time}\nDate: ${event.date}`
      },
      trigger: { seconds: 10 }, // Show the notification 10 seconds after scheduling
    });

    console.log(`Scheduled reminder for ${event.title}`);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {events.map((event, index) => (
          <Card key={index} style={styles.card}>
            <Card.Content>
              <Title>{event.title}</Title>
              <Paragraph>Location: {event.location}</Paragraph>
              <Paragraph>Time: {event.time}</Paragraph>
              <Paragraph>Date: {event.date}</Paragraph>
              <Paragraph>Description: {event.description}</Paragraph>
            </Card.Content>
            <Card.Actions style={styles.actions}>
              <Button
                style={styles.remindMeButton}
                mode="contained"
                color="#03A9F4"
                onPress={() => handleRemindMe(event)}
              >
                Remind Me
              </Button>
            </Card.Actions>
          </Card>
        ))}
      </View>
    </ScrollView >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    marginVertical: 10,
    width: '100%',
    borderRadius: 20,
    elevation: 5,
  },
  actions: {
    justifyContent: 'flex-end',
  },
  remindMeButton: {
    margin: 10,
  },
});

export default EventPage;