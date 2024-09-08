import {ActivityIndicator, Image, Text, TouchableOpacity, View} from "react-native";
import {images} from "../constants";
import {Bar} from 'react-native-progress';
import {ProgressBar} from "react-native-web";
const UserCard = ({
                          name,
                          status,
                          url,
                          handlePress,
                          containerStyles,
                          textStyles,
                          isLoading,
                      }) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.7}
            className={` w-[90%] h-40 rounded-3xl bg-main mt-12 items-center ${containerStyles} ${
                isLoading ? "opacity-50" : ""
            }`}
            disabled={isLoading}
        >
            <Text className={` mb-2 mt-4 font-intro text-[24px] text-second ${textStyles}`}>{name}</Text>
            <View className={`flex items-center flex-row gap-4 ${containerStyles}`}>
                <Image source={images.avatar}/>
                <View className="mb-2">
                <Text className={`font-intro text-[12px] mb-2 text-second ${textStyles}`} >2 книги до нового звания</Text>
                <Bar  progress={0.8} width={200} height={12} color="#9DF3C4" unfilledColor="#62D2A2"/>
                </View>
                <Image source={images.arrow}/>

            </View>
            <Text className={`font-intro text-[24px] text-second ml-4 ${textStyles}`}>{status}</Text>

        </TouchableOpacity>
    );
};

export default UserCard;