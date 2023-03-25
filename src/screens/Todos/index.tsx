import React, {useState} from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import {styles} from './styles';
import TaskModal from '../../components/TaskModal/index';

export type Task = {
  id: number;
  title: string;
  description: string;
  date: Date;
};

type NewTask = Omit<Task, 'id'>;

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  function handleAddTask(newTask: NewTask) {
    setIsModalVisible(false);
    const task: Task = {
      ...newTask,
      id: tasks.length + 1,
    };
    setTasks([...tasks, task]);
  }

  function handleDeleteTask(id: number) {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista de Tarefas</Text>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setIsModalVisible(true)}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
      <FlatList
        data={tasks.sort((a, b) => a.date.getTime() - b.date.getTime())}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.taskCard}
            onPress={() => handleDeleteTask(item.id)}>
            <Text style={styles.taskTitle}>{item.title}</Text>
            <Text style={styles.taskDescription}>{item.description}</Text>
            <Text style={styles.taskDate}>
              Data de Conclusão: {item.date.toLocaleDateString()}
            </Text>
          </TouchableOpacity>
        )}
      />

      <TaskModal
        isModalVisible={isModalVisible}
        setIsModalVisible={() => setIsModalVisible(false)}
        onAddTask={handleAddTask}
      />
    </View>
  );
}
