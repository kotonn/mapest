import React, { useState, useEffect } from 'react';
import { Text, KeyboardAvoidingView, View, TextInput, TouchableOpacity } from 'react-native';
import * as Location from 'expo-location';
import { WEATHER_URL, WEAHTER_API_KEY } from '@env';
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
    const [weather, setWeather] = useState('');
    const [highTemp, setHighTemp] = useState('');
    const [lowTemp, setLowTemp] = useState('');
    const [loading, setLoading] = useState(true);
    const [prefecture, setPrefecture] = useState('');
    const navigation = useNavigation();

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

    const getWeather = async () => {
        try {
            if (prefecture == "北海道") {
                prefecture.replace("北海道", "Hokkaido");
                setPrefecture(prefecture);
            } else if (prefecture == "青森県") {
                prefecture.replace("青森県", "Aomori");
                setPrefecture(prefecture);
            } else if (prefecture == "岩手県") {
                prefecture.replace("岩手県", "Iwate");
                setPrefecture(prefecture);
            } else if (prefecture == "宮城県") {
                prefecture.replace("宮城県", "Miyagi");
                setPrefecture(prefecture);
            } else if (prefecture == "秋田県") {
                prefecture.replace("秋田県", "Akita");
                setPrefecture(prefecture);
            } else if (prefecture == "山形県") {
                prefecture.replace("山形県", "Yamagata");
                setPrefecture(prefecture);
            } else if (prefecture == "福島県") {
                prefecture.replace("福島県", "Fukushima");
                setPrefecture(prefecture);
            } else if (prefecture == "茨城県") {
                prefecture.replace("茨城県", "Ibaraki");
                setPrefecture(prefecture);
            } else if (prefecture == "栃木県") {
                prefecture.replace("栃木県", "Tochigi");
                setPrefecture(prefecture);
            } else if (prefecture == "群馬県") {
                prefecture.replace("群馬県", "Gunma");
                setPrefecture(prefecture);
            } else if (prefecture == "埼玉県") {
                prefecture.replace("埼玉県", "Saitama");
                setPrefecture(prefecture);
            } else if (prefecture == "千葉県") {
                prefecture.replace("千葉県", "Chiba");
                setPrefecture(prefecture);
            } else if (prefecture == "東京都") {
                prefecture.replace("東京都", "Tokyo");
                setPrefecture(prefecture);
            } else if (prefecture == "神奈川県") {
                prefecture.replace("神奈川県", "Kanagawa");
                setPrefecture(prefecture);
            } else if (prefecture == "新潟県") {
                prefecture.replace("新潟県", "Niigata");
                setPrefecture(prefecture);
            } else if (prefecture == "富山県") {
                prefecture.replace("富山県", "Toyama");
                setPrefecture(prefecture);
            } else if (prefecture == "石川県") {
                prefecture.replace("石川県", "Ishikawa");
                setPrefecture(prefecture);
            } else if (prefecture == "福井県") {
                prefecture.replace("福井県", "Fukui");
                setPrefecture(prefecture);
            } else if (prefecture == "山梨県") {
                prefecture.replace("山梨県", "Yamanashi");
                setPrefecture(prefecture);
            } else if (prefecture == "長野県") {
                prefecture.replace("長野県", "Nagano");
                setPrefecture(prefecture);
            } else if (prefecture == "岐阜県") {
                prefecture.replace("岐阜県", "Gifu");
                setPrefecture(prefecture);
            } else if (prefecture == "静岡県") {
                prefecture.replace("静岡県", "Shizuoka");
                setPrefecture(prefecture);
            } else if (prefecture == "愛知県") {
                prefecture.replace("愛知県", "Aichi");
                setPrefecture(prefecture);
            } else if (prefecture == "三重県") {
                prefecture.replace("三重県", "Mie");
                setPrefecture(prefecture);
            } else if (prefecture == "滋賀県") {
                prefecture.replace("滋賀県", "Shiga");
                setPrefecture(prefecture);
            } else if (prefecture == "京都府") {
                prefecture.replace("京都府", "Kyoto");
                setPrefecture(prefecture);
            } else if (prefecture == "大阪府") {
                prefecture.replace("大阪府", "Osaka");
                setPrefecture(prefecture);
            } else if (prefecture == "兵庫県") {
                prefecture.replace("兵庫県", "Hyogo");
                setPrefecture(prefecture);
            } else if (prefecture == "奈良県") {
                prefecture.replace("奈良県", "Nara");
                setPrefecture(prefecture);
            } else if (prefecture == "和歌山県") {
                prefecture.replace("和歌山県", "Wakayama");
                setPrefecture(prefecture);
            } else if (prefecture == "鳥取県") {
                prefecture.replace("鳥取県", "Tottori");
                setPrefecture(prefecture);
            } else if (prefecture == "島根県") {
                prefecture.replace("島根県", "Shimane");
                setPrefecture(prefecture);
            } else if (prefecture == "岡山県") {
                prefecture.replace("岡山県", "Okayama");
                setPrefecture(prefecture);
            } else if (prefecture == "広島県") {
                prefecture.replace("広島県", "Hiroshima");
                setPrefecture(prefecture);
            } else if (prefecture == "山口県") {
                prefecture.replace("山口県", "Yamaguchi");
                setPrefecture(prefecture);
            } else if (prefecture == "徳島県") {
                prefecture.replace("徳島県", "Tokushima");
                setPrefecture(prefecture);
            } else if (prefecture == "香川県") {
                prefecture.replace("香川県", "Kagawa");
                setPrefecture(prefecture);
            } else if (prefecture == "愛媛県") {
                prefecture.replace("愛媛県", "Ehime");
                setPrefecture(prefecture);
            } else if (prefecture == "高知県") {
                prefecture.replace("高知県", "Kochi");
                setPrefecture(prefecture);
            } else if (prefecture == "福岡県") {
                prefecture.replace("福岡県", "Fukuoka");
                setPrefecture(prefecture);
            } else if (prefecture == "佐賀県") {
                prefecture.replace("佐賀県", "Saga");
                setPrefecture(prefecture);
            } else if (prefecture == "長崎県") {
                prefecture.replace("長崎県", "Nagasaki");
                setPrefecture(prefecture);
            } else if (prefecture == "熊本県") {
                prefecture.replace("熊本県", "Kumamoto");
                setPrefecture(prefecture);
            } else if (prefecture == "大分県") {
                prefecture.replace("大分県", "Oita");
                setPrefecture(prefecture);
            } else if (prefecture == "宮崎県") {
                prefecture.replace("宮崎県", "Miyazaki");
                setPrefecture(prefecture);
            } else if (prefecture == "鹿児島県") {
                prefecture.replace("鹿児島県", "Kagoshima");
                setPrefecture(prefecture);
            } else if (prefecture == "沖縄県") {
                prefecture.replace("沖縄県", "Okinawa");
                setPrefecture(prefecture);
            }
            const response = await fetch(
                `${WEATHER_URL}?q=${prefecture}&appid=${WEAHTER_API_KEY}&units=metric`
            );
            const result = await response.json();
            const searchWeather = result.weather[0].main;
            const searchHighTemp = result.main.temp_max;
            const searchLowTemp = result.main.temp_min;

            setWeather(searchWeather);
            setHighTemp(searchHighTemp);
            setLowTemp(searchLowTemp);


        } catch (error) {
            console.log(error.message);
        }
    };

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
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                }}>
                    <TextInput
                        style={{
                            width: 230,
                            height: 40,
                            borderWidth: 1,
                            marginTop: -140,
                            marginRight: 10,
                            marginBottom: 40,
                            borderRadius: 10,
                            borderColor: 'white',
                            backgroundColor: 'white',
                            opacity: 0.8,
                            textAlign: 'center'
                        }}
                        onChangeText={setPrefecture}
                        value={prefecture}
                        placeholder="県名を入力してください"
                        autoCapitalize="none"
                        autoCorrect={false}
                        clearButtonMode="always"
                    />
                    <TouchableOpacity
                        onPress={getWeather}
                        style={{ backgroundColor: "white", width: 50, height: 40, borderRadius: 10, justifyContent: 'center', alignItems: "center", marginTop: -140, opacity: 0.8 }}
                    >
                        <AntDesign name="search1" size={24} color="black" style={{ opacity: 0.5 }} />
                    </TouchableOpacity>
                </View>
                {weather == "Clouds" ? (
                    <>
                        <AntDesign name="cloudo" size={80} color="white" style={{ opacity: 0.8, marginTop: -30 }} />
                        <Text style={{ color: "white", opacity: 0.8, fontSize: 15, fontWeight: "bold", marginTop: 5 }}>くもり</Text>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: 20
                        }}>
                            <TouchableOpacity
                                style={{ borderRadius: 100, opacity: 0.8, backgroundColor: "white", marginRight: 15, width: 30, height: 30, justifyContent: 'center', alignItems: "center" }}
                            >
                                <Text style={{ color: "#FB6542", fontSize: 15, fontWeight: "bold" }}>
                                    {Math.floor(highTemp)}°
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ borderRadius: 100, opacity: 0.8, backgroundColor: "white", width: 30, height: 30, justifyContent: 'center', alignItems: "center" }}
                            >
                                <Text style={{ color: "#375E97", fontSize: 15, fontWeight: "bold" }}>
                                    {Math.floor(lowTemp)}°
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </>
                ) : weather == "Clear" ? (
                    <>
                        <Fontisto name="day-sunny" size={80} color="#F8D8B7" style={{ opacity: 0.8, marginTop: -30 }} />
                        <Text style={{ color: "#F8D8B7", opacity: 0.8, fontSize: 15, fontWeight: "bold", marginTop: 7 }}>はれ</Text>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: 30
                        }}>
                            <TouchableOpacity
                                style={{ borderRadius: 100, opacity: 0.8, backgroundColor: "white", marginRight: 15, width: 30, height: 30, justifyContent: 'center', alignItems: "center" }}
                            >
                                <Text style={{ color: "#FB6542", fontSize: 15, fontWeight: "bold" }}>
                                    {Math.floor(highTemp)}°
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ borderRadius: 100, opacity: 0.8, backgroundColor: "white", width: 30, height: 30, justifyContent: 'center', alignItems: "center" }}
                            >
                                <Text style={{ color: "#375E97", fontSize: 15, fontWeight: "bold" }}>
                                    {Math.floor(lowTemp)}°
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </>
                ) : weather == "Mist" || weather == "Smoke" || weather == "Haze" || weather == "Dust" || weather == "Fog" || weather == "Sand" || weather == "Ash" || weather == "Squall" || weather == "Tornado" ? (
                    <>
                        <Fontisto name="fog" size={80} color="white" style={{ opacity: 0.8, marginTop: -30 }} />
                        <Text style={{ color: "white", opacity: 0.8, fontSize: 15, fontWeight: "bold", marginTop: 13 }}>きり</Text>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: 30
                        }}>
                            <TouchableOpacity
                                style={{ borderRadius: 100, opacity: 0.8, backgroundColor: "white", marginRight: 15, width: 30, height: 30, justifyContent: 'center', alignItems: "center" }}
                            >
                                <Text style={{ color: "#FB6542", fontSize: 15, fontWeight: "bold" }}>
                                    {Math.floor(highTemp)}°
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ borderRadius: 100, opacity: 0.8, backgroundColor: "white", width: 30, height: 30, justifyContent: 'center', alignItems: "center" }}
                            >
                                <Text style={{ color: "#375E97", fontSize: 15, fontWeight: "bold" }}>
                                    {Math.floor(lowTemp)}°
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </>
                ) : weather == "snow" ? (
                    <>
                        <Feather name="cloud-snow" size={80} color="white" style={{ marginTop: -30 }} />
                        <Text style={{ color: "white", fontSize: 15, fontWeight: "bold", marginTop: 13 }}>ゆき</Text>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: 30
                        }}>
                            <TouchableOpacity
                                style={{ borderRadius: 100, opacity: 0.8, backgroundColor: "white", marginRight: 15, width: 30, height: 30, justifyContent: 'center', alignItems: "center" }}
                            >
                                <Text style={{ color: "#FB6542", fontSize: 15, fontWeight: "bold" }}>
                                    {Math.floor(highTemp)}°
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ borderRadius: 100, opacity: 0.8, backgroundColor: "white", width: 30, height: 30, justifyContent: 'center', alignItems: "center" }}
                            >
                                <Text style={{ color: "#375E97", fontSize: 15, fontWeight: "bold" }}>
                                    {Math.floor(lowTemp)}°
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </>
                ) : weather == "Rain" || weather == "Drizzle" ? (
                    <>
                        <Feather name="cloud-rain" size={80} color="white" style={{ opacity: 0.8, marginTop: -30 }} />
                        <Text style={{ color: "white", opacity: 0.8, fontSize: 15, fontWeight: "bold", marginTop: 13 }}>あめ</Text>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: 30
                        }}>
                            <TouchableOpacity
                                style={{ borderRadius: 100, opacity: 0.8, backgroundColor: "white", marginRight: 15, width: 30, height: 30, justifyContent: 'center', alignItems: "center" }}
                            >
                                <Text style={{ color: "#FB6542", fontSize: 15, fontWeight: "bold" }}>
                                    {Math.floor(highTemp)}°
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ borderRadius: 100, opacity: 0.8, backgroundColor: "white", width: 30, height: 30, justifyContent: 'center', alignItems: "center" }}
                            >
                                <Text style={{ color: "#375E97", fontSize: 15, fontWeight: "bold" }}>
                                    {Math.floor(lowTemp)}°
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </>
                ) : weather == "Thunderstorm" ? (
                    <>
                        <Entypo name="thunder-cloud" size={80} color="black" style={{ marginTop: -30 }} />
                        <Text style={{ color: "black", fontSize: 15, fontWeight: "bold", marginTop: 5 }}>かみなり</Text>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: 30
                        }}>
                            <TouchableOpacity
                                style={{ borderRadius: 100, opacity: 0.8, backgroundColor: "white", marginRight: 15, width: 30, height: 30, justifyContent: 'center', alignItems: "center" }}
                            >
                                <Text style={{ color: "#FB6542", fontSize: 15, fontWeight: "bold" }}>
                                    {Math.floor(highTemp)}°
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ borderRadius: 100, opacity: 0.8, backgroundColor: "white", width: 30, height: 30, justifyContent: 'center', alignItems: "center" }}
                            >
                                <Text style={{ color: "#375E97", fontSize: 15, fontWeight: "bold" }}>
                                    {Math.floor(lowTemp)}°
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )
                    : (
                        <AntDesign name="question" size={80} color="white" />
                    )}
                <TouchableOpacity
                    style={{ width: 70, height: 70, borderRadius: 50, position: "absolute", right: 50, bottom: 70, opacity: 0.8 }}
                    onPress={() => { navigation.navigate("ToDo") }}
                >
                    <Ionicons name="ios-add-circle-outline" size={70} color="white" />
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}
