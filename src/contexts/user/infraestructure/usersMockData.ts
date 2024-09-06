import {
    getLocalStorageItem,
    setLocalStorageItem,
} from "@/utils/storage/localStorage";
import { UserRepository } from "../domain/userRepository";
import { UserType } from "../domain/userSchema";
import { convertFromBase64, convertToBase64 } from "@/utils/security/base64";
import { v4 as uuidv4 } from 'uuid';

export const usersMockData = (): UserRepository => {
    return {
        createUser,
    };
};

const createUser = (newUser: UserType) => {
    // Obtener la data del localStorage
    const currentB64Users: string | null = getLocalStorageItem("users");

    // Pasa de b64 a json y de json a objeto
    const userData: { users: UserType[] } = JSON.parse(
        convertFromBase64(currentB64Users || "") || "{}"
    );

    // Revisa si el usuario esta en la lista, si un usuario con el mismo Email está en la lista, lo sobrescribe sin modificar el ID, sino lo agrega como un nuevo registro
    const usersArray = userData?.users || [];
    const existingUserIndex = usersArray.findIndex(user => user.email === newUser.email);

    if (existingUserIndex !== -1) {
        // Update existing user
        usersArray[existingUserIndex] = { ...usersArray[existingUserIndex], ...newUser };
    } else {
        // Add new user with a unique ID
        newUser.id = uuidv4();
        usersArray.push(newUser);
    }

    const data = {
        users: usersArray,
    };

    const newB64Users = convertToBase64(JSON.stringify(data));
    setLocalStorageItem("users", newB64Users);
};
