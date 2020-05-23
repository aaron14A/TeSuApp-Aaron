import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
  ImageBackground,
} from "react-native";
import TeacherAnimation from "../components/Anim.js";

import db from "../config";
import firebase from "firebase";

import { Input, Icon } from "react-native-elements";
import { RFValue } from "react-native-responsive-fontsize";


export default class WelcomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      emailId: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
      contact: "",
      class:"",
      confirmPassword: "",
      isModalVisible: "false",
    };
  }

  
  userSignUp = (emailId, password, confirmPassword) => {
    if (password !== confirmPassword) {
      return Alert.alert("password doesn't match\nCheck your password.");
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(emailId, password)
        .then(() => {
          db.collection("users").add({
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            contact: this.state.contact,
            email_id: this.state.emailId,
            address: this.state.address,
            class : this.state.class,
            password : this.state.password,
            IsBookRequestActive: false,
          });
          return Alert.alert("User Added Successfully", "", [
            {
              text: "OK",
              onPress: () => this.setState({ isModalVisible: false }),
            },
          ]);
        })
        .catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          return Alert.alert(errorMessage);
        });
    }
  };

  userLogin = (emailId, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(emailId, password)
      .then(() => {
        this.props.navigation.navigate("MainScreen");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage);
      });
  };

  showModal = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.isModalVisible}
      >
        <ScrollView style={{flex: 1,backgroundColor: "#fff"}}>
          <View style={{flex:0.05,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:RFValue(20),fontWeight:"bold",color:"#32867d"}}> SIGN UP </Text>
          </View>
              <View style={{flex:0.90}}>
                  <Text style={styles.label}>First Name </Text>
                  <TextInput
                    style={styles.formInput}
                    placeholder={"First Name"}
                    maxLength={12}
                    onChangeText={(text) => {
                      this.setState({
                        firstName: text,
                      });
                    }}
                  />

                  <Text style={styles.label}>Last Name </Text>
                  <TextInput
                    style={styles.formInput}
                    placeholder={"Last Name"}
                    maxLength={12}
                    onChangeText={(text) => {
                      this.setState({
                        lastName: text,
                      });
                    }}
                  />

                  <Text style={styles.label}>Contact </Text>
                  <TextInput
                    style={styles.formInput}
                    placeholder={"Contact"}
                    maxLength={10}
                    keyboardType={"numeric"}
                    onChangeText={(text) => {
                      this.setState({
                        contact: text,
                      });
                    }}
                  />

                  <Text style={styles.label}> Address </Text>
                  <TextInput
                    style={styles.formInput}
                    placeholder={"Address"}
                    multiline={true}
                    onChangeText={(text) => {
                      this.setState({
                        address: text,
                      });
                    }}
                  />

                  <Text style={styles.label}>Email </Text>
                  <TextInput
                    style={styles.formInput}
                    placeholder={"Email"}
                    keyboardType={"email-address"}
                    onChangeText={(text) => {
                      this.setState({
                        emailId: text,
                      });
                    }}
                  />

                   <Text style={styles.label}>Class</Text>
                  <TextInput
                    style={styles.formInput}
                    placeholder={"Class"}
                    keyboardType={"numeric"}
                    onChangeText={(text) => {
                      this.setState({
                        class: text,
                      });
                    }}
                  />

                  <Text style={styles.label}> Password </Text>
                  <TextInput
                    style={styles.formInput}
                    placeholder={"Password"}
                    secureTextEntry={true}
                    onChangeText={(text) => {
                      this.setState({
                        password: text,
                      });
                    }}
                  />

                  <Text style={styles.label}>Confirm Password</Text>
                  <TextInput
                    style={styles.formInput}
                    placeholder={"Confrim Password"}
                    secureTextEntry={true}
                    onChangeText={(text) => {
                      this.setState({
                        confirmPassword: text,
                      });
                    }}
                  />
              </View>

            <View style={{flex:0.2,alignItems:'center'}}>
              <TouchableOpacity
                style={styles.registerButton}
                onPress={() =>
                  this.userSignUp(
                    this.state.emailId,
                    this.state.password,
                    this.state.confirmPassword
                  )
                }
              >
                <Text style={styles.registerButtonText}>Register</Text>
              </TouchableOpacity>
              <Text
               style={styles.cancelButtonText}
               onPress={() => {
                 this.setState({ isModalVisible: false });
               }}
              >
              Cancel
              </Text>
            </View>
        </ScrollView>
      </Modal>
    );
  };
  render() {
    return (
      <View style={styles.container}>
          <ImageBackground source={require('../assets/back4.jpg')} style={styles.image}>
      <Text style={styles.text}>Inside</Text>
      
        {this.showModal()}
        <View
          style={{ flex: 0.25}}
        >
        <View style={{flex:0.15}}/>
        <View style={{flex:0.85, justifyContent:"center", alignItems:"center", padding:RFValue(10)}}>
          <Image
          source={require('../assets/iconmain.png')}
          style={{width:"40%",height:"100%", resizeMode:"stretch"}}
           />
         </View>
        </View>
       
        <View style={{ flex: 0.45 }}>
          
          <View style={{flex:1.5, alignItems:"center", justifyContent:"center"}}>
          <TextInput
            style={styles.loginBox}
            placeholder="abc@example.com"
            placeholderTextColor="white"
            keyboardType="email-address"
            onChangeText={(text) => {
              this.setState({
                emailId: text,
              });
            }}
          />
          <TextInput
            style={[styles.loginBox,{marginTop:RFValue(20)}]}
            secureTextEntry={true}
            placeholder="Enter Password"
            placeholderTextColor="white"
            onChangeText={(text) => {
              this.setState({
                password: text,
              });
            }}
          />
           
          </View>
          <View style={{flex : 0.7, display : "flex", flexDirection : "row" , marginTop : 30}}>
          <TouchableOpacity
           // style={styles.button}
            onPress={() => {
               this.userLogin(this.state.emailId, this.state.password);
            
            }}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
        // style={styles.button}
            onPress={() => this.setState({ isModalVisible: true })}
          >
            <Text style={styles.buttonText}>SignUp</Text>
          </TouchableOpacity>

          </View>
        </View>
       
        <View
          style={{ flex: 0.1}}
        >
 
          { /*<TeacherAnimation/>*/}
        </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6fc0b8",
  },
  loginBox: {
    width: "80%",
    height: RFValue(50),
    borderWidth: 1.5,
    borderColor: "#ffffff",
    fontSize: RFValue(20),
    color : "white",
    paddingLeft: RFValue(10),
  },
  button: {
    width: "80%",
    height: RFValue(30),
    //justifyContent: "center",
    //alignItems: "center",
   backgroundColor: "#ffff",
    shadowColor: "#000",
    marginBottom:RFValue(10),
   
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16,
  },
  buttonText: {
    flex : 0.2,
    color: "#32867d",
    fontWeight: "200",
    fontSize: RFValue(20),
   
  },
  label:{
    fontSize:RFValue(13),
    color:"#717D7E",
    fontWeight:'bold',
    paddingLeft:RFValue(10),
    marginLeft:RFValue(20)
  },
  formInput: {
    width: "90%",
    height: RFValue(45),
    padding: RFValue(10),
    borderWidth:1,
    borderRadius:2,
    borderColor:"grey",
    paddingBottom:RFValue(10),
    marginLeft:RFValue(20),
    marginBottom:RFValue(14)
  },
  registerButton: {
    width: "75%",
    height: RFValue(50),
    marginTop:RFValue(20),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(3),
    backgroundColor: "#32867d",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop: RFValue(10),
  },
  registerButtonText: {
    fontSize: RFValue(23),
    fontWeight: "bold",
    color: "#fff",
  },
  cancelButtonText:{
    fontSize : RFValue(20),
    fontWeight:'bold',
    color: "#32867d",
    marginTop:RFValue(10)
  },
  image: {
    flex: 3.5,
    resizeMode: "cover",
    height: RFValue(700),
   
  }
});
