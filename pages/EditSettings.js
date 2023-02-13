import React, { useState } from 'react';
import { View, TextInput, Picker, Alert } from 'react-native';
import { useTheme, Divider, Button, Text } from 'react-native-paper';

const EditSettingsPage = ({ navigation }) => {
  const theme = useTheme();
  const [firstName, setFirstName] = useState(settingsData[0].value);
  const [lastName, setLastName] = useState(settingsData[1].value);
  const [department, setDepartment] = useState(settingsData[2].value);
  const [major, setMajor] = useState(settingsData[3].value);
  const [email, setEmail] = useState(settingsData[4].value);

  return (
    <View style={{ backgroundColor: theme.colors.background, flex: 1 }}>
      <TextInput
        style={{ margin: 20, fontSize: 20 }}
        label="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={{ margin: 20, fontSize: 20 }}
        label="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      <Picker
        selectedValue={department}
        style={{ margin: 20 }}
        onValueChange={(itemValue) => setDepartment(itemValue)}
      >
        <Picker.Item label="Management" value="Management" />
        <Picker.Item label="Sales" value="Sales" />
        <Picker.Item label="Engineering" value="Engineering" />
      </Picker>
      <Picker
        selectedValue={major}
        style={{ margin: 20 }}
        onValueChange={(itemValue) => setMajor(itemValue)}
      >
        <Picker.Item label="Marketing" value="Marketing" />
        <Picker.Item label="Finance" value="Finance" />
        <Picker.Item label="Computer Science" value="Computer Science" />
      </Picker>
      <TextInput
        style={{ margin: 20, fontSize: 20 }}
        label="Email"
        value={email}
        onChangeText={setEmail}
      />
    </View>
  );
};
