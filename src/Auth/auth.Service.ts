import { Injectable } from "@nestjs/common";
import { AuthRepository } from "./auth.Repository";

@Injectable()
export class AuthService {
  constructor(
    private readonly authRepository: AuthRepository,
  ) {}

  async signin(email: string, password: string): Promise<object> {
    return await this.authRepository.signin(email, password);
  }
}