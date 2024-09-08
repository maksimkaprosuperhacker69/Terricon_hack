import {Image, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {Tabs} from "expo-router";
import {icons} from "../../constants";
import {LinearGradient} from "expo-linear-gradient";


const TabIcon = ({icon, color, name, focused, classNames}) => {
    return (
        <View className={`justify-center items-center  ${classNames}`}>
            <Image
                source={icon}
                resizeMode="contain"
                tintColor={color}
                className="w-[30px] h-[30px]"
            />
            <Text className={`${focused ? 'font-intro text-white' : 'font-intro text-second'} text-xs mt-1`}>{name}</Text>
        </View>
    )
}


const TabsLayout = () => {
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: "#D7FBE8",
                    tabBarInactiveTintColor: "#D7FBE8",
                    tabBarStyle: {
                        position: "relative",
                        left: '-1%',
                        paddingTop: "6%",
                        width: '102%',
                        height: "10%",
                        backgroundColor: '#1FAB89',

                    }
                }}>
                <Tabs.Screen
                    name="home"
                    options={{
                        title: 'Home',
                        headerShown: false,
                        tabBarIcon: ({color, focused}) => (
                            <TabIcon
                                icon={icons.home}
                                name="Home"
                                color={color}
                                focused={focused}
                                classNames="ml-4"
                            />

                        )
                    }}
                />
                <Tabs.Screen
                    name="books"
                    options={{
                        title: 'Book',
                        headerShown: false,
                        tabBarIcon: ({color, focused}) => (
                            <TabIcon
                                icon={icons.book}
                                name="Book"
                                color={color}
                                focused={focused}
                                classNames="ml-4"
                            />

                        )
                    }}
                />
                <Tabs.Screen
                    name="community"
                    options={{
                        title: 'Сообщество',
                        headerShown: false,
                        tabBarIcon: ({color, focused}) => (
                            <TabIcon
                                icon={icons.community}
                                name="community"
                                color={color}
                                focused={focused}
                                classNames="ml-4"
                            />

                        )
                    }}
                />
                <Tabs.Screen
                    name="settings"
                    options={{
                        title: 'Настройки',
                        headerShown: false,
                        tabBarIcon: ({color, focused}) => (
                            <TabIcon
                                icon={icons.settings}
                                name="Settings"
                                color={color}
                                focused={focused}
                                classNames="mr-4 "
                            />

                        )
                    }}
                />

            </Tabs>
        </>
    )
}
export default TabsLayout

