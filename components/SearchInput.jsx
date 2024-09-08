import { useState } from "react";
import { router, usePathname } from "expo-router";
import { View, TouchableOpacity, Image, TextInput, Alert } from "react-native";

import { icons } from "../constants";

const SearchInput = ({ initialQuery,holder }) => {
    const pathname = usePathname();
    const [query, setQuery] = useState(initialQuery || "");

    return (
        <View className="flex flex-row mt-14 items-center s w-[95%] h-16 px-4 bg-main ml-[2.5%] rounded-3xl border-2 border-second focus:border-second">
            <TextInput
                className="text-base mt-0.5 text-second flex-1 font-intro"
                value={query}
                placeholder={holder}
                placeholderTextColor="#D7FBE8"
                onChangeText={(e) => setQuery(e)}
            />

            <TouchableOpacity
                onPress={() => {
                    if (query === "")
                        return Alert.alert(
                            "Missing Query",
                            "Please input something to search results across database"
                        );

                    if (pathname.startsWith("/search")) router.setParams({ query });
                    else router.push(`/search/${query}`);
                }}
            >
                <Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
            </TouchableOpacity>
        </View>
    );
};

export default SearchInput;