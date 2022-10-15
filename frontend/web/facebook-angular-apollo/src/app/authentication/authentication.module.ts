import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AuthenticationComponent } from './authentication.component'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [AuthenticationComponent, LoginComponent, RegisterComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class AuthenticationModule {}
