import {Image, Text, TouchableOpacity, View} from 'react-native'
import React, {useState} from 'react'
import {router, usePathname} from "expo-router";

const BookCard = ({image, handlePress}) => {
    const pathname = usePathname();

    return (
        <TouchableOpacity onPress={handlePress}
                          activeOpacity={0.7} className="ml-4">
            <Image  className="rounded-2xl h-[160px] w-[110px] " source={image}  resizeMode="contain" />
        </TouchableOpacity>
    )
}
export default BookCard

