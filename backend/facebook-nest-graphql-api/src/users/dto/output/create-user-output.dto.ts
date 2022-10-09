import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/users/models/user.model';

@ObjectType()
export class CreateUserOutput {
  @Field(() => User)
  user: User;
}
