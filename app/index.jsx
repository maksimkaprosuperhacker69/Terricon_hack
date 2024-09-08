import {StatusBar} from 'expo-status-bar';
import {Image,Text} from 'react-native';
import {Redirect, router} from "expo-router";
import {SafeAreaView} from "react-native-safe-area-context";
import {images} from "../constants"
import CustomButton from "../components/CustomButton";
import {useGlobalContext} from "../context/GlobalProvider";


export default function App() {
   const {loading, isLogged} = useGlobalContext();

    if (!loading && isLogged) return <Redirect href="/home"/>;

    return (
        <SafeAreaView className=" items-center  h-full ">
            <Image className="w-30 h-30 mt-20" source={images.logo} resizeMode="contain"/>
                <Text className="font-intro mt-2 text-[25px] text-center   text-main">ДОБРО ПОЖАЛОВАТЬ В ПРИЛОЖЕНИЕ КАРАГАНДИНСКОЙ БИБЛИОТЕКИ ИМ. ГОГОЛЯ
                </Text>
                <CustomButton title="ВХОД"
                              containerStyles='w-3/6 mt-44 bg-main'
                              textStyles='font-intro text-second text-[24px]'
                              handlePress={() => router.push("sign-in")}
                />
            <CustomButton title="РЕГИСТРАЦИЯ"
                          containerStyles='w-4/6 mt-8 bg-main'
                          textStyles='font-intro text-second text-[24px]'
                          handlePress={() => router.push("sign-up")}
            />


        </SafeAreaView>

    );
}

