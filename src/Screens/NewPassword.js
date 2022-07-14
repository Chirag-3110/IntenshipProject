import React,{useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  ImageBackground,
  ActivityIndicator
} from 'react-native';
import Style from '../Styles/Style';
import newpasscss from '../Styles/newpasscss';
const NewPassword=({navigation})=>{
    const [code,setCode]=useState(null);
    const [newPass,setNewPass]=useState(null);
    const [loading,setLoading]=useState(false)
  return (
    <ImageBackground  style={newpasscss.newpasscontainer}
        source={require('../Assets/bk.png')} 
        resizeMode="cover"
      >
      <View style={newpasscss.texts}>
        <Text style={newpasscss.header}>New Credentials</Text>
        <Text style={newpasscss.subText}>
          Confirm your email and enter new password
        </Text>
      </View>
      <View>
        <TextInput placeholder='Email' 
          placeholderTextColor={"black"}
          keyboardType='email-address'
          style={Style.input}
          value={username}
        />
        <TextInput placeholder='Confirmation Code' 
          placeholderTextColor={"black"}
          keyboardType='numeric'
          style={Style.input}
          onChangeText={(code)=>setCode(code)}
        />
        <TextInput placeholder='New Password' 
          placeholderTextColor={"black"}
          keyboardType='visible-password'
          style={Style.input}
          onChangeText={(newPass)=>setNewPass(newPass)}
        />
        <TouchableOpacity style={newpasscss.btncontainer} >
          <Text style={newpasscss.btnTxt} >
            {loading?<ActivityIndicator size={20} color="blue"/>:"Continue"}
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground >
  );
};

export default NewPassword;
