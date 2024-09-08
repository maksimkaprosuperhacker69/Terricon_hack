import {
    FlatList,
    ScrollView,
    RefreshControl,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Modal
} from 'react-native'
import React, {useState} from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import {LinearGradient} from "expo-linear-gradient";
import {StatusBar} from "expo-status-bar";
import {useGlobalContext} from "../../context/GlobalProvider";
import DayCircle from "../../components/DayCircle";
//import StreakTracker from "../../context/StreakTracker";
//import CourseCard from "../../components/CourseCard";
import useAppwrite from "../../lib/useAppwrite";
import {getAccount, getCurrentUser, getEvents, getMyLevel, signOut} from "../../lib/appwrite";
import UserCard from "../../components/UserCard";
//import EmptyState from "../../components/EmptyState";
import EventCard from "../../components/EventCard";
import SearchInput from "../../components/SearchInput";
import BookCard from "../../components/BookCard";
import {icons, images} from "../../constants";
import ClubCard from "../../components/ClubCard";
import SettingsButton from "../../components/SettingsButton";
import {router} from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const Settings = () => {


    const {user, setUser, setIsLogged} = useGlobalContext();
    const [refreshing, setRefreshing] = useState(false);
    const [modalWindow, setModalWindow] = useState(false);

    const onRefresh = async () => {
        setRefreshing(true);
        setRefreshing(false);
    };
    const logout = async () => {
        await signOut();
        setUser(null);
        setIsLogged(false);

        router.replace("/sign-in");
    };
    return (

        <SafeAreaView className=" items-center justify-center h-full ">

            <ScrollView className="w-full flex  min-h-[90vh] " refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="#fff"/> }>
                <Modal visible={modalWindow}>
                    <ScrollView>
                        <View className="mt-12 ml-2">
                            <FontAwesome name="close" size={40} color='#1FAB89'  onPress={() => setModalWindow(false)}/>
                            <View className="justify-center items-center">
                                <Image source={images.floor_1} resizeMode='contain'  className="mb-6 h-[90vh]"/>
                                <Image source={images.floor_2} resizeMode='contain'  className="mb-6 h-[90vh]"/>
                                <Image source={images.floor_3} resizeMode='contain'  className="mb-6 h-[90vh]"/>

                            </View>
                        </View>

                    </ScrollView>
                </Modal>
                <View className="justify-center items-center">
                    <UserCard name='Максим'  status={"Начинаюший"}  containerStyles="bg-[#efefef]" textStyles="text-main"/>
                    <View className=" flex-col">
                        <SettingsButton title="Навигация" containerStyles="bg-main w-[80vw] rounded-[100px] mt-5" textStyles="font-intro text-[#D7FBE8] text-[16px]" image={icons.izmenite} handlePress={() => {setModalWindow(true)}}/>
                        <SettingsButton title="Изменить язык" containerStyles="bg-main w-[80vw] rounded-[100px] mt-5" textStyles="font-intro text-[#D7FBE8] text-[16px]" image={icons.global}/>
                        <SettingsButton title="Политика конфиденциальности" containerStyles="bg-main w-[80vw] rounded-[100px] mt-5" textStyles="font-intro text-[#D7FBE8] text-[12px]" image={icons.politic}/>
                        <SettingsButton title="Уведомления" containerStyles="bg-main w-[80vw] rounded-[100px] mt-5" textStyles="font-intro text-[#D7FBE8] text-[16px]" image={icons.uvedom}/>
                        <SettingsButton title="История бронированных книг" containerStyles="bg-main w-[80vw] rounded-[100px] mt-5" textStyles="font-intro text-[#D7FBE8] text-[13px]" image={icons.history}/>
                        <SettingsButton title="Тема" containerStyles="bg-main w-[80vw] rounded-[100px] mt-5" textStyles="font-intro text-[#D7FBE8] text-[16px]" image={icons.tema}/>
                    </View>


                    </View>
                <View className="flex-row mt-3 ml-4 items-center">
                    <Image source={icons.exit} className="mr-2"/>
                    <TouchableOpacity
                        onPress={logout}
                        activeOpacity={0.7}
                    >
                    <Text className="text-main font-intro">
                        Выйти из аккаунта
                    </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}
export default Settings
