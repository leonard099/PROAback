import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./user.DTO";

@Injectable()
export class UserRepository {
    constructor() {}
    async createUser(body: CreateUserDto) {

    }
}