import users from "../components/user";
import { Alert } from "react-native";
export const userLogin = (username, password) => {
  let token = null
  console.log(users);
  if(users.find((user) => user.username === username.trim() && user.password === password.trim()))
  {  token = username.trim() + " " + password.trim(); }
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