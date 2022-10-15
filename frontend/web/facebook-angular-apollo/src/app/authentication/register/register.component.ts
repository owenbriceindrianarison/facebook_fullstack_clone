import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'

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

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.signupForm)
  }

  closeRegister() {
    console.log('closeRegister')
    this.showRegisterEvent.emit(false)
  }
}
