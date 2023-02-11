import React from 'react';
import {
    Alert,
    View,
    TextInput,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
} from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../firebase"
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleRegister = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
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
                backgroundColor: '#A5C3CF',
                marginTop: -100
            }}
        >
            <Text style={{ fontSize: 25, marginBottom: 30 }}>ユーザー登録</Text>
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
                    width: 80,
                    alignItems: 'center',
                    padding: 10,
                    backgroundColor: '#F8D8B7',
                    borderRadius: 10,
                }}
                onPress={handleRegister}
            >
                <Text>登録</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{ marginTop: 19 }}
                onPress={() => navigation.navigate('Login')}
            >
                <Text>ログインはこちら</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
};

export default RegisterScreen