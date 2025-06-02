import { IsString } from 'class-validator';

export class SignInDto {
  @IsString()
  token: string; // Яндекс токен, который прислал клиент
}