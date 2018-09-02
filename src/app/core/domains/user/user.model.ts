export class User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;

    constructor(params?: any) {
        if (params) {
            Object.assign(this, params);
        }
    }
}
