import { RolesService } from "./roles.service";

export interface User {
    name: string;
    surname: string;
    email: string;
    password: string;
    role: RolesService['role'];
    image?: string;
}
