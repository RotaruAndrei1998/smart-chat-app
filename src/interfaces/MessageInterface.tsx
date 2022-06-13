import {User} from "./UserInterface";

export interface Message {
    from: string;
    timestamp: number;
    message: string;
    messageType: string;
    users: Array<User>;
    isMe: boolean;
}
