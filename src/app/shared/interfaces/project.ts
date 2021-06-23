import { User } from "./user";

export interface Project{
    owner: User;
    collaboration: User[];
    description: String;
    name: String;
    creationDate: Date;
}
