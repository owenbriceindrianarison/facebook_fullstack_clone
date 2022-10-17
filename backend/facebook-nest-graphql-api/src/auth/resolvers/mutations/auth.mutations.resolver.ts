import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from 'src/auth/auth.service';
import { Public } from 'src/auth/current-user.decorator';
import { AuthLoginOutput } from 'src/auth/dto/output/auth-login.dto';
import { LocalAuthGuard } from 'src/auth/guards/local-auth.guard';

@Resolver()
export class AuthMutationsResolver {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Mutation(() => AuthLoginOutput)
  async authLogin(
    @Context('req') req,
    @Args('email') _email: string,
    @Args('password') _password: string,
  ) {
    return this.authService.login(req.user);
  }
}
