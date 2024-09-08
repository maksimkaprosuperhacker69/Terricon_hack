import {FlatList, ScrollView, RefreshControl, StyleSheet, Text, View, Image, Modal} from 'react-native'
import React, {useState} from 'react'
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
import ClubCard from "../../components/ClubCard";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import SettingsButton from "../../components/SettingsButton";

const Community = () => {

    const data=[{"$id": "66dd155b9a41818cd5ee","title": images.book1},{"$id": "66dd155b9a4181d8cd5ee","title": images.book2},{"$id": "66dd155b9a418s18cd5ee","title": images.book3}]

    const [refreshing, setRefreshing] = useState(false);
    const [modalWindow, setModalWindow] = useState(false);

    const onRefresh = async () => {
        setRefreshing(true);
        setRefreshing(false);
    };
    return (

        <SafeAreaView className=" items-center justify-center h-full ">
            <Modal visible={modalWindow}>
                <ScrollView>
                    <View className="mt-12 ml-2">
                        <FontAwesome name="close" size={40} color='#1FAB89'  onPress={() => setModalWindow(false)}/>
                        <View className="justify-center items-center">
                        <Image source={icons.classic_icon} className="mb-6"/>

                        <Text className="font-intro text-main text-[34px] ml-4">Классика

                        </Text>
                            <Text className="font-intro text-second text-[24px] ml-4">120 участников

                            </Text>
                        </View>
                        <View className="mt-10">
                            <Text className="font-intro text-main text-[26px] ml-4">
                                описание
                            </Text>
                            <Text className="font-intro text-main text-[14px] ml-4 mt-4">
                                Клуб классической литературы — это уютное сообщество для любителей вечных произведений,
                                где каждый может обсудить великие романы, поэзию и философию прошлого. Мы погружаемся
                                в анализ произведений, делимся интерпретациями и наслаждаемся глубокими беседами о
                                литературных шедеврах. Присоединяйтесь, чтобы открыть новые горизонты и найти
                                единомышленников среди ценителей классики.
                            </Text>

                        </View>
                        <View className="justify-center items-center mt-10">
                        <SettingsButton title="Вступить" containerStyles="bg-main w-[55vw]  mt-5" textStyles="font-intro text-[#D7FBE8] text-[16px] " image={icons.add_man}/>
                    </View>

                    </View>

                </ScrollView>
            </Modal>
            <ScrollView className="w-full flex  min-h-[90vh] " refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="#fff"/> }>
                <SearchInput holder="Найти клуб"/>
                <ClubCard otherStyles="mt-3" name1='Детективы' name2='Фэнтази' count1="150 участников" count2="78 участников" image1={images.detective_club} image2={images.fantasy_club} handlePress={() => {setModalWindow(true)}}/>
                <ClubCard name1='Классика' name2='Биография' count1="120 участников" count2="57 участников" image1={images.classic_club} image2={images.biography_club} handlePress={() => {setModalWindow(true)}}/>
                <ClubCard name1='Хоррор' name2='Учебники' count1="185 участников" count2="250 участников" image1={images.horror_club} image2={images.student_club} handlePress={() => {setModalWindow(true)}}/>

            </ScrollView>
        </SafeAreaView>

    )
}
export default Community
