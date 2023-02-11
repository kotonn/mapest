import React, { useState, useEffect } from 'react';
import { Text, KeyboardAvoidingView, View, TextInput } from 'react-native';
import * as Location from 'expo-location';
import { WEATHER_URL, WEAHTER_API_KEY } from '@env';
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function HomeScreen() {
    const [weather, setWeather] = useState('');
    const [highTemp, setHighTemp] = useState('');
    const [lowTemp, setLowTemp] = useState('');
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getLocation = async () => {
            try {
                let { status } = await Location.requestForegroundPermissionsAsync();

                if (status !== 'granted') {
                    console.log('許可がないため位置情報を取得することはできません。');
                    return;
                }

                let location = await Location.getCurrentPositionAsync();

                const { latitude, longitude } = location.coords;

                const response = await fetch(
                    `${WEATHER_URL}?lat=${latitude}&lon=${longitude}&appid=${WEAHTER_API_KEY}&units=metric`
                );

                const result = await response.json();
                const nowWeather = result.weather[0].main;
                const highTemp = result.main.temp_max;
                const lowTemp = result.main.temp_min;
                console.log(result);

                setLoading(false);
                setWeather(nowWeather);
                setHighTemp(highTemp);
                setLowTemp(lowTemp);
            } catch (error) {
                setLoading(false);
                console.log(error.message);
            }
        };
        getLocation();
    }, []);



    if (loading) {
        return (
            <KeyboardAvoidingView
                behavior="padding"
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1,
                    backgroundColor: '#A5C3CF'
                }}
            >
            </KeyboardAvoidingView>
        );
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
                <TextInput
                    style={{
                        width: 230,
                        height: 40,
                        borderWidth: 1,
                        marginTop: -100,
                        marginBottom: 40,
                        borderRadius: 10,
                        borderColor: 'white',
                        backgroundColor: 'white',
                        opacity: 0.8,
                        textAlign: 'center'
                    }}
                    // onChangeText={}
                    // value={}
                    placeholder="検索"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                {weather == "Clouds" ? (
                    <>
                        <AntDesign name="cloudo" size={80} color="white" style={{ opacity: 0.8 }} />
                        <Text style={{ color: "white", opacity: 0.8, fontSize: 15, fontWeight: "bold" }}>くもり</Text>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: 30
                        }}>
                            <Text style={{ color: "#FB6542", marginRight: 20, fontSize: 15, fontWeight: "bold" }}>
                                {Math.floor(highTemp)}°
                            </Text>
                            <Text style={{ color: "#375E97", fontSize: 15, fontWeight: "bold" }}>
                                {Math.floor(lowTemp)}°
                            </Text>
                        </View>
                    </>
                ) : weather == "Clear" ? (
                    <>
                        <Fontisto name="day-sunny" size={80} color="#F8D8B7" style={{ opacity: 0.8 }} />
                        <Text style={{ color: "#F8D8B7", opacity: 0.8, fontSize: 15, fontWeight: "bold" }}>はれ</Text>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: 30
                        }}>
                            <Text style={{ color: "#FB6542", marginRight: 20, fontSize: 15, fontWeight: "bold" }}>
                                {Math.floor(highTemp)}°
                            </Text>
                            <Text style={{ color: "#375E97", fontSize: 15, fontWeight: "bold" }}>
                                {Math.floor(lowTemp)}°
                            </Text>
                        </View>
                    </>
                ) : weather == "Mist" || weather == "Smoke" || weather == "Haze" || weather == "Dust" || weather == "Fog" || weather == "Sand" || weather == "Ash" || weather == "Squall" || weather == "Tornado" ? (
                    <>
                        <Fontisto name="fog" size={80} color="white" style={{ opacity: 0.8 }} />
                        <Text style={{ color: "white", opacity: 0.8, fontSize: 15, fontWeight: "bold" }}>きり</Text>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: 30
                        }}>
                            <Text style={{ color: "#FB6542", marginRight: 20, fontSize: 15, fontWeight: "bold" }}>
                                {Math.floor(highTemp)}°
                            </Text>
                            <Text style={{ color: "#375E97", fontSize: 15, fontWeight: "bold" }}>
                                {Math.floor(lowTemp)}°
                            </Text>
                        </View>
                    </>
                ) : weather == "snow" ? (
                    <>
                        <Feather name="cloud-snow" size={80} color="white" />
                        <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>ゆき</Text>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: 30
                        }}>
                            <Text style={{ color: "#FB6542", marginRight: 20, fontSize: 15, fontWeight: "bold" }}>
                                {Math.floor(highTemp)}°
                            </Text>
                            <Text style={{ color: "#375E97", fontSize: 15, fontWeight: "bold" }}>
                                {Math.floor(lowTemp)}°
                            </Text>
                        </View>
                    </>
                ) : weather == "Rain" || weather == "Drizzle" ? (
                    <>
                        <Feather name="cloud-rain" size={80} color="white" style={{ opacity: 0.8 }} />
                        <Text style={{ color: "white", opacity: 0.8, fontSize: 15, fontWeight: "bold" }}>きり</Text>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: 30
                        }}>
                            <Text style={{ color: "#FB6542", marginRight: 20, fontSize: 15, fontWeight: "bold" }}>
                                {Math.floor(highTemp)}°
                            </Text>
                            <Text style={{ color: "#375E97", fontSize: 15, fontWeight: "bold" }}>
                                {Math.floor(lowTemp)}°
                            </Text>
                        </View>
                    </>
                ) : weather == "Thunderstorm" ? (
                    <>
                        <Entypo name="thunder-cloud" size={80} color="black" />
                        <Text style={{ color: "black", fontSize: 15, fontWeight: "bold" }}>かみなり</Text>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: 30
                        }}>
                            <Text style={{ color: "#FB6542", marginRight: 20, fontSize: 15, fontWeight: "bold" }}>
                                {Math.floor(highTemp)}°
                            </Text>
                            <Text style={{ color: "#375E97", fontSize: 15, fontWeight: "bold" }}>
                                {Math.floor(lowTemp)}°
                            </Text>
                        </View>
                    </>
                )
                    : (
                        <AntDesign name="question" size={80} color="white" />
                    )}
            </View>
        </KeyboardAvoidingView>
    );
}
