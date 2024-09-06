import { UserType } from "../domain/userSchema";
import { usersMockData } from "../infraestructure/usersMockData";

const repo = usersMockData();

export const registerUser = (newUser: UserType) => {
    repo.createUser(newUser)
}