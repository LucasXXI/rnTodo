import React, {useState} from 'react';
import {View, Text, TextInput, Modal, TouchableOpacity} from 'react-native';
import {Task} from '../../screens/Todos';
import DatePicker from 'react-native-date-picker';

import styles from './styles';

type TaskModalProps = {
  isModalVisible: boolean;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  onAddTask: (task: Task) => void;
};

const TaskModal = (props: TaskModalProps) => {
  const {isModalVisible, setIsModalVisible, onAddTask} = props;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());

  const handleAddTask = () => {
    console.log({title, description, date});
    onAddTask({title, description, date, id: 1});
    setTitle('');
    setDescription('');
    setDate(new Date());
    setIsModalVisible(false);
  };

  return (
    <Modal
      visible={isModalVisible}
      animationType="slide"
      onRequestClose={() => setIsModalVisible(false)}>
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Nova Tarefa</Text>
        <TextInput
          style={styles.modalInput}
          placeholder="Título"
          value={title}
          onChangeText={text => setTitle(text)}
        />
        <TextInput
          style={styles.modalInput}
          placeholder="Descrição"
          value={description}
          onChangeText={text => setDescription(text)}
        />
        <DatePicker
          //make it appear as a modal
          mode="date"
          date={date}
          onDateChange={selectedDate => setDate(new Date(selectedDate))}
          locale="pt-br"
        />
        <TouchableOpacity style={styles.modalButton} onPress={handleAddTask}>
          <Text style={styles.modalButtonText}>Adicionar Tarefa</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.modalButton}
          onPress={() => setIsModalVisible(false)}>
          <Text style={styles.modalButtonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default TaskModal;
