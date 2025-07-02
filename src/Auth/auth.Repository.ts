import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from "src/User/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class AuthRepository {
    @InjectRepository(User) private usersRepository: Repository<User>;
    private jwtService: JwtService;

    constructor(jwtService: JwtService) {
        this.jwtService = jwtService;
    }
async signin(email: string, password: string): Promise<object> {
    const user = await this.usersRepository.findOne({
      where: { email: email },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const validarPass = await bcrypt.compare(password, user.passwordHash);

    if (!validarPass) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { email: user.email, sub: user.id, role: user.rol };

    const token = this.jwtService.sign(payload, {
      expiresIn: '3h',
    });

    return { token: token };
  }
}