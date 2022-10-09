import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/models/user.model';
import { JwtService } from '@nestjs/jwt';

export interface JWTPayload {
  id: string;
  email: string;
  firstname?: string;
  lastname: string;
}

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.getUser(email);
    if (user && bcrypt.compare(password, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: User) {
    const payload: JWTPayload = {
      id: user.id,
      email: user.email,
      firstname: user?.firstname || '',
      lastname: user.lastname,
    };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
