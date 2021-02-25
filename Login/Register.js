import React, { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
  } from "react-native";
  

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <View style={styles.container}>

            <ImageBackground style={styles.image} source={require("../resources/startScreen.png")}>
                <View style={styles.login_container}>

                    <StatusBar style="auto" />


                    <TouchableOpacity>
                        <Text style={styles.forgot_button}>DLLM</Text>
                    </TouchableOpacity>
                </View>

            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    login_container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },

    inputView: {
        backgroundColor: "#FFC0CB",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
    
        alignItems: "center",
      },
    
      TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
      },
    
      forgot_button: {
        height: 30,
        marginBottom: 30,
      },
    
      loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#FF1493",
      },
    });

