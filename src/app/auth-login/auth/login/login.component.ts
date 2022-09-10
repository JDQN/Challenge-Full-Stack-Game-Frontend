import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/shared/services/auth.service';


@Component({
  selector: 'app-log-in',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  spin: boolean = true;

  constructor(
    private auth$: AuthService
  ) { }

  ngOnInit(): void {
  }

  btnLogin(): void {
    console.log('login button clicked');
    this.auth$.SigninWithGoogle(); 
  }

}
