import React, { useState } from 'react';
import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function ToDoScreen() {

    const navigation = useNavigation();
    const [todo, setTodo] = useState('');
    const [todoList, setTodoList] = useState([]);
    const [checkOne, setCheckOne] = useState(false);
    const [checkTwo, setCheckTwo] = useState(false);
    const [checkThree, setCheckThree] = useState(false);
    const [checkFour, setCheckFour] = useState(false);

    const getTodo = () => {
        setTodoList([...todoList, todo]);
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
                            marginTop: -120,
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
                        style={{ backgroundColor: "white", width: 50, height: 40, borderRadius: 10, justifyContent: 'center', alignItems: "center", marginTop: -120, opacity: 0.8 }}
                    >
                        <Ionicons name="checkmark" size={24} color="black" style={{ opacity: 0.5 }} />
                    </TouchableOpacity>
                </View>
                <View style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginBottom: -50
                }}>
                    <TouchableOpacity
                        style={{ width: 60, height: 60, opacity: 0.8, marginTop: -50, marginBottom: 10 }}
                        onPress={() => { setCheckOne(!checkOne) }}
                    >
                        <View style={{ display: "flex", flexDirection: "row", marginLeft: -50 }}>
                            {!checkOne ?
                                <>
                                    <Feather name="square" size={50} color="white" style={{ marginRight: 30, marginLeft: -60 }} />
                                    <Text style={{ fontSize: 40, color: "white", fontWeight: "bold" }}>{todoList[1]}</Text>
                                </>
                                :
                                <>
                                    <Feather name="check-square" size={50} color="white" style={{ marginRight: 30, marginLeft: -60 }} />
                                    <Text style={{ fontSize: 40, color: "white", fontWeight: "bold" }}>{todoList[1]}</Text>
                                </>
                            }
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ width: 60, height: 60, opacity: 0.8, marginBottom: 10 }}
                        onPress={() => { setCheckTwo(!checkTwo) }}
                    >
                        <View style={{ display: "flex", flexDirection: "row", marginLeft: -50 }}>
                            {!checkTwo ?
                                <>
                                    <Feather name="square" size={50} color="white" style={{ marginRight: 30, marginLeft: -60 }} />
                                    <Text style={{ fontSize: 40, color: "white", fontWeight: "bold" }}>{todoList[2]}</Text>
                                </>
                                :
                                <>
                                    <Feather name="check-square" size={50} color="white" style={{ marginRight: 30, marginLeft: -60 }} />
                                    <Text style={{ fontSize: 40, color: "white", fontWeight: "bold" }}>{todoList[2]}</Text>
                                </>
                            }
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ width: 60, height: 60, opacity: 0.8, marginBottom: 10 }}
                        onPress={() => { setCheckThree(!checkThree) }}
                    >
                        <View style={{ display: "flex", flexDirection: "row", marginLeft: -50 }}>
                            {!checkThree ?
                                <>
                                    <Feather name="square" size={50} color="white" style={{ marginRight: 30, marginLeft: -60 }} />
                                    <Text style={{ fontSize: 40, color: "white", fontWeight: "bold" }}>{todoList[3]}</Text>
                                </>
                                :
                                <>
                                    <Feather name="check-square" size={50} color="white" style={{ marginRight: 30, marginLeft: -60 }} />
                                    <Text style={{ fontSize: 40, color: "white", fontWeight: "bold" }}>{todoList[3]}</Text>
                                </>
                            }
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ width: 60, height: 60, opacity: 0.8, marginBottom: 10 }}
                        onPress={() => { setCheckFour(!checkFour) }}
                    >
                        <View style={{ display: "flex", flexDirection: "row", marginLeft: -50 }}>
                            {!checkFour ?
                                <>
                                    <Feather name="square" size={50} color="white" style={{ marginRight: 30, marginLeft: -60 }} />
                                    <Text style={{ fontSize: 40, color: "white", fontWeight: "bold" }}>{todoList[4]}</Text>
                                </>
                                :
                                <>
                                    <Feather name="check-square" size={50} color="white" style={{ marginRight: 30, marginLeft: -60 }} />
                                    <Text style={{ fontSize: 40, color: "white", fontWeight: "bold" }}>{todoList[4]}</Text>
                                </>
                            }
                        </View>
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
