import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Text, AsyncStorage, KeyboardAvoidingView } from 'react-native';
import { TextInput, Button, Checkbox, Chip } from 'react-native-paper';
import { Swipeable } from 'react-native-gesture-handler';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [filter, setFilter] = useState('all');

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

  const filteredTodos = () => {
    switch (filter) {
      case 'all':
        return todos;
      case 'done':
        return todos.filter((todo) => todo.completed);
      case 'not-done':
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Chip selected={filter === 'all'} style={styles.chip} onPress={() => setFilter('all')}>
          Všetky
        </Chip>
        <Chip selected={filter === 'done'} style={styles.chip} onPress={() => setFilter('done')}>
          Hotovo
        </Chip>
        <Chip selected={filter === 'not-done'} style={styles.chip} onPress={() => setFilter('not-done')}>
          Nevykonáva sa
        </Chip>
      </View>
      {/* <KeyboardAvoidingView style={styles.todoList} behavior="padding"> */}
        <FlatList
          data={filteredTodos()}
          renderItem={({ item }) => (
            <Swipeable renderRightActions={(_, dragX) => (
              <View style={styles.rightActions}>
                {item.key === editingKey ? (
                  <View style={styles.editActions}>
                    <Button onPress={saveEdit}>Uložiť</Button>
                  </View>
                ) : (
                  <View style={styles.swipeActions}>
                    <Button onPress={() => handleEditPress(item.key, item.text)}>Upraviť</Button>
                    <Button onPress={() => removeTodo(item.key)}>Vymazať</Button>
                  </View>
                )}
              </View>
            )}>
              <View style={styles.todoItem}>
                <Checkbox
                  status={item.completed ? 'checked' : 'unchecked'}
                  onPress={() => handleTodoPress(item.key)}
                />
                <Text
                  style={[
                    styles.todoText,
                    item.completed ? styles.completed : null,
                    item.key === editingKey ? styles.editing : null
                  ]}
                  onPress={() => handleTodoPress(item.key)}
                >
                  {item.text}
                </Text>
              </View>
            </Swipeable>
          )}
        />
        {editingKey ? (
          <TextInput
            style={styles.todoInput}
            value={editText}
            onChangeText={setEditText}
            onSubmitEditing={saveEdit}
          />
        ) : (
          <TextInput
            style={styles.todoInput}
            value={text}
            onChangeText={setText}
            onSubmitEditing={addTodo}
            placeholder="Pridať úlohu"
            returnKeyType="done"
            blurOnSubmit={false}
          />
        )}
      {/* </KeyboardAvoidingView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 8,
    backgroundColor: '#fff',
    elevation: 4,
  },
  todoList: {
    flex: 1,
    padding: 8,
    backgroundColor: '#fff',
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#fff',
  },
  todoText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 8,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  editing: {
    backgroundColor: '#f9f9f9',
  },
  todoInput: {
    height: 48,
    backgroundColor: '#fff',
    padding: 8,
    margin: 8,
    fontSize: 16,
    elevation: 4,
  },
  rightActions: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'red',
    justifyContent: 'flex-end',
  },
  swipeActions: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 8,
    width: 160,
    justifyContent: 'flex-end',
  },
  editActions: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'yellow',
    padding: 8,
    width: 128,
    justifyContent: 'flex-end',
  },
  chip: {
    margin: 4,
  },
});

export default TodoApp;