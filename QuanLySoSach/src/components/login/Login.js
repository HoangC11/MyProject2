

import React from 'react';
import { Button, Image, View, Text, StyleSheet, ScrollView, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { Sizes } from '@dungdang/react-native-basic'
import { SafeAreaView } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5'
import {CustomButton} from '../custom/CustomButton'

export default class Login extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        
        <View style={styles.body}>
          <View style={styles.header}>
            <Text>Header</Text>
          </View>
          <KeyboardAvoidingView behavior='padding' style={{flex: 1}}>
          <ScrollView contentContainerStyle={styles.content} >
            <View style={styles.logo}></View>
            <Text style={styles.title}>iHRP Mobility</Text>
            <View style={styles.username}>
              <Icon name='user' size={Sizes.s50} color='black'/>
              <TextInput 
                placeholder='Tên đăng nhập'
                style={styles.textInput}
              />
            </View>
            <View style={styles.password}>
              <Icon name='lock' size={Sizes.s50} color='black'/>
              <TextInput 
                placeholder='Mật khẩu'
                style={styles.textInput}
                
              />
            </View>
            <View style={styles.function}>

              <TouchableOpacity>
              <View style={styles.showPassword}>
              <Icon name='square' size={Sizes.s50} color='black'/>
              <Text numberOfLines={1} style={styles.textShowPassword}>Hiện mật khẩu</Text>
              </View>
              </TouchableOpacity>

              <TouchableOpacity>
              <Text numberOfLines={1} style={styles.textForgotPassword}>Quên mật khẩu</Text>
              </TouchableOpacity>
            </View>
            <CustomButton title={'Đăng nhập'} type={'send'}/>
          </ScrollView>
        </KeyboardAvoidingView>
          
          <View style={styles.bottom}>
            <Text>Bottom</Text>
            <CustomButton />
            </View>
        </View>
        
        
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "white"
  },
  header: {
    padding: Sizes.h20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 150, 
    height: 150,
    backgroundColor: 'yellow'
  },
  title: {
    fontSize: Sizes.s70,
    color: '#2980b9',
    fontWeight: 'bold',
    marginVertical: Sizes.h20
  },
  username: {
    paddingVertical: Sizes.h24,
    paddingHorizontal: Sizes.h30,
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: Sizes.h10,
    borderWidth: 1,
    borderRadius: Sizes.h52,
    width: '90%',
  },
  password: {
    paddingVertical: Sizes.h24,
    paddingHorizontal: Sizes.h30,
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: Sizes.h10,
    borderWidth: 1,
    borderRadius: Sizes.h52,
    width: '90%',
  },
  textInput: {
    marginHorizontal: Sizes.h20,
    fontSize: Sizes.s35,
    paddingHorizontal: Sizes.s20
  },
  function: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    marginVertical: Sizes.h20,
    alignItems: 'center'
  },

  showPassword: {
    flexDirection: 'row',
    marginHorizontal: Sizes.h20,
    alignItems: 'center',
  },
  textShowPassword: {
    marginHorizontal: Sizes.h20,
    fontSize: Sizes.s30
  },
  textForgotPassword: {
    marginHorizontal: Sizes.h20,
    fontSize: Sizes.s35,
    color: 'blue'
  },

  bottom: {
    padding: Sizes.h20,
  },
})