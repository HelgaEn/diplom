import { RolesService } from "./roles.service";

export interface User {
    name: string|null;
    surname: string|null;
    email: string|null;
    password: string|null;
    //role: RolesService['role'];
    role: string|null,
    image?: string|null;
}
