import { Field, ObjectType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { AbstractModel } from 'src/common/abstract.model';
import { Column, Entity } from 'typeorm';

@ObjectType()
@Entity()
export class User extends AbstractModel {
  @Field()
  @Column({ unique: true })
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  @IsString()
  firstname?: string;

  @Field()
  @Column()
  @IsString()
  @IsNotEmpty()
  readonly lastname: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  password: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  readonly avatar?: string;
}
