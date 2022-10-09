import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './models/user.model';
import { UsersService } from './users.service';
import { UsersMutationsResolver } from './resolvers/mutations/users.mutations.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService, UsersMutationsResolver],
  exports: [UsersService],
})
export class UsersModule {}
