import React, { useState } from 'react';
import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function ToDoScreen() {

    const navigation = useNavigation();
    const [todo, setTodo] = useState('');
    const [todoList, setTodoList] = useState([]);
    const [check, setCheck] = useState(false);

    const getTodo = () => {
        setTodoList([...todoList, todo]);
        console.log(todoList);
    }

    return (
        <KeyboardAvoidingView
            behavior="padding"
            style={{
                flex: 1,
                backgroundColor: '#A5C3CF',
            }}
        >
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                }}>
                    <TextInput
                        style={{
                            width: 230,
                            height: 40,
                            borderWidth: 1,
                            marginTop: -200,
                            marginRight: 10,
                            marginBottom: 40,
                            borderRadius: 10,
                            borderColor: 'white',
                            backgroundColor: 'white',
                            opacity: 0.8,
                            textAlign: 'center'
                        }}
                        onChangeText={setTodo}
                        value={todo}
                        placeholder="todoを入力してください"
                        autoCapitalize="none"
                        autoCorrect={false}
                        clearButtonMode="always"
                    />
                    <TouchableOpacity
                        onPress={getTodo}
                        style={{ backgroundColor: "white", width: 50, height: 40, borderRadius: 10, justifyContent: 'center', alignItems: "center", marginTop: -200, opacity: 0.8 }}
                    >
                        <Ionicons name="checkmark" size={24} color="black" style={{ opacity: 0.5 }} />
                    </TouchableOpacity>
                </View>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                }}>
                    <TouchableOpacity
                        style={{ width: 70, height: 70, opacity: 0.8, marginTop: -110 }}
                        onPress={() => { setCheck(!check) }}
                    >
                        {check == false ? (
                            <View style={{ display: "flex", flexDirection: "row", marginLeft: -40 }}>
                                <Feather name="square" size={60} color="white" style={{ marginRight: 10 }} />
                                <Text style={{ fontSize: 40 }}>{todoList[1]}</Text>
                            </View>
                        ) : (
                            <>
                            </>
                        )}
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={{ width: 70, height: 70, borderRadius: 50, position: "absolute", right: 50, bottom: 70, opacity: 0.8 }}
                    onPress={() => { navigation.navigate("Home") }}
                >
                    <Ionicons name="checkmark-circle-outline" size={70} color="white" />
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}
