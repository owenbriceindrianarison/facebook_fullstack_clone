import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  @IsEmail()
  readonly email: string;

  @Field({ nullable: true })
  readonly firstname?: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  readonly lastname: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  readonly password: string;

  @Field({ nullable: true })
  readonly avatar?: string;
}
