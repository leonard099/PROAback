import { IsBoolean, IsEmail, IsEnum, IsOptional, IsString, MaxLength } from "class-validator";

export enum UserRole {
    INFECTOLOGO = 'INFECTOLOGO',
    FARMACEUTICO = 'FARMACEUTICO',
    MICROBIOLOGO = 'MICROBIOLOGO',
    MEDICO_TRATANTE = 'MEDICO_TRATANTE',
    ADMIN = 'ADMIN',
  }

  export class CreateUserDto {
    @IsString()
    @MaxLength(100)
    nombre: string;
  
    @IsString()
    @MaxLength(100)
    apellido: string;
  
    @IsEmail()
    @MaxLength(150)
    email: string;
  
    @IsString()
    passwordHash: string;
  
    @IsString()
    @MaxLength(20)
    telefono?: string;
  
    @IsEnum(UserRole)
    rol: UserRole;

    @IsOptional()
    @IsString()
    @MaxLength(100)
    especialidad?: string;
  
    @IsOptional()
    @IsString()
    @MaxLength(50)
    matriculaProfesional?: string;
  
  }