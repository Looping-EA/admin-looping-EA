import { User } from "./user";

export interface Project{
    owners: User[];
    collaboration: User[];
    description: String;
    name: String;
    creationDate: Date;
}