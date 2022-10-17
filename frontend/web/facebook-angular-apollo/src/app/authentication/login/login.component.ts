import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../auth.service'

@Component({
  selector: 'fb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Output() showRegisterEvent = new EventEmitter<boolean>()

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, Validators.required),
  })

  constructor(private readonly authService: AuthService) {}

  ngOnInit(): void {}

  openRegisterForm() {
    console.log('openRegisterForm')
    this.showRegisterEvent.emit(true)
  }

  onSubmit() {
    console.log(this.loginForm)
    const { email, password } = this.loginForm?.value
    this.authService.loginUser(email, password)
  }
}
