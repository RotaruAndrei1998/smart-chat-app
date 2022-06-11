import {User} from "./UserInterface";

export interface Message {
    from: string;
    timestamp: Number;
    message: string;
    messageType: string;
    users: Array<User>;
    isMe: boolean;
}
