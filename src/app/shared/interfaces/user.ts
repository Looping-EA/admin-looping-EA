import { Project } from "./project";

export interface User{
    uname: String;
    email: String;
    pswd: String;
    isAdmin: String;
    projectsOwned: Project[];
    projectsParticipant: Project[];
    skills: String;
    strengths: String;
    weaknesses: String;
    recomendations: String;
}