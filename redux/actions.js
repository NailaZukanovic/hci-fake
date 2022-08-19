import users from "../components/user";
import { Alert } from "react-native";
export const userLogin = (email, password) => {
  let token = null
  console.log(users);
  if(users.find((user) => user.email === email.trim() && user.password === password.trim()))
  {  token = "nailajecar"; }
  else
    Alert.alert("Greska", "Invalid credentials");
  return ({
    type: 'LOGIN',
    payload: token
  })
}

export const userLogout = () => {
  return({
    type: "LOGOUT"
  })
}