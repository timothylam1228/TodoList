import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text,Image } from 'react-native';
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    handleSignUp = () =>{
        console.log(email.email)
        console.log(password.password)
        auth()
            .createUserWithEmailAndPassword(email.email, password.password)
            .then(() => this.props.navigation.navigate('Home'))
            .catch(error => console.log(error))
    }
    return (
        <View style={styles.container}>
         <Image style={styles.logo} source={require("../resources/startScreen.png")}/>
        <TextInput
            style={styles.inputBox}
            value={name}
            onChangeText={name => setName (name.name)}
            placeholder='Full Name'
        />
        <TextInput
            style={styles.inputBox}
            value={email}
            onChangeText={email => setEmail(email.email)}
            placeholder='Email'
            autoCapitalize='none'
        />
        <TextInput
            style={styles.inputBox}
            value={password}
            onChangeText={password => setPassword(password.password)}
            placeholder='Password'
            secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputBox: {
        width: '85%',
        margin: 10,
        padding: 15,
        fontSize: 16,
        borderColor: '#d3d3d3',
        borderBottomWidth: 1,
        textAlign: 'center'
    },
    button: {
        marginTop: 30,
        marginBottom: 20,
        paddingVertical: 5,
        alignItems: 'center',
        backgroundColor: '#FFA611',
        borderColor: '#FFA611',
        borderWidth: 1,
        borderRadius: 5,
        width: 200
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    buttonSignup: {
        fontSize: 12
    }
})

