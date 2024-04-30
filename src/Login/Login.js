import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import * as loginData from './login.json';
import { TextInput, Button, HelperText } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { loginStyles as styles } from './LoginStyle';


function Login() {
    const navigation = useNavigation();

    const [username, onUserNameChangeText] = useState();
    const [password, onPasswordChangeText] = useState();
    const [buttonPressed, setButtonPressed] = useState(false);

    function validateAndLogin() {
        setButtonPressed(true)
        if (username === loginData?.username && password === loginData?.password) {
            navigation.navigate('Dashboard');
        }
    }

    return (
        <View style={styles.sectionContainer}>
            <Image
                source={require('../Assets/images/expense.png')}
                style={styles.logoImg}
            />
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 8 }}
                onChangeText={text => onUserNameChangeText(text)}
                value={username}
                placeholder="Enter username"
            />
            <HelperText type="error" padding="none" visible={buttonPressed && !username}>
                Username is required
            </HelperText>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 8 }}
                onChangeText={text => onPasswordChangeText(text)}
                value={password}
                placeholder="Enter password"
                secureTextEntry={true}
            />
            <HelperText type="error" padding="none" visible={buttonPressed && !password}>
                Password is required
            </HelperText>
            <Button
                mode="contained"
                onPress={() => validateAndLogin()}
                style={styles.width100PercentButton}
            >
                Login
            </Button>
        </View>
    );
}

export default Login;