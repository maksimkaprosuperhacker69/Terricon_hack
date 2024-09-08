import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

const CustomButton = ({
                          title,
                          handlePress,
                          containerStyles,
                          textStyles,
                          isLoading,
                      }) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.7}
            className={`bg-black  rounded-xl min-h-[62px] flex flex-row justify-center items-center ${containerStyles} ${
                isLoading ? "opacity-50" : ""
            }`}
            disabled={isLoading}
        >
            <Text className={`text-lg ${textStyles}`}>
                {title}
            </Text>

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