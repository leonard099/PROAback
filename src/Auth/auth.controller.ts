import { Body, Controller, Post } from "@nestjs/common";
import { loginDto } from "./login.DTO";
import { AuthService } from "./auth.Service";

@Controller("auth")
export class AuthController {
    constructor(private readonly authService:AuthService) {}

    @Post('signin')
    async signing(@Body() body:loginDto) {
        const {email, password} = body;
    }
}