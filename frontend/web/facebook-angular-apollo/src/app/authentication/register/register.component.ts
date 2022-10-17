import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../auth.service'

@Component({
  selector: 'fb-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  @Output() showRegisterEvent = new EventEmitter<boolean>()

  signupForm: FormGroup = new FormGroup({
    firstname: new FormControl(null, Validators.required),
    lastname: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, Validators.required),
  })

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.signupForm)
    const { email, firstname, lastname, password } = this.signupForm.value
    this.authService.createUser({ email, lastname, password, firstname })
  }

  closeRegister() {
    console.log('closeRegister')
    this.showRegisterEvent.emit(false)
  }
}
