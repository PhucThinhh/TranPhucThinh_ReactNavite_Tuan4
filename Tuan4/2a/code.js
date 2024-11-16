import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image } from 'react-native';

const MyApp = () => {
  return (
    <View style={{flex:1, backgroundColor: '#f3c500',paddingBottom:80 }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'flex-start',
          paddingLeft:15
        }}>
        <Text style={{ textAlign: 'center', fontWeight: '700', fontSize: 20 }}>
          LOGIN
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <TextInput
          style={{
            backgroundColor:'rgb(243, 197,0)',
            borderWidth:2,
            width: '90%',
            height: 50,
            padding: 10,
            borderColor:'white'
          }}
          placeholder="Name"
        />
        <TextInput
          style={{
            borderWidth:2,
            width: '90%',
            height: 50,
            padding: 10,
            borderColor:'white'
          }}
          placeholder="Password"
        />
      </View>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'black',
              paddingVertical: 15,
              paddingHorizontal: 130,
            }}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',

        }}>
       <Text style={{fontWeight: '700',marginTop:-50}}>For got your passworrd?</Text>
      </View>
    </View>
  );
};

export default MyApp;
