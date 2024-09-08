import {FlatList, ScrollView,RefreshControl, StyleSheet, Text, View} from 'react-native'
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


const Home = () => {


    const data=[{"$collectionId": "66405a9f002b8f5d196b", "$createdAt": "2024-09-08T03:09:15.634+00:00", "$databaseId": "663c984a00205183e6bf", "$id": "66dd155b9a41818cd5ee", "$permissions": ["read(\"user:66dd1505c7d3f4427a9e\")", "update(\"user:66dd1505c7d3f4427a9e\")", "delete(\"user:66dd1505c7d3f4427a9e\")"], "$updatedAt": "2024-09-08T03:09:15.634+00:00", "creatorId": {"$collectionId": "663c988700126b972457", "$createdAt": "2024-09-08T03:07:51.655+00:00", "$databaseId": "663c984a00205183e6bf", "$id": "66dd15079fd0e43860ea", "$permissions": [Array], "$updatedAt": "2024-09-08T03:07:51.655+00:00", "accountId": "66dd1505c7d3f4427a9e", "email": "Dcfgbh@gmail.com", "username": "Qwert"}, "date": "September 08", "description": "Awed", "file": "https://cloud.appwrite.io/v1/storage/buckets/663c9a3500271995569d/files/66dd155a987ffb96cfc3/view?project=663c968d0034314f646f", "title": "Через 6 дней будет День знаний"}, {"$collectionId": "66405a9f002b8f5d196b", "$createdAt": "2024-09-08T03:09:25.687+00:00", "$databaseId": "663c984a00205183e6bf", "$id": "66dd1565a6e2668d8c78", "$permissions": ["read(\"user:66dd1505c7d3f4427a9e\")", "update(\"user:66dd1505c7d3f4427a9e\")", "delete(\"user:66dd1505c7d3f4427a9e\")"], "$updatedAt": "2024-09-08T03:09:25.687+00:00", "creatorId": {"$collectionId": "663c988700126b972457", "$createdAt": "2024-09-08T03:07:51.655+00:00", "$databaseId": "663c984a00205183e6bf", "$id": "66dd15079fd0e43860ea", "$permissions": [Array], "$updatedAt": "2024-09-08T03:07:51.655+00:00", "accountId": "66dd1505c7d3f4427a9e", "email": "Dcfgbh@gmail.com", "username": "Qwert"}, "date": "September 08", "description": "Awed", "file": "https://cloud.appwrite.io/v1/storage/buckets/663c9a3500271995569d/files/66dd15647bcb46d9fe35/view?project=663c968d0034314f646f", "title": "Через месяц будет испытание Гарри Поттера"}, {"$collectionId": "66405a9f002b8f5d196b", "$createdAt": "2024-09-08T03:09:26.417+00:00", "$databaseId": "663c984a00205183e6bf", "$id": "66dd1566653733e794ab", "$permissions": ["read(\"user:66dd1505c7d3f4427a9e\")", "update(\"user:66dd1505c7d3f4427a9e\")", "delete(\"user:66dd1505c7d3f4427a9e\")"], "$updatedAt": "2024-09-08T03:09:26.417+00:00", "creatorId": {"$collectionId": "663c988700126b972457", "$createdAt": "2024-09-08T03:07:51.655+00:00", "$databaseId": "663c984a00205183e6bf", "$id": "66dd15079fd0e43860ea", "$permissions": [Array], "$updatedAt": "2024-09-08T03:07:51.655+00:00", "accountId": "66dd1505c7d3f4427a9e", "email": "Dcfgbh@gmail.com", "username": "Qwert"}, "date": "September 08", "description": "Awed", "file": "https://cloud.appwrite.io/v1/storage/buckets/663c9a3500271995569d/files/66dd15655ecde041a42c/view?project=663c968d0034314f646f", "title":"Завтра нужно вернуть в библиотеку книгу “Цель”"}]
    const {deta, loading, refetch} = useAppwrite(() => getCurrentUser())

    const [refreshing, setRefreshing] = useState(false);
   const onRefresh = async () => {
        setRefreshing(true);
        await refetch();
        setRefreshing(false);
    };

    //const currentStreak = StreakTracker();
    const currentDate = new Date();
    const dayIndex = currentDate.getDay() + 1;
    console.log(data)
    return (

        <SafeAreaView className=" items-center justify-center h-full ">
            <ScrollView className="w-full flex  min-h-[90vh] " refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="#fff"/> }>
                {!loading?
                <View>
                <View className="w-full items-center  justify-center ">
                    <UserCard name='Максим' url={data?.icon} status={"Начинаюший"}/>
                </View>
                <View className=" justify-center mt-8">


                    <View className="flex-row mt-4">
                        <View className=" ml-[21px] items-center ">
                        <DayCircle text='' otherStylesCircle="bg-second"/>
                        <Text className="text-second font-intro  text-[18px] mt-2"> Вс </Text>
                        </View  >
                        <View className="ml-4 items-center ">
                            <DayCircle text='' otherStylesCircle="bg-main"/>
                            <Text className="text-main font-intro  text-[18px] mt-2"> Пн </Text>
                        </View>
                        <View className=" ml-4 items-center ">
                            <DayCircle text='' otherStylesCircle="bg-main"/>
                            <Text className="text-main font-intro  text-[18px] mt-2"> Вт </Text>
                        </View>
                        <View className=" ml-4 items-center ">
                            <DayCircle text='' otherStylesCircle="bg-main"/>
                            <Text className="text-main font-intro  text-[18px] mt-2"> Ср </Text>
                        </View>
                        <View className=" ml-4 items-center ">
                            <DayCircle text='' otherStylesCircle="bg-[#C0D100]"/>
                            <Text className="text-[#C0D100] font-intro text-[18px] mt-2"> Чт </Text>
                        </View>
                        <View className=" ml-4 items-center ">
                            <DayCircle text='' otherStylesCircle="bg-main"/>
                            <Text className="text-main font-intro  text-[18px] mt-2"> Пт </Text>
                        </View>
                        <View className=" ml-4 items-center ">
                            <DayCircle text='' otherStylesCircle="bg-main"/>
                            <Text className="text-main font-intro  text-[18px] mt-2"> Сб </Text>
                        </View>
                    </View>

                    </View>

                    <View className="w-[90%] bg-main h-[0.7%] mt-[5%] rounded-3xl ml-[5%]">
                </View>
                    <View className="justify-center items-center mt-6">
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.$id}
                        renderItem={({item}) => (
                            <EventCard date={item.date} name={item.title} id={item.$id}/>
                        )}

                    />

                    </View>


                </View>
                :
                <>

                </>
                }

            </ScrollView>
        </SafeAreaView>

    )
}
export default Home
const styles = StyleSheet.create({})
