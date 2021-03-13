import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text,Image } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Toast, {BaseToast} from 'react-native-toast-message';

const toastConfig = {
    error: ({text1, text2, props, ...rest}) => (
        <BaseToast
        {...rest}
        style={{ borderLeftColor: 'pink' }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{
          fontSize: 15,
          fontWeight: 'bold',
          fontFamily:'Arial'
        }}
        text2Style={{
            fontSize: 9,
          fontWeight: 'bold',
          fontFamily:'Arial'
        }}
        text1={text1}
        text2={text2}
      />
        )
  }
  
export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const ref = firestore().collection('user');

    handleSignUp = () =>{
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                const user = auth().currentUser;
                ref.doc(user.uid).set({
                email:user.email,
                name:name,
                });
                ref.doc(user.id).add
                // this.props.navigation.navigate('Home');
        })
        .catch(error  => { 
            console.log(String(error));
            Toast.show({
                type:'error',
                text1: 'SignUp Failed',
                text2:String(error),
                position:'bottom',
                autoHide:true
              });
        });
    }
    return (
        <View style={styles.container}>
         <Image style={styles.logo} source={require("../resources/startScreen.png")}/>
        <TextInput
            style={styles.inputBox}
            value={name}
            onChangeText={event => setName(event)}
            placeholder='Full Name'
        />
        <TextInput
            style={styles.inputBox}
            value={email}
            onChangeText={event => setEmail(event)}
            placeholder='Email'
            autoCapitalize='none'
        />
        <TextInput
            style={styles.inputBox}
            value={password}
            onChangeText={event => setPassword(event    )}
            placeholder='Password'
            secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)} />

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

