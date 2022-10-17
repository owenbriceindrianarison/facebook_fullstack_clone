import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Public } from 'src/auth/current-user.decorator';
import { CreateUserInput } from 'src/users/dto/input/create-user-input.dto';
import { CreateUserOutput } from 'src/users/dto/output/create-user-output.dto';
import { User } from 'src/users/models/user.model';
import { UsersService } from 'src/users/users.service';

@Resolver(User)
export class UsersMutationsResolver {
  constructor(private readonly usersService: UsersService) {}

  @Public()
  @Mutation(() => CreateUserOutput)
  async createUser(@Args('createUserData') createUserData: CreateUserInput) {
    return this.usersService.createUser(createUserData);
  }

  @Query(() => String)
  test() {
    return 'test ok';
  }
}
