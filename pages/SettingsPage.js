import React from 'react';
import { View, Text, Switch } from 'react-native';
import { Divider, useTheme, Avatar, List } from 'react-native-paper';

const groups = [
  { id: 'M1_A1', title: 'M1_A1' },
  { id: 'M1_A2', title: 'M1_A2' },
  { id: 'M2_A3', title: 'M2_A3' },
  { id: 'M2_A4', title: 'M2_A4' },
];

const settingsData = [
  { id: 1, title: 'First Name', value: 'John' },
  { id: 2, title: 'Last Name', value: 'Doe' },
  { id: 3, title: 'Department', value: 'Management' },
  { id: 4, title: 'Major', value: 'Marketing' },
  { id: 5, title: 'Email', value: 'john.doe@example.com' },
];

const SettingsPage = () => {
  const theme = useTheme();
  const [selectedGroup, setSelectedGroup] = React.useState(groups[0]);
  const [isAccordionExpanded, setIsAccordionExpanded] = React.useState(false);
  const [isDarkModeEnabled, setIsDarkModeEnabled] = React.useState(false);

  return (
    <View style={{ backgroundColor: theme.colors.background, flex: 1 }}>
      <View style={{ margin: 20, alignItems: 'center' }}>
        <Avatar.Image size={80} source={require('../assets/img/logo.jpg')} />
        <Text style={{ fontSize: 20, marginTop: 10 }}>John Doe</Text>
      </View>
      <Divider />
      {/* <List.Accordion
        title="Group"
        description={selectedGroup.title}
        expanded={isAccordionExpanded}
        onPress={() => setIsAccordionExpanded(!isAccordionExpanded)}
      >
        {groups.map((group) => (
          <List.Item
            key={group.id}
            title={group.title}
            onPress={() => {
              setSelectedGroup(group);
              setIsAccordionExpanded(false);
            }}
          />
        ))}
      </List.Accordion> */}
      {settingsData.map((item) => (
        <List.Item
          key={item.id}
          title={item.title}
          description={item.value}
        />
      ))}
      <Divider />
    </View>
  );
};

export default SettingsPage;
