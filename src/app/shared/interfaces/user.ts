import { Project } from "./project";

export interface User{
    uname: String;
    email: String;
    fullname: String;
    pswd: String;
    isAdmin: String;
    projectsOwned: Project[];
    projectsParticipants: Project[];
    skills: String;
    strengths: String;
    weaknesses: String;
    recomendations: String;
}