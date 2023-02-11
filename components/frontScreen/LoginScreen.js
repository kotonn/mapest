import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {
    Alert,
    View,
    TextInput,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
} from 'react-native';
import { auth } from '../../firebase';
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            Alert.alert(
                'エラー',
                '入力にミスがあります',
                [
                    {
                        text: 'OK',
                        style: 'default'
                    }
                ],
            )
        }
    };

    const navigation = useNavigation();

    return (
        <KeyboardAvoidingView
            behavior="padding"
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                backgroundColor: '#F8D8B7',
                marginTop: -100
            }}
        >
            <Text style={{ fontSize: 25, marginBottom: 30 }}>ログイン</Text>
            <View style={{ marginBottom: 20 }}>
                <TextInput
                    style={{
                        width: 230,
                        height: 40,
                        borderWidth: 1,
                        padding: 5,
                        borderRadius: 10,
                        borderColor: 'white',
                        backgroundColor: 'white'
                    }}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="メールアドレス"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
            </View>
            <View style={{ marginBottom: 30 }}>
                <TextInput
                    style={{
                        width: 230,
                        height: 40,
                        borderWidth: 1,
                        padding: 5,
                        borderRadius: 10,
                        borderColor: 'white',
                        backgroundColor: 'white'
                    }}
                    onChangeText={setPassword}
                    value={password}
                    placeholder="パスワード"
                    secureTextEntry={true}
                    autoCapitalize="none"
                />
            </View>
            <TouchableOpacity
                style={{
                    padding: 10,
                    backgroundColor: '#A5C3CF',
                    borderRadius: 10,
                }}
                onPress={handleLogin}
            >
                <Text>ログイン</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{ marginTop: 19 }}
                onPress={() => navigation.navigate('Register')}
            >
                <Text>とうろくはこちら</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
};

export default LoginScreen