import { Test, TestingModule } from '@nestjs/testing';
import { UsersMutationsResolver } from './users.mutations.resolver';

describe('UsersMutationsResolver', () => {
  let resolver: UsersMutationsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersMutationsResolver],
    }).compile();

    resolver = module.get<UsersMutationsResolver>(UsersMutationsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
