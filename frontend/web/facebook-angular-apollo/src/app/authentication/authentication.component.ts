import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'fb-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent implements OnInit {
  showRegister: boolean = false

  constructor() {}

  ngOnInit(): void {}

  toogleRegister(event: boolean) {
    console.log('toogleRegister - event : ', event)
    this.showRegister = event
  }
}
