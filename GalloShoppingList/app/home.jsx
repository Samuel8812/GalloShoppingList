
import React, { useState, useEffect } from 'react'
import {
  Alert,
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import ItemList from '../components/ItemList';

export default function Home() {
  const [textInput, setTextInput] = useState('');
  const [items, setItems] = useState([]);

  function addProduto() {
    // console.log(textInput);
    if (textInput == '') {
      Alert.alert(
        'Ocorreu um problema :(',
        'Por favor, informe o nome do produto'
      );
      return;
    }
    const newItem = {
      id: Date.now().toString(),
      name: textInput,
      bought: false
    };
    setItems([...items, newItem]);
    setTextInput('');
  }
    function markProduto(itemId){
      const newItems = items.map((item) => {
        if (item.id == itemId){
          return{...item, bought:true}
        }
        return item;
      })
      setItems(newItems);
    }

    function unmarkProduto(itemId){
      const newItems = items.map((item) => {
        if (item.id == itemId){
          return{...item, bought: false }
        }
        return item;
      })
      setItems(newItems);
    }

    function removeProduto(itemId){

    }
    
    function removeAll(){

    }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
      <ImageBackground
        source={require('../assets/background.jpg')}
        resizeMode='repeat'
        style={{ flex: 1, justifyContent: 'flex-start' }}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Lista de Compras</Text>
          <Ionicons name='trash' size={32} color="#fff"></Ionicons>
        </View>

        {/* Lista de compras */}
        <FlatList
          contentContainerStyle={{
            padding: 20, paddingBottom: 100, color: '#fff'
          }}
          data={items}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) =>
            <ItemList>
              item ={item}
              markItem ={markProduto}
              unmarkProduto ={unmarkProduto}
            </ItemList>
          }
        />

        <View style={styles.footer}>
          <View style={styles.inputContainer}>
            <TextInput
              color="#fff"
              fontSize={18}
              placeholder='Digite o nome do produto...'
              placeholderTextColor="#aeaeae"
              value={textInput}
              onChangeText={(text) => setTextInput(text)}
            />
          </View>
          <TouchableOpacity style={styles.iconContainer} onPress={addProduto}>
            <Ionicons name="add" size={36} color="#fff" />
          </TouchableOpacity>
        </View>

      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    padding: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000000c0',
    borderBottomStartRadius: 30,
    borderBottomEndRadius: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ffffff'
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#000000c0',
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
  },
  inputContainer: {
    backgroundColor: '#000',
    elevation: 40,
    flex: 1,
    height: 50,
    marginVertical: 20,
    borderRadius: 30,
    justifyContent: 'center',
  },
  iconContainer: {
    borderRadius: 25,
    height: 50,
    width: 50,
    backgroundColor: '#000',
    elevation: 40,
    justifyContent: 'center',
    alignItems: 'center'
  }
})