import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, Image , Alert, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { useDispatch } from 'react-redux';
import {userLogin} from '../redux/actions';

export default Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('')

  const validateEmail = (email) => {
    var re = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
      return re.test(email);
  };
 
  const validatePassword = (password) => {
    var re = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
      return re.test(password);
  }
  const dispatch = useDispatch();
  const login = () => {
    if(username === '' || password === '')
    {
      Alert.alert('Upozorenje:', 'Niste popunili sva neophodna polja');
        return;
    }

    // if(!validateEmail(email))
    // {
    //   Alert.alert('Upozorenje', 'Unesite email');
    //   return;
    // }
    dispatch(userLogin(username, password))
  }
  return(
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/logo.jpg')}/>
      <View style={styles.inputView} >
      <TextInput style={styles.TextInput} placeholder="USERNAME" placeholderTextColor="#003F5C" value={username} onChangeText={(text) => setUsername(text)}/>
      </View>
      <View style={styles.inputView} >
      <TextInput style={styles.TextInput} placeholder="PASSWORD" placeholderTextColor="#003F5C" value={password} secureTextEntry={true} onChangeText={(text) => setPassword(text)}/>
      </View>
      
      <TouchableOpacity style={styles.loginBtn} onPress={login}>
        <Text >
          Login
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={{marginTop:20, borderColor:'#FFC0CB', borderWidth: 1, borderRadius: 15, padding: 10}}
        onPress={() =>
          navigation.navigate('Register')
        }
      >
        <Text style={styles.registerButton} >
          Registruj se
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    marginBottom: 40,
    height: 250,
    width: 250
  },
  inputView: {
    backgroundColor: '#FFC0CB',
    borderRadius: 25,
    height: 45,
    width: "60%",
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  TextInput: {
    flex: 1,
    height: 50
  },
  registerButton: {
    height: 30
  },
  loginBtn: {
    backgroundColor: "#FF1493",
    height: 50,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginTop: 40
  }
});
