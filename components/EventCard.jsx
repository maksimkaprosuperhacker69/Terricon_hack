import { Text, TouchableOpacity, View, Platform } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import { usePathname } from 'expo-router';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
    }),
});

const EventCard = ({ date, name, id }) => {
    const pathname = usePathname();
    const [course, setQuery] = useState(id || "");

    useEffect(() => {
        registerForPushNotificationsAsync();

        const notificationListener = Notifications.addNotificationReceivedListener(notification => {
            console.log('Notification received!', notification);
        });

        return () => {
            Notifications.removeNotificationSubscription(notificationListener);
        };
    }, []);

    const triggerNotification = async () => {
        await Notifications.scheduleNotificationAsync({
            content: {
                title: "Событие выбрано!",
                body: `Вы зарегистрировались на событие: ${name}`,
                sound: true,
            },
            trigger: null,
        });
    };

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={triggerNotification}
        >
            <View className="w-[350px] h-[104px] bg-main justify-center items-center rounded-[22px] mb-5" style={{
                shadowColor: '#323131',
                shadowOffset: { width: 0, height: 6 },
                shadowOpacity: 0.7,
                shadowRadius: 1,
            }}>
                <Text className="font-intro text-second text-[18px] mt-2 text-center mb-6">{name}</Text>
            </View>
        </TouchableOpacity>
    );
};


async function registerForPushNotificationsAsync() {
    let token;
    if (Platform.OS === 'ios') {
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;

        if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
        }

        if (finalStatus !== 'granted') {
            alert('Не удалось получить разрешение на уведомления!');
            return;
        }
        await Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            sound: true,
            vibrationPattern: [0, 250, 250, 250],
        });

        token = (await Notifications.getExpoPushTokenAsync()).data;
        console.log('Push token:', token);
    }
}

export default EventCard;
