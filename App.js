import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Drawer, Divider, Avatar, Title, Caption } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomePage from './pages/HomePage';
import TodoPage from './pages/TodoPage';
import NewsFeedPage from './pages/NewsFeedPage'
import EventsPage from './pages/EventsPage';
import SettingsPage from './pages/SettingsPage';
import AboutUsPage from './pages/AboutUsPage';

const DrawerNavigator = createDrawerNavigator();

function CustomDrawerContent({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.headerContainer}>
        <Avatar.Image
          source={require('./assets/img/logo_university.jpg')}
          size={80}
        />
        <View style={styles.headerTextContainer}>
          <Title style={styles.headerText}>Faculty of Management</Title>
          <Caption style={styles.headerText}>
            Comenius University in
          </Caption>
          <Caption style={styles.headerText}>
            Bratislava
          </Caption>
        </View>
      </View>
      <Drawer.Item
        label="Home"
        onPress={() => {
          navigation.navigate('Home');
        }}
        icon={({ color, size }) => <MaterialCommunityIcons name="home" color={color} size={size} />}
      />
      <Drawer.Item
        label="Todo"
        onPress={() => {
          navigation.navigate('Todo');
        }}
        icon={({ color, size }) => <MaterialCommunityIcons name="format-list-bulleted" color={color} size={size} />}
      />
      <Drawer.Item
        label="Aktuality"
        onPress={() => {
          navigation.navigate('Aktuality');
        }}
        icon={({ color, size }) => <MaterialCommunityIcons name="newspaper" color={color} size={size} />}
      />
      <Drawer.Item
        label="Podujatia"
        onPress={() => {
          navigation.navigate('Podujatia');
        }}
        icon={({ color, size }) => <MaterialCommunityIcons name="calendar" color={color} size={size} />}
      />
      <Drawer.Item
        label="Nastavenia"
        onPress={() => {
          navigation.navigate('Nastavenia');
        }}
        icon={({ color, size }) => <MaterialCommunityIcons name="cog" color={color} size={size} />}
      />
      <Drawer.Item
        label="O nás"
        onPress={() => {
          navigation.navigate('O nás');
        }}
        icon={({ color, size }) => <MaterialCommunityIcons name="information" color={color} size={size} />}
      />
      <Divider />
      <Drawer.Item
        label="Odhlásiť sa"
        onPress={() => {
          // Code to handle logout action
        }}
        icon={({ color, size }) => <MaterialCommunityIcons name="logout" color={color} size={size} />}
      />
    </View>
  );
}

function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <DrawerNavigator.Navigator
          initialRouteName="Home"
          drawerContent={props => <CustomDrawerContent {...props} />}
        >
          <DrawerNavigator.Screen
            name="Home"
            component={HomePage}
            options={{ title: 'Domov' }}
          />
          <DrawerNavigator.Screen
            name="Todo"
            component={TodoPage}
            options={{ title: 'Úlohy' }}
          />
          <DrawerNavigator.Screen
            name="Aktuality"
            component={NewsFeedPage}
            options={{ title: 'Aktuality' }}
          />
          <DrawerNavigator.Screen
            name="Podujatia"
            component={EventsPage}
            options={{ title: 'Podujatia' }}
          />
          <DrawerNavigator.Screen
            name="Nastavenia"
            component={SettingsPage}
            options={{ title: 'Nastavenia' }}
          />
          <DrawerNavigator.Screen
            name="O nás"
            component={AboutUsPage}
            options={{ title: 'O nás' }}
          />
        </DrawerNavigator.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerTextContainer: {
    marginLeft: 20,
    paddingTop: 10,
  },
  headerText: {
    fontWeight: 'bold',
    color: '#333'
  },
});

export default App;