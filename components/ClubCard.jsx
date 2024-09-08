import {Image, Text, TouchableOpacity, View} from 'react-native'
import React, {useState} from 'react'
import {router, usePathname} from "expo-router";
import {images} from "../constants";
const ClubCard = ({name1,image1,count1,name2,image2,count2, otherStyles, handlePress}) => {
    const pathname = usePathname();


    return (
        <View className={`flex-row items-center justify-center gap-7 ${otherStyles}`}>
        <TouchableOpacity onPress={handlePress} activeOpacity={0.7} className="">

            <View className="w-[170px] h-[180px] bg-main justify-center  items-center rounded-[22px] mb-5" style={{
                shadowColor: '#323131',
                shadowOffset: {width: 0, height: 6},
                shadowOpacity: 0.7,
                shadowRadius: 1,
            }}>
                <View className="justify-center items-center">
                    <Image source={image1} className="mr-2 h-[70px] w-[70px]"/>
                    <Text className="font-intro text-white text-[16px] mt-2 text-center mb-2">{count1}</Text>
                    <View className="h-[60px] w-[150px] bg-second rounded-2xl justify-center">
                        <Text className="font-intro text-[#62D2A2] text-[18px] mt-2 text-center mb-2">{name1}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handlePress} activeOpacity={0.7} className="">

            <View className="w-[170px] h-[180px] bg-main justify-center  items-center rounded-[22px] mb-5" style={{
                shadowColor: '#323131',
                shadowOffset: {width: 0, height: 6},
                shadowOpacity: 0.7,
                shadowRadius: 1,
            }}>
                <View className="justify-center items-center">
                    <Image source={image2} className="mr-2 h-[70px] w-[70px]"/>
                <Text className="font-intro text-white text-[16px] mt-2 text-center mb-2">{count2}</Text>
                    <View className="h-[60px] w-[150px] bg-second rounded-2xl justify-center">
                        <Text className="font-intro text-[#62D2A2] text-[18px] mt-2 text-center mb-2">{name2}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
        </View>
    )
}
export default ClubCard

