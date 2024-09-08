import {Account, Client, Databases, ID, Query, Storage,} from "react-native-appwrite";

export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.jsm.bible_hack'
}

const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint)
    .setProject("66db2b87000a9c193a90")
    .setPlatform(appwriteConfig.platform);

const account = new Account(client);
const databases = new Databases(client);
const storage = new Storage(client);

function getCurrentDate() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const currentDate = new Date();
    const monthIndex = currentDate.getMonth();
    const day = currentDate.getDate();

    const monthName = months[monthIndex];

    const formattedDay = day < 10 ? '0' + day : day;

    return `${monthName} ${formattedDay}`;
}



//- Создаем нового пользователя (Нужно Имя, Фамилия, Email, телефон и пароль)
export async function createUser(email, password, name) {


    try {

        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            name
        );
        console.log(1)


        if (!newAccount) throw Error;


        const newUser = await databases.createDocument(
            "66db2c6700071b130d8a",
            "66db2c790018c14c930b",
            ID.unique(),
            {
                ID: newAccount.$id,
                email: email,
                name: name
            }
        );
        console.log(1)
        await signIn(email, password);
        console.log(2)

        return newUser;
    } catch (error) {
        throw new Error(error);
    }
}



//- Обработка входа. Если человек зарегистрировался, автоматически вызывать эту функцию
export const signIn = async (email, password) => {
    const session = await account.deleteSession("current");

    try {
console.log(99);

        const session = await account.createEmailPasswordSession(email, password)
console.log(100);
        return session;
    } catch (error) {
        throw new Error(error);
    }
}



//- Получение данных аккаунта
export async function getAccount() {
    try {
        const currentAccount = await account.get();

        return currentAccount;
    } catch (error) {
        throw new Error(error);
    }
}

export async function getMyLevel() {
    try {
        const currentAccount = await getAccount();
        if (!currentAccount) throw Error;

        const currentUser = await databases.listDocuments(
            "66db2c6700071b130d8a",
            "66db2c790018c14c930b",
            [Query.equal("ID", currentAccount.$id),
                Query.select(["level"])]
        );

        if (!currentUser) throw Error;


        const level = currentUser.documents[0].level;

        if(level <= 0){
            return "Новичек";
        }
        else if(level <= 1) {
            return "Начинающий";
        }
        else if(level <= 5) {
            return "Читатель";
        }
        else if(level <= 10) {
            return "Книголюб";
        }
        else if(level <= 15) {
            return "Любитель";
        }
        else if(level <= 20) {
            return "Энтузиаст";
        }
        else if(level <= 25) {
            return "Продвинутый";
        }
        else if(level <= 30) {
            return "Книжный червь";
        }
        else if(level <= 40) {
            return "Знаток";
        }
        else if(level <= 50) {
            return "Экспрет";
        }
        else if(level <= 60) {
            return "Магистр";
        }
        else if(level <= 70) {
            return "Аспирант";
        }
        else if(level <= 80) {
            return "Доктор";
        }
        else if(level <= 90) {
            return "Профессионал";
        }
        else if(level <= 100) {
            return "Мастер";
        }
        else if(level <= 120) {
            return "Грандмастер";
        }
        else if(level <= 140) {
            return "Гуру";
        }
        else if(level <= 160) {
            return "Великий чтец";
        }
        else if(level <= 180) {
            return "Легендарный чтец";
        }
        else if(level <= 200) {
            return "Мифический чтец";
        }
        else if(level >= 200) {
            return "Библеотека";
        }

    } catch (error) {
        return null;
    }
}


export async function getCurrentUser() {
    try {
        const currentAccount = await getAccount();
        if (!currentAccount) throw Error;
        console.log("currentAccount", currentAccount);
        const currentUser = await databases.listDocuments(
            "66db2c6700071b130d8a",
            "66db2c790018c14c930b",
            [Query.equal("ID", currentAccount.$id)]
        );

        if (!currentUser) throw Error;

        return currentUser.documents[0];
    } catch (error) {
        return null;
    }
}


//- Выход из аккаунта
export async function signOut() {
    try {
        const session = await account.deleteSession("current");

        return session;
    } catch (error) {
        throw new Error(error);
    }
}












//- Получаем все ивенты
export async function getEvents() {
    try {
        const posts = await databases.listDocuments(
            "66db2c6700071b130d8a",
            "66db3122003224f38ac1",

            [Query.orderDesc("start_time"),
                Query.select(["ID", "title", "type", "start_time", "end_time"])]
        );

        console.log(posts.documents)

        return posts.documents;
    } catch (error) {
        throw new Error(error);
    }
}


//- Получить данные ивентов на которые записаны мы
export async function getMyEvents() {
    const currentAccount = await getAccount();
    try {
        const posts = await databases.listDocuments(
            "66db2c6700071b130d8a",
            "66db2c790018c14c930b",
            [Query.equal("ID", currentAccount.$id),
                Query.select(["events"])]
        );

        console.log(posts.documents);

        return posts.documents;
    } catch (error) {
        throw new Error(error);
    }
}


//- Получить все данные по ивенту
export async function getEventData(eventID) {
    try {
        const posts = await databases.listDocuments(
            "66db2c6700071b130d8a",
            "66db3122003224f38ac1",

            [Query.equal("ID", eventID)]
        );

        console.log(posts.documents);

        return posts.documents[0];
    } catch (error) {
        throw new Error(error);
    }
}












export async function addMyEvent(eventID){
    const currentAccount = await getAccount();
    try {
        // Получаем данные юзера
        const posts = await databases.listDocuments(
            "66db2c6700071b130d8a",
            "66db2c790018c14c930b",
            [Query.equal("ID", currentAccount.$id),
                Query.select(["events"])]
        );

        posts.documents.events.push(eventID);

        const result  = await databases.updateDocument(
            "66db2c6700071b130d8a",
            "66db2c790018c14c930b",
            posts.$id,
            {
                "events": posts.documents.events
            }
        );

    } catch (error) {
        throw new Error(error);
    }
}

export async function deleteMyEvent(eventID){
    const currentAccount = await getAccount();
    try {
        // Получаем данные юзера
        const posts = await databases.listDocuments(
            "66db2c6700071b130d8a",
            "66db2c790018c14c930b",
            [Query.equal("ID", currentAccount.$id),
                Query.select(["events"])]
        );

        posts.documents.events.splice(posts.documents.events.find(n => n == eventID), 1);

        const result  = await databases.updateDocument(
            "66db2c6700071b130d8a",
            "66db2c790018c14c930b",
            posts.$id,
            {
                "events": posts.documents.events
            }
        );

    } catch (error) {
        throw new Error(error);
    }
}










export async function addMeClub(){
    const currentAccount = await getAccount();
    try {
        // Получаем данные юзера
        const posts = await databases.listDocuments(
            "66db2c6700071b130d8a",
            "66db2c790018c14c930b",
            [Query.equal("ID", currentAccount.$id),
                Query.select(["events"])]
        );

        posts.documents.events.push(eventID);

        const result  = await databases.updateDocument(
            "66db2c6700071b130d8a",
            "66db2c790018c14c930b",
            posts.$id,
            {
                "events": posts.documents.events
            }
        );

    } catch (error) {
        throw new Error(error);
    }
}

export async function deleteMeClub(){
    const currentAccount = await getAccount();
    try {
        // Получаем данные юзера
        const posts = await databases.listDocuments(
            "66db2c6700071b130d8a",
            "66db2c790018c14c930b",
            [Query.equal("ID", currentAccount.$id),
                Query.select(["events"])]
        );

        posts.documents.events.splice(posts.documents.events.find(n => n == eventID), 1);

        const result  = await databases.updateDocument(
            "66db2c6700071b130d8a",
            "66db2c790018c14c930b",
            posts.$id,
            {
                "events": posts.documents.events
            }
        );

    } catch (error) {
        throw new Error(error);
    }
}


