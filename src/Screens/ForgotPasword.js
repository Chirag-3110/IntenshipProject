import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  ImageBackground, Image, Button, props, Dimensions, TouchableWithoutFeedback, Keyboard
} from 'react-native';
import forgotpasscss from '../Styles/forgotpasscss'
const ForgotPassword = ({ navigation }) => {
  const [mail, setMail] = useState(null)
  return (
    <ImageBackground style={forgotpasscss.Contanier}
      source={require('../Assets/bk.png')}
      resizeMode="cover"
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={forgotpasscss.container}>
          <View style={forgotpasscss.authbox}>
            <Text style={forgotpasscss.trublelogintitle} >Forgot Password?</Text>
            <View style={forgotpasscss.inputbox}>
              <Text style={forgotpasscss.forgotmail}>Enter your e-mail address we'll send you a link to reset your password</Text>

              <Text style={forgotpasscss.inputlabel}>Email</Text>

              <TextInput
                style={forgotpasscss.input}
                autoCapitalize="characters"
                keyboardType="email-address"
                textContentType="emailAddress"
                placeholder="example@gmail.com"
                onChangeText={(mail) => setMail(mail)}
              />
            </View>

            <TouchableOpacity style={forgotpasscss.loginbutton}>
              <Text style={forgotpasscss.loginbuttontext}>Send Email</Text>
            </TouchableOpacity>

          </View>
        </View>
        {/* </View> */}
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

export default ForgotPassword;
