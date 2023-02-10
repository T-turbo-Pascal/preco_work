import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomePage from './pages/HomePage';
import TodoPage from './pages/TodoPage';
import NewsFeedPage from './pages/NewsFeedPage'
import EventsPage from './pages/EventsPage';
import SettingsPage from './pages/SettingsPage';
import AboutUsPage from './pages/AboutUsPage';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function CustomDrawerContent({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={styles.headerContainer}>
          <Image
            source={require('./assets/img/logo_university.jpg')}
            style={styles.profileImage}
          />
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerText}>Faculty of Management</Text>
            <Text style={styles.headerText}>
              Comenius University in Bratislava
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{ margin: 16 }}
          onPress={() => {
            navigation.navigate('Home');
            navigation.dispatch(DrawerActions.closeDrawer());
          }}>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ margin: 16 }}
          onPress={() => {
            navigation.navigate('Todo');
            navigation.dispatch(DrawerActions.closeDrawer());
          }}>
          <Text>Todo</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ margin: 16 }}
          onPress={() => {
            navigation.navigate('Aktuality');
            navigation.dispatch(DrawerActions.closeDrawer());
          }}>
          <Text>Aktuality</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ margin: 16 }}
          onPress={() => {
            navigation.navigate('Podujatia');
            navigation.dispatch(DrawerActions.closeDrawer());
          }}>
          <Text>Podujatia</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ margin: 16 }}
          onPress={() => {
            navigation.navigate('Nastavenia');
            navigation.dispatch(DrawerActions.closeDrawer());
          }}>
          <Text>Nastavenia</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ margin: 16 }}
          onPress={() => {
            navigation.navigate('O nás');
            navigation.dispatch(DrawerActions.closeDrawer());
          }}>
          <Text>O nás</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={HomePage} />
        <Drawer.Screen name="Todo" component={TodoPage} />
        <Drawer.Screen name="Aktuality" component={NewsFeedPage} />
        <Drawer.Screen name="Podujatia" component={EventsPage} />
        <Drawer.Screen name="Nastavenia" component={SettingsPage} />
        <Drawer.Screen name="O nás" component={AboutUsPage} />
      </Drawer.Navigator>
      
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  safeArea: {
    paddingTop: 20,
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  headerTextContainer: {
    marginLeft: 10,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;


