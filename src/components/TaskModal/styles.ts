import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },

  modalTitle: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    padding: 20,
    marginBottom: 20,
    width: '100%',
    backgroundColor: '#2196F3',
    textAlign: 'left',
  },

  modalInput: {
    width: '100%',
    height: 40,
    borderColor: '#2196F3',
    borderWidth: 3,
    borderRadius: 4,
    paddingHorizontal: 10,
    marginBottom: 10,
    fontSize: 15,
  },

  modalDatePicker: {
    width: '100%',
    marginBottom: 30,
  },

  modalButton: {
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    borderRadius: 4,
    marginBottom: 10,
    width: '100%',
    height: 48,
  },

  modalButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
