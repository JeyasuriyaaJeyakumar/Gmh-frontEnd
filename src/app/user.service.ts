import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth} from "@angular/fire/compat/auth";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CanActivate, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { MessageService } from './message.service';
import { User } from './User';


@Injectable({
  providedIn: 'root'
})
export class UserService implements CanActivate {

  userData: any; // Save logged in user data
  defaultProfilePhoto: string = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone, // NgZone service to remove outside scope warning
    private http: HttpClient,
    private messageService: MessageService
  ) {
    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe((user) => {
      console.log("User info available", user);
      this.saveIdToken(user );

      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
}

canActivate():boolean {
  if(this.loggedIn()){
    return true;
  }
  else {
    this.router.navigate(['/login']);
    return false;
  }
}

saveIdToken(firebaseUser: firebase.default.User ){ 
  firebaseUser.getIdToken().then(
    idTokenValue => { 
      localStorage.setItem('userIdToken', idTokenValue);  
      console.log("Id Token value: ", localStorage.getItem('userIdToken'));
    }
    );
}

// Sign in with email/password
  SignIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((value) => {
        console.log('Nice, it worked!', value);
        this.saveIdToken(value.user);
        this.router.navigate(['/albums']);
      })
      .catch((error) => {
        console.log ( 'Something went wrong',error.message);
        this.messageService.newMessage(error.message);
      });
  }
  // Sign up with email/password
  SignUp(email: string, password: string, name: string) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((value) => {
        console.log('Success! sign up! ', value);
        value.user
        console.log('Name in signup = ', name);
        this.registerUser(email,name);
      })
      .catch((error) => {
        console.log('Something went wrong:' ,error.message);
        this.messageService.newMessage(error.message);
      });
  }

  registerUser(email: string, name: string){
    console.log('Name in registration = ', name);
    var user: User = {
      email:	email,
      id:	"",
      name:	name,
      profilePhotoUrl:	this.defaultProfilePhoto,

    }
    return this.http.post(environment.API_BASE_URL + '/api/users', user)
    .subscribe(response =>{
      console.log('Success! registration!');
      this.router.navigate(['albums']);
    })
  }

  //logged in
  loggedIn(){
    return localStorage.getItem('user');
  }
  // Logout
  logOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.clear();
      this.router.navigate(['/login']);
      window.alert('You have been logged out');
    });
  }

  getCurrentUserProfile(){
    var headers = this.getHeaders();
    return this.http.get( environment.API_BASE_URL + '/api/users/find', {headers}); 
  }
  getHeaders(){
    var headers  ={
      'idToken': localStorage.getItem('userIdToken')
    };
    return headers; 
  }
}
