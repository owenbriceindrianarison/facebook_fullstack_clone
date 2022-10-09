import {
  Injectable,
  Logger,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/input/create-user-input.dto';
import { CreateUserOutput } from './dto/output/create-user-output.dto';
import { User } from './models/user.model';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(User.name);

  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async createUser(createUserData: CreateUserInput): Promise<CreateUserOutput> {
    const userExists = await this.userRepository.findOneBy({
      email: createUserData.email,
    });
    if (userExists)
      throw new UnprocessableEntityException('Email already exists.');
    const user = this.userRepository.create(createUserData);
    user.password = await bcrypt.hash(createUserData.password, 10);
    await user.save();
    return { user };
  }

  async getUser(email: User['email']) {
    return this.userRepository.findOneByOrFail({ email });
  }
}
