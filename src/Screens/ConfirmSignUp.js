import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  ImageBackground
} from 'react-native';
import Style from '../Styles/Style';
import confirmpasscss from '../Styles/confirmpasscss';
const ConfirmSignIn = ({  navigation }) => {
  const [code, setCode] = useState(null);
  return (
    <ImageBackground style={confirmpasscss.confirmpasscontainer}
      source={require('../Assets/bk.png')}
      resizeMode="cover"
    >
      <View style={confirmpasscss.confirmpasscontainer} >
        <View style={confirmpasscss.texts}>
          <Text style={[confirmpasscss.header, { textAlign: 'center' }]}>
            Confirm you Email
          </Text>
        </View>
        <View style={confirmpasscss.textFields}>
          <TextInput placeholder='Email'
            placeholderTextColor={"black"}
            keyboardType='email-address'
            style={Style.input}
          />
          <TextInput placeholder='Code...'
            keyboardType='numeric'
            placeholderTextColor={"black"}
            style={Style.input}
            onChangeText={(code) => setCode(code)}
          />
          <TouchableOpacity style={[Style.btncontainer, {
            backgroundColor: 'white'
          }]}>
            <Text style={Style.btnTxt} >Confirm Email</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Style.btncontainer}>
            <Text style={Style.btnTxt} >Resend Code</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default ConfirmSignIn;
