"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users = [
    {
        name: "Tharles Amaro",
        email: "tharles@tharles.com"
    },
    {
        name: "Tharles Michaek",
        email: "tharles@tharlesmichael.com"
    }
];
class User {
    static findAll() {
        return Promise.resolve(users);
    }
}
exports.User = User;
