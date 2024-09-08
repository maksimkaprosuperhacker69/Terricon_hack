import {StyleSheet, Text, View} from 'react-native'
import React from 'react'

const DayCircle = ({otherStylesCircle,otherStylesText,text}) => {
    return (
        <View>
            <View className={`w-[36px] h-[36px] bg-white rounded-[2200px] items-center justify-center  ${otherStylesCircle}`}>
                <Text className={`font-patua text-black text-[14px] ${otherStylesText}`}>{text}</Text>
            </View>
        </View>
    )
}
export default DayCircle;