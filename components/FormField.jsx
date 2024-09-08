import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

import { icons } from "../constants";


const FormField = ({
                       title,
                       value,
                       placeholder,
                       handleChangeText,
                       otherStyles,
    blockStyles,
                       textStyle,
                       ...props
                   }) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View className={`space-y-2 ${blockStyles}`}>
            <Text className={`ml-1 text-base  font-patua ${textStyle}`}>{title}</Text>

            <View className={`w-full h-16 px-4  rounded-2xl border-2 border-white focus:border-4 flex flex-row items-center ${otherStyles}`}>
                <TextInput
                    className="flex-1 text-white font-intro text-xl"
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor="#9DF3C4"
                    T
                    onChangeText={handleChangeText}
                    secureTextEntry={title === "Password" && !showPassword}
                    {...props}
                />

                {title === "Password" && (
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <Image
                            source={!showPassword ? icons.eye : icons.hide}
                            className="w-6 h-6 "
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default FormField;
