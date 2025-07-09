import { Module } from "@nestjs/common";
import { User } from "src/User/user.entity";
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.Service";
import { AuthRepository } from "./auth.Repository";

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [AuthController],  
    providers: [AuthService,AuthRepository],
    exports: [AuthService,AuthRepository],
}) 
export class AuthModule {}