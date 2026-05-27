import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {Ionicons} from '@expo/vector-icons';


export default function ItemList({ item, markProduto, unmarkProduto, removeProduto }) {
  return (
    <View style={styles.itemList}>
      <View style={{flex: 1}}>
        <Text style={[styles.itemToBuy,
           item?.bought ? {textDecorationLine:'line-through'} : {textDecorationLine:'none'}]}>
          {item?.name}
          </Text>
      </View>
      {!item?.bought ? (
        <TouchableOpacity
            style={styles.actionIcon}
            onPress={() => {}}
        >
            <Ionicons name='bag-check-outline' size={24} color='#fff'/>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
            style={styles.actionIcon}
            onPress={() => {}}
        >
            <Ionicons name='bag-remove-outline' size={24} color='#fff'/>
        </TouchableOpacity>
      )}

      <TouchableOpacity
            style={[styles.actionIcon, { backgroundColor:'darkred'}]}
            onPress={() => {}}
        >
            <Ionicons name='trash-bin-outline' size={24} color='#fff'/>
        </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  itemList: {
    padding: 15,
    elevation: 12,
    borderRadius: 7,
    backgroundColor: '#000000c0',
    borderWidth: 2,
    borderColor: 'white',
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  itemToBuy: {
    color: '#fff', fontSize:24,
  },
  actionIcon: {
    height:40,
    width:40,
    backgroundColor:'darkgreen',
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 20,
  }
})