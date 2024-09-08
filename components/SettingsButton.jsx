import {ActivityIndicator, Image, Text, TouchableOpacity, View} from "react-native";
import {icons} from  "../constants"
const CustomButton = ({
                          title,
                          handlePress,
                          containerStyles,
                          textStyles,
                          isLoading,
                          image
                      }) => {

    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.7}
            className={`bg-black  rounded-xl min-h-[62px] flex flex-row items-center ${containerStyles} ${
                isLoading ? "opacity-50" : ""
            }`}
            disabled={isLoading}
        >
            <View className="items-les flex-row gap-3 ml-4">
                <Image source={image} className="justify-center"/>
            <Text className={`text-lg ${textStyles}`}>
                {title}
            </Text>
            </View>

            {isLoading && (
                <ActivityIndicator
                    animating={isLoading}
                    color="#5C0BD8"
                    size="small"
                    className="ml-2"
                />
            )}
        </TouchableOpacity>
    );
};

export default CustomButton;