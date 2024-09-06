import { UserType } from "./userSchema";

export interface UserRepository {
    createUser: (user: UserType) => void;
}