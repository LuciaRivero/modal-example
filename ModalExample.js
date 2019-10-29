import React, {Component} from 'react';
import {Modal, Text, TouchableOpacity, TouchableHighlight, View, Alert, Button} from 'react-native';

class ModalExample extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginBottom:22,flex: 1, backgroundColor: '#fff',alignItems: 'center',justifyContent: 'center'}}>
            <View>
              <Text>Hello World!</Text>

              <TouchableOpacity>
                <Button title="Cerrar modal" onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);}}>
                </Button>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <TouchableOpacity>
          <Button title="Abrir Modal" onPress={() => {
            this.setModalVisible(true);}}>
          </Button>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ModalExample;