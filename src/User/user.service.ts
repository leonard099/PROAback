import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./user.DTO";
import { UserRepository } from "./user.reposotpry";

@Injectable()
export class UserService {
  constructor(
    private readonly createUserInRepository:UserRepository,
  ) {}

  async createUser(body: CreateUserDto) {
    return await this.createUserInRepository.createUser(body);
  }
}