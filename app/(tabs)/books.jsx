import {FlatList, ScrollView, Modal, Image, RefreshControl, StyleSheet, Text, View, Platform} from 'react-native'
import React, {useEffect, useState} from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import {LinearGradient} from "expo-linear-gradient";
import {StatusBar} from "expo-status-bar";
import {useGlobalContext} from "../../context/GlobalProvider";
import DayCircle from "../../components/DayCircle";
//import StreakTracker from "../../context/StreakTracker";
//import CourseCard from "../../components/CourseCard";
import useAppwrite from "../../lib/useAppwrite";
import {getAccount, getCurrentUser, getEvents, getMyLevel} from "../../lib/appwrite";
import UserCard from "../../components/UserCard";
//import EmptyState from "../../components/EmptyState";
import EventCard from "../../components/EventCard";
import SearchInput from "../../components/SearchInput";
import BookCard from "../../components/BookCard";
import {icons, images} from "../../constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import CustomButton from "../../components/CustomButton";
import SettingsButton from "../../components/SettingsButton";
import * as Notifications from "expo-notifications";
import * as Permissions from 'expo-permissions';
import { usePathname } from 'expo-router';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
    }),
});



const Books = () => {

    const data=[{"$id": "66dd155b9a41818cd5ee","title": images.book1},{"$id": "66dd155b9a4181d8cd5dee","title": images.book2},{"$id": "66dd155b9rfa418s18cd5ee","title": images.book3}]
    const data1=[{"$id": "66dd155b9a41818qcd5ee","title": images.book_f_1},{"$id": "66dd155b9a4181gd8scd5ee","title": images.book_f_2},{"$id": "66dd155bgdf9a418s1vd8cd5ee","title": images.book_f_3},{"$id": "66dd155gdb9a41ffd8s1vd8cd5ee","title": images.book_f_4},{"$id": "66dd155dgdb9a418s1vddf8cd5ee","title": images.book_f_5}, {"$id": "66dd1rr55b9a418s1vd8cd5ee","title": images.book_f_6}]
    const data2=[{"$id": "66dd155b9a418djf18cd5ee","title": images.book_d_1},{"$id": "66dd155b9a4181d8dcdcgd5ree","title": images.book_d_2},{"$id": "66tedd155b9fga418svfr18cdbrt5ee","title": images.book_d_3},{"$id": "66dd155b9gfa4g1ffd8sfrfr1vd8cd5ee","title": images.book_d_4},{"$id": "66dd1dg55b9a418fgs1vddf8cd5ee","title": images.book_d_5}, {"$id": "66dd155b9a4dffd18s1vd8cgfd5ee","title": images.book_d_6}]
    const data3=[{"$id": "66dd155b9a418df18cd5ee","title": images.book_k_1},{"$id": "66dd155b9a4181d8dcdcd5ee","title": images.book_k_2},{"$id": "66dd1dd55b9a418svfr18cdbrt5ee","title": images.book_k_3},{"$id": "66dd155b9a41ffd8sfrfrr1vd8cd5ee","title": images.book_k_4},{"$id": "66dd155b9a418s1vddf8cdhtr5ee","title": images.book_k_5}, {"$id": "66dd155b9a418s1vd8hdfcd5ee","title": images.book_k_6}]

    const [refreshing, setRefreshing] = useState(false);

    const [modalWindow, setModalWindow] = useState(false);

    const onRefresh = async () => {
        setRefreshing(true);
        setRefreshing(false);
    };
    useEffect(() => {
        registerForPushNotificationsAsync();

        const notificationListener = Notifications.addNotificationReceivedListener(notification => {
            console.log('Notification received!', notification);
        });

        return () => {
            Notifications.removeNotificationSubscription(notificationListener);
        };
    }, []);

    const triggerNotification = async () => {
        await Notifications.scheduleNotificationAsync({
            content: {
                title: "Заявка отправлена!",
                body: `Вы записались на получение книги!`,
                sound: true,
            },
            trigger: null,
        });
    };

    return (

        <SafeAreaView className=" items-center justify-center h-full ">
            <ScrollView className="w-full flex  min-h-[90vh] " refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="#fff"/> }>
                <View>
                <Modal visible={modalWindow}>
                    <ScrollView>
                    <Image source={images.book_fon} className="w-full h-full absolute top-[-250] left-0"/>
                        <View className="mt-12 ml-4">
                    <FontAwesome name="close" size={50} color="white" onPress={() => setModalWindow(false)}/>


                        </View>
                    <View className="h-70vh w-full bg-white flex-1 mt-60 rounded-[40px] items-center">
                        <View className=" flex-row items-center  mt-6">
                            <Text className="font-intro text-main text-[24px] ml-4">
                                Королева ангелов
                            </Text>
                            <Image source={icons.age12} className="ml-10 mb-4 "/>
                        </View>
                        <Modal visible={modalWindow}>
                            <ScrollView>
                                <Image source={images.book_fon} className="w-full h-full absolute top-[-250] left-0"/>
                                <View className="mt-12 ml-4">
                                    <FontAwesome name="close" size={50} color="white" onPress={() => setModalWindow(false)}/>


                                </View>
                                <View className="h-70vh w-full bg-white flex-1 mt-60 rounded-[40px] items-center">
                                    <View className=" flex-row items-center  mt-6">
                                        <Text className="font-intro text-main text-[24px] ml-4">
                                            Королева ангелов
                                        </Text>
                                        <Image source={icons.age12} className="ml-10 mb-4 "/>
                                    </View>
                                    <SettingsButton title="Получить" containerStyles="bg-main w-[55vw]  mt-5" textStyles="font-intro text-[#D7FBE8] text-[16px] " image={icons.add} handlePress={() => {triggerNotification()}}/>
                                    <View>
                                        <View className=" flex-row items-center gap-1 mt-6">
                                            <Image source={icons.profile}/>
                                            <Text className="text-main font-intro">АВТОР :   Леонид Воронар</Text>
                                        </View>
                                        <View className=" flex-row items-center gap-1 mt-6">
                                            <Image source={icons.info_1}/>
                                            <Text className="text-main font-intro">ИЗДАНИЕ :   Бомбора</Text>
                                        </View>
                                        <View className=" flex-row items-center gap-1 mt-6">
                                            <Image source={icons.info_2}/>
                                            <Text className="text-main font-intro">СТРАНА И ГОД ИЗДАНИЯ : Казахстан, 2016</Text>
                                        </View>
                                    </View>
                                    <View className="w-[80%] mt-6" >
                                        <Text className="text-main font-intro text-[20px]">Описание</Text>
                                        <Text className="text-main font-intro mt-4 text-[10px]">
                                            "Королева ангелов" — захватывающее фэнтези, рассказывающее о смелой девушке,
                                            которая неожиданно обретает силу ангела-хранителя. Её миссия — защитить мир
                                            от надвигающейся тьмы. В этом путешествии она раскрывает свои скрытые способности,
                                            сталкивается с предательством и формирует союз с необычными союзниками.
                                            Каждое её решение ведёт к непредсказуемым последствиям, которые определят
                                            судьбу всего мира.
                                        </Text>
                                    </View>


                                </View>
                            </ScrollView>
                        </Modal><SettingsButton title="Получить" containerStyles="bg-main w-[55vw]  mt-5" textStyles="font-intro text-[#D7FBE8] text-[16px] " image={icons.add}/>
                        <View>
                            <View className=" flex-row items-center gap-1 mt-6">
                                <Image source={icons.profile}/>
                                <Text className="text-main font-intro">АВТОР :   Леонид Воронар</Text>
                            </View>
                            <View className=" flex-row items-center gap-1 mt-6">
                                <Image source={icons.info_1}/>
                                <Text className="text-main font-intro">ИЗДАНИЕ :   Бомбора</Text>
                            </View>
                            <View className=" flex-row items-center gap-1 mt-6">
                                <Image source={icons.info_2}/>
                                <Text className="text-main font-intro">СТРАНА И ГОД ИЗДАНИЯ : Казахстан, 2016</Text>
                            </View>
                        </View>
                        <View className="w-[80%] mt-6" >
                            <Text className="text-main font-intro text-[20px]">Описание</Text>
                            <Text className="text-main font-intro mt-4 text-[10px]">
                                "Королева ангелов" — захватывающее фэнтези, рассказывающее о смелой девушке,
                                которая неожиданно обретает силу ангела-хранителя. Её миссия — защитить мир
                                от надвигающейся тьмы. В этом путешествии она раскрывает свои скрытые способности,
                                сталкивается с предательством и формирует союз с необычными союзниками.
                                Каждое её решение ведёт к непредсказуемым последствиям, которые определят
                                судьбу всего мира.
                            </Text>
                        </View>


                    </View>
                    </ScrollView>
                </Modal>
            </View>
                <SearchInput holder="Найти книгу"/>
                <View className="mt-6">
                    <Text className=" ml-2 text-main font-intro text-[24px]">ВЫ ЧИТАЛИ:</Text>
                <View className="w-full h-[21vh] bg-second border-2 border-main  justify-center ">
                <FlatList
                    className="mt-2"
                    data={data}
                    keyExtractor={(item) => item.$id}
                    horizontal={true}

                    renderItem={({item}) => (
                        <BookCard image={item.title}  handlePress={() => {setModalWindow(true)}}/>
                    )}

                />
                </View>
                </View>
                <View className="mt-6">
                    <Text className=" ml-2 text-main font-intro text-[24px]">Фантастика:</Text>
                    <View className="w-full h-[21vh] bg-second border-2 border-main justify-center ">
                        <FlatList
                            className="mt-2"
                            data={data1}
                            keyExtractor={(item) => item.$id}
                            horizontal={true}

                            renderItem={({item}) => (
                                <BookCard image={item.title} handlePress={() => {setModalWindow(true)}}/>
                            )}

                        />
                    </View>
                </View>
                <View className="mt-6">
                    <Text className=" ml-2 text-main font-intro text-[24px]">Детективы:</Text>
                    <View className="w-full h-[21vh] bg-second border-2 border-main  justify-center ">
                        <FlatList
                            className="mt-2"
                            data={data2}
                            keyExtractor={(item) => item.$id}
                            horizontal={true}

                            renderItem={({item}) => (
                                <BookCard image={item.title} handlePress={() => {setModalWindow(true)}}/>
                            )}

                        />
                    </View>
                </View>
                <View className="mt-6">
                    <Text className=" ml-2 text-main font-intro text-[24px]">Классика:</Text>
                    <View className="w-full h-[21vh] bg-second border-2 border-main  justify-center ">
                        <FlatList
                            className="mt-2"
                            data={data3}
                            keyExtractor={(item) => item.$id}
                            horizontal={true}

                            renderItem={({item}) => (
                                <BookCard image={item.title} handlePress={() => {setModalWindow(true)}}/>
                            )}

                        />
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>

    )
}

async function registerForPushNotificationsAsync() {
    let token;
    if (Platform.OS === 'ios') {
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;

        if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
        }

        if (finalStatus !== 'granted') {
            alert('Не удалось получить разрешение на уведомления!');
            return;
        }
        await Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            sound: true,
            vibrationPattern: [0, 250, 250, 250],
        });

        token = (await Notifications.getExpoPushTokenAsync()).data;
        console.log('Push token:', token);
    }
}
export default Books
