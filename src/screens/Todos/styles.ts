import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  
  header: {
    color: '#fff',
    backgroundColor: '#2196F3',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
    padding: 20,
    marginBottom: 20,
    width: '100%',
  },

  taskList: {
    alignSelf: 'stretch',
  },

  taskCard: {
    margin: 16,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    padding: 16,
    alignSelf: 'stretch',
  },

  taskTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  taskDescription: {
    fontSize: 16,
    marginBottom: 8,
  },

  taskDate: {
    fontSize: 14,
    fontStyle: 'italic',
  },

  addButton: {
    backgroundColor: '#2196F3',
    borderRadius: 50,
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 32,
    right: 32,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    zIndex: 10,
  },

  addButtonText: {
    color: '#fff',
    fontSize: 24,
  },
});