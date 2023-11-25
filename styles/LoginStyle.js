import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
   
    alignItems: 'center',
    justifyContent: 'center', // Center content vertically
  },
  input: {
    borderColor: '#3498db', // Blue border color
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#ecf0f1', // Light gray background color
    marginBottom: 10,
    width: '100%',
    
  },
  inputGroup: {
    marginBottom: 20,
    width: '100%',
    color: "red",
  },
  button: {
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: '#2ecc71', // Green button color
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  }
});

export default styles;