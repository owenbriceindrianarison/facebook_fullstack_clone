import { Injectable } from '@angular/core'
import {
  AuthLoginGQL,
  CreateUserGQL,
  CreateUserInput,
} from 'src/generated-types'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private readonly createUserGql: CreateUserGQL,
    private readonly authLoginGql: AuthLoginGQL,
  ) {}

  createUser(userData: CreateUserInput) {
    this.createUserGql
      .mutate({ createUserData: userData })
      .subscribe((data) => {
        console.log({ data })
      })
  }

  loginUser(email: string, password: string) {
    this.authLoginGql.mutate({ email, password }).subscribe((data) => {
      console.log({ data })
    })
  }
}
