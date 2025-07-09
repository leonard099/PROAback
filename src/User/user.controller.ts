import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./user.DTO";

@Controller("user")
export class UserController {
    constructor(private readonly userService: UserService) {}
    @Post("create")
    createUser(@Body() body: CreateUserDto) {
        this.userService.createUser(body);
    }
}