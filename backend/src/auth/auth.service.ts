import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import axios from 'axios';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
  ) {
  }

  async signIn(tokenFromYandex: string) {
    const { data } = await axios.get<{ id: string, login: string, default_email: string }>('https://login.yandex.ru/info?format=json', {
      headers: {
        Authorization: `OAuth ${tokenFromYandex}`,
      },
    })

    if (!data) {
      throw new Error('Invalid token');
    }

    let user = await this.prisma.user.findUnique({
      where: { yandexId: data.id },
    });

    if (!user) {
      user = await this.prisma.user.create({
        data: {
          yandexId: data.id,
          name: data.login,
          email: data.default_email,
        },
      });

      await this.prisma.cart.create({
        data: {
          userId: user.id
        }
      })
    }

    const payload = { sub: user.id };
    const accessToken = this.jwtService.sign(payload);
    const refreshToken = this.jwtService.sign(payload, { expiresIn: '7d' });

    return { accessToken: accessToken, refreshToken: refreshToken };
  }

  refresh(refreshToken: string) {
    if (!refreshToken) {
      throw new UnauthorizedException('Refresh token is missing');
    }

    try {
      const payload = this.jwtService.verify(refreshToken);

      const newAccessToken = this.jwtService.sign({ sub: payload.sub });
      const newRefreshToken = this.jwtService.sign({ sub: payload.sub }, { expiresIn: '7d' });

      return { accessToken: newAccessToken, refreshToken: newRefreshToken };
    } catch (error) {
      throw new UnauthorizedException('Refresh token invalid');
    }
  }
}