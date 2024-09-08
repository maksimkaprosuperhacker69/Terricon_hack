import {Alert, Image, ScrollView, Text, View} from 'react-native'
import React, {useState} from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import {LinearGradient} from "expo-linear-gradient";
import {images} from "../../constants"
import FormField from "../../components/FormField"
import CustomButton from "../../components/CustomButton";
import {Link, router} from "expo-router";
import {getCurrentUser, signIn} from "../../lib/appwrite";
import {useGlobalContext} from "../../context/GlobalProvider";
import {StatusBar} from "expo-status-bar";

const SignIn = () => {

    const {setUser, setIsLogged} = useGlobalContext();
    const [isSubmitting, setSubmitting] = useState(false);
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const submit = async () => {

        router.replace("/home");
        /*
        if (form.email === "" || form.password === "") {
            Alert.alert("Error", "Please fill in all fields");
        }

        setSubmitting(true);

        try {
            await signIn(form.email, form.password);
            const result= await getCurrentUser();

            setUser(result);
            setIsLogged(true);


            router.replace("/home");
        } catch (error) {
            Alert.alert("Error", error.message);
        } finally {
            setSubmitting(false);
        }
         */
    };

    return (
        <SafeAreaView className=" h-full">
                <ScrollView>
                    <View
                        className="w-full flex  min-h-[80vh] px-4 mt-10 "
                    >
                        <View className="w-full items-center flex-row mb-4 justify-center">
                            <Image
                                source={images.logo}
                                resizeMode="contain"
                                className="w-24 h-24"
                            />
                            <Text className=" ml-5 font-intro text-4xl text-main">LIBRARY</Text>
                        </View>
                        <View className="w-full items-center flex-row  justify-center">
                            <Text className="mt-5 mb-10 font-intro text-[38px] text-main ">ВХОД</Text>

                        </View>


                        <FormField placeholder="ПОЧТА"
                                   value={form.email}
                                   handleChangeText={(e) => setForm({...form, email: e})}
                                   otherStyles="mt-5 bg-main"
                                   keyboardType="email-address"
                                   textStyle=""

                        />
                        <FormField placeholder="ПАРОЛЬ"
                                   value={form.password}
                                   handleChangeText={(e) => setForm({...form, password: e})}
                                   otherStyles="mt-5 bg-main"
                                   keyboardType="email-address"
                                   blockStyles="mt-5"
                        />
                        <CustomButton
                            title="Вход"
                            handlePress={submit}
                            containerStyles="mx-20 mt-20 bg-thrid"
                            textStyles="font-intro text-[24px] text-second"
                            isLoading={isSubmitting}
                        />


                        <View className="flex justify-center pt-5 flex-row gap-2">
                            <Text className="text-lg text-third_grad font-patua">
                                Не имеете аккаунта?
                            </Text>
                            <Link
                                href="/sign-up"
                                className="text-lg font-patua text-main "
                            >
                                Регистрация
                            </Link>
                        </View>

                    </View>

                </ScrollView>
            <StatusBar style='light'/>
        </SafeAreaView>

    )
}
export default SignIn




