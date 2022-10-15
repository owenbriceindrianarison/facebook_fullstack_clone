import { Component, EventEmitter, OnInit, Output } from '@angular/core'

@Component({
  selector: 'fb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Output() showRegisterEvent = new EventEmitter<boolean>()

  constructor() {}

  ngOnInit(): void {}

  openRegisterForm() {
    console.log('openRegisterForm')
    this.showRegisterEvent.emit(true)
  }
}
