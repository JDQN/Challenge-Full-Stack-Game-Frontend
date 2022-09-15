import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { userGoogle } from '../models/user-google.model';
import { AuthProvider, GoogleAuthProvider, User } from 'firebase/auth';
import { JugadoresService } from '../../game/services/jugadores.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private users: Observable<Usuario[]>;

  constructor(
    private ngZone: NgZone,
    private router: Router,
    private afAuth: AngularFireAuth,
    private gamers$: JugadoresService) 
    {}

    
  logout() {
    return this.afAuth.signOut().then((_res) => {
      localStorage.removeItem('user');
      this.ngZone.run(() => {
        this.router.navigate(['']);
      })
    });
  }
  

  get user() {
    return JSON.parse(localStorage.getItem('user')!);
  } 


  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null && user.emailVerified !== false ? true : false;
  }


  async getUserAuth() {
    const userData = await this.afAuth.currentUser;
    return userData;
  }


  SigninWithGoogle(): Promise<void> {
    return this.OAuthProvider(new GoogleAuthProvider())
      .then(res => {
        console.log('successfully logged in!')
      }).catch(error => {
        console.log(error)

      });
  }


  private OAuthProvider(provider: AuthProvider) {
    return this.afAuth.signInWithPopup(provider)
      .then((res) => {

        localStorage.setItem('user', JSON.stringify(res.user));
        JSON.parse(localStorage.getItem('user')!)

        this.gamers$.addGamer(res.user);
        this.ngZone.run(() => {
          //this.router.navigate(['game/new']);//redireccionamiento a el otro componente
          this.router.navigate(['home']);
        })
      }).catch((error) => {
        window.alert(error)
      })
  }

  
  obtenerUsuarioSesion() {
    return JSON.parse(localStorage.getItem('user')!);
  }

  
}
