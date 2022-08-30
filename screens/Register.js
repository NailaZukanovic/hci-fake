import { useState } from 'react';
import {Alert, StyleSheet, View, Text, TextInput, Image , TouchableOpacity} from 'react-native';
import users from '../components/user';
const Register = ({navigation}) => {
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');



    


    function register(){
      if(username === '' || password === '')
      {
        Alert.alert('Upozorenje:', 'Niste popunili sva neophodna polja');
          return;
      }
      if(users.find((user) => user.username === username?.trim() && user.password === password?.trim()))
      {
        Alert.alert("Greska", "User already exists");
        return;
      }
      else
      {
        users.push({username, password});

      }
    }
      

  return(
    <View style={styles.container}>
      <View style={styles.inputView} >
      <TextInput style={styles.TextInput} placeholder="USERNAME" placeholderTextColor="#003F5C" value={username} onChangeText={(text) => setUsername(text)}/>
      </View>
      <View style={styles.inputView} >
      <TextInput style={styles.TextInput} placeholder="PASSWORD" placeholderTextColor="#003F5C" value={password} secureTextEntry={true} onChangeText={(text) => setPassword(text)}/>
      </View>





      <TouchableOpacity style={styles.loginBtn} onPress={()=> register()}>
        <Text >
          Registruj se
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={{marginTop:20, borderColor:'#FFC0CB', borderWidth: 1, borderRadius: 15, padding: 10}}
              onPress={() =>
                navigation.navigate('Login')
              }
      >
        <Text style={styles.registerButton} >
          Imate nalog? Login
        </Text>
      </TouchableOpacity>
    </View>
  )


};
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
    height: 50,
    width: "60%",
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  TextInput: {
    flex: 1,
    height: 25
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
export default Register;