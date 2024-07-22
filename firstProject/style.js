import {StyleSheet} from 'react-native';

const nameInputStyle = StyleSheet.create({
  inputFieldsStyle: {
    fontSize: 18,
    color: 'red',
    borderRadius: 2,
    borderColor: 'red',
    borderWidth: 2,
    margin: 10,
    padding: 10,
  },
});

const myButtons = StyleSheet.create({
  buttonStyle: {
    fontSize: 18,
    fontStyle: 'italic',
    borderRadius: 5,
    backgroundColor: 'green',
    color: 'white',
    textAlignVertical: 'center',
    textAlign: 'center',
    marginVertical: 10,
    padding: 10,
  },
});

const flatStyles = StyleSheet.create({
  flat: {
    fontSize: 20, // Corrected from fontStyle to fontSize
    color: 'white',
    margin: 10,
    padding: 10,
    fontFamily: 'sans-serif',
    backgroundColor: 'blue',
    borderColor: 'purple',
    borderWidth: 2,
  },
});

const gridStyles = StyleSheet.create({
  griditem: {
    fontSize: 20,
    fontFamily: 'arial',
    backgroundColor: 'blue',
    color: 'white',
    margin: 5,
    padding: 5,
    height: 100,
    width: 100,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

const compFlatStyles = StyleSheet.create({
  item: {
    color: 'black',
    flex: 1,
    margin: 5,
    padding: 5,
    backgroundColor: 'lightblue',
  },
  box: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'black',
    margin: 5,
  },
});

const flexStyles = StyleSheet.create({
  box1: {
    flex: 2,
    backgroundColor: 'red',
    flexDirection: 'row',
  },
  box2: {
    flex: 1,
    backgroundColor: 'green',
  },
  box3: {
    flex: 1,
    backgroundColor: 'blue',
  },
  box4: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  innerBox1: {
    flex: 1,
    backgroundColor: 'orange',
    margin: 15,
  },
  innerBox2: {
    flex: 1,
    backgroundColor: 'pink',
    margin: 15,
  },
  innerBox3: {
    flex: 1,
    backgroundColor: 'cyan',
    margin: 15,
  },
});

const touchStyles = StyleSheet.create({
  main: {
    flex: 1,
  },
  button: {
    fontSize: 10,
    backgroundColor: 'lightblue',
    color: 'black',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    textAlign: 'center',
    shadowColor: 'red',
    elevation: 10,
    shadowOpacity: 1,
  },
  button1: {
    fontSize: 10,
    backgroundColor: 'lightgreen',
    color: 'black',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    textAlign: 'center',
    shadowColor: 'red',
    elevation: 10,
    shadowOpacity: 1,
  },
});

const myButtonStyles = StyleSheet.create({
  myVariableButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  myRadio: {
    fontSize: 20,
  },
  radio: {
    height: 40,
    width: 40,
    borderWidth: 2,
    borderColor: 'lightgreen',
    margin: 10,
    borderRadius: 20,
  },
  radioWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioBackground: {
    backgroundColor: 'lightgreen',
    height: 28,
    width: 28,
    borderRadius: 20,
    margin: 4,
  },
});

const loader = StyleSheet.create({
  loaderItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const modalComp = StyleSheet.create({
  modalItem: {
    flex: 1,
  },
  buttonView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    padding: 50,
    borderRadius: 30,
    shadowColor: 'red',
    elevation: 10,
  },
});
const pressableStyles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
  },
  pressableBtn: {
    backgroundColor: 'green',
    color: 'white',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    fontSize: 10,
    textAlign: 'center',
    shadowColor: 'red',
    elevation: 10,
  },
});
const statusFile = StyleSheet.create({
  centerButtons: {
    flex: 1,
    borderColor: 'red',
    borderWidth: 2,
  },
  marginButtons: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 10,
    margin: 10,
    justifyContent: 'space-around',
  },
});
const platformFile = StyleSheet.create({
  platformStyleText: {
    color: Platform.OS == 'android' ? 'purple' : 'cyan',
    fontSize: 30,
  },
});

const customModal = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modal: {
    flex: 1,
    backgroundColor: 'rgba(50,50,50,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    backgroundColor: 'white',
    height: 300,
    width: 300,
    justifyContent: 'flex-end',
    padding: 20,
    borderRadius: 10,
  },
});
const navigationStyles = StyleSheet.create({
  homecomponent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const apiStyle = StyleSheet.create({
  myApiStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});
const myInpApi = StyleSheet.create({
  input: {
    borderColor: 'skyblue',
    borderWidth: 2,
    margin: 10,
    padding: 10,
    fontSize: 20,
    color: 'black',
  },
  errorText: {
    color: 'red',
    marginBottom: 5,
    marginTop: 1,
    marginLeft: 11,
  },
});

const selfApi = StyleSheet.create({
  items: {
    flex: 1,
    backgroundColor: 'red',
  },
  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'yellow',
    margin: 5,
    padding: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  myModal: {
    backgroundColor: 'white',
    shadowColor: 'red',
    shadowOpacity: 1,
    elevation: 10,
    borderRadius: 10,
    padding: 100,
  },
});

const modalInput = StyleSheet.create({
  formfields: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'lightblue',
    width: 300,
    marginBottom: 5,
  },
});

const ref = StyleSheet.create({
  inpContainer: {
    flex: 1,
    padding: 10,
  },
  inputFields: {
    borderWidth: 2,
    borderColor: 'red',
    margin: 10,
    padding: 10,
  },
});
export {
  flexStyles,
  touchStyles,
  myButtonStyles,
  loader,
  modalComp,
  pressableStyles,
  statusFile,
  platformFile,
  customModal,
  navigationStyles,
  apiStyle,
  myInpApi,
  selfApi,
  modalInput,
  ref,
};
