import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../../core/services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  login: FormGroup;

  constructor(private formBuilder: FormBuilder, private _auth: AuthenticationService, private router: Router) {
    this.login = this.formBuilder.group(
      {
        username: [null, Validators.required],
        password: [null, Validators.required]
      }
    );
    this.login.valueChanges.subscribe(V => console.log(V));
  }

  checkLogin() {
    if (this.login.value.username === 'savurdic' && this.login.value.password === 'dejan2020') {
      localStorage.setItem('auth', this.login.value.password);
      console.log('Ispravni podatci');
      this.router.navigate(['admin']);
    } else {
      alert('Netacni podatci');
    }
  }
}
