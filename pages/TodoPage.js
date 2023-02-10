import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Text, AsyncStorage, KeyboardAvoidingView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { Swipeable } from 'react-native-gesture-handler';
import { Chip } from 'react-native-paper';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const value = await AsyncStorage.getItem('todos');
        if (value !== null) {
          setTodos(JSON.parse(value));
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (text.trim()) {
      setTodos([...todos, { text, key: Date.now().toString() }]);
      setText('');
    }
  };

  const removeTodo = (key) => {
    setTodos(todos.filter((todo) => todo.key !== key));
  };

  const handleTodoPress = (key) => {
    setTodos(
      todos.map((todo) => {
        if (todo.key === key) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const [editingKey, setEditingKey] = useState(null);
  const [editText, setEditText] = useState('');

  const handleEditPress = (key, text) => {
    setEditingKey(key);
    setEditText(text);
  };

  const saveEdit = () => {
    setTodos(
      todos.map((todo) => {
        if (todo.key === editingKey) {
          return { ...todo, text: editText };
        }
        return todo;
      })
    );
    setEditingKey(null);
    setEditText('');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <Swipeable
            renderLeftActions={editingKey === item.key ? () => (
              <Button style={styles.swipeButtonSave} onPress={saveEdit}>Save</Button>
            ) : () => (
              <Button style={styles.swipeButtonEdit} onPress={() => handleEditPress(item.key, item.text)}>Edit</Button>
            )}
            renderRightActions={() => (
              <Button style={styles.swipeButtonDelete} onPress={() => removeTodo(item.key)}>Delete</Button>
            )
            }
          >
            <View style={styles.todoContainer}>
              <Text
                style={[styles.todo, item.completed ? styles.completed : null]}
                onPress={() => handleTodoPress(item.key)}
              >
                {item.text}
              </Text>
            </View>
          </Swipeable >
        )}
      />
      {
        editingKey !== null ? (//style={styles.inputContainer}
          <KeyboardAvoidingView behavior="padding" >
            <TextInput
              //style={styles.input}
              value={editText}
              onChangeText={(text) => setEditText(text)}
              onSubmitEditing={saveEdit}
            />
          </KeyboardAvoidingView>
        ) : (//style={styles.inputContainer}
          <KeyboardAvoidingView behavior="padding" >
            <TextInput
              //style={styles.input}
              value={text}
              onChangeText={(text) => setText(text)}
              onSubmitEditing={addTodo}
              placeholder="Pridajte položku úlohy"
            />
          </KeyboardAvoidingView>
        )
      }
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  todoContainer: {
    marginVertical: 10,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 3,
  },
  todo: {
    fontSize: 16,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#BBBBBB',
  },
  inputContainer: {
    marginTop: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 10,
    padding: 10,
  },
  input: {
    fontSize: 16,
  },
  swipeButtonEdit: {
    paddingTop: 20,
    borderRadius: 15,
    padding: 20,
  },
  swipeButtonSave: {
    paddingTop: 20,
    borderRadius: 15,
    padding: 20,
  },
  swipeButtonDelete: {
    paddingTop: 20,
    borderRadius: 15,
    padding: 20,
  },
});

export default TodoApp;