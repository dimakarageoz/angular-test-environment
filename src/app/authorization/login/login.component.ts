import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthorizationService} from '../authorization.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    public loginForm = new FormGroup({
        username: new FormControl('', [
            Validators.required,
            Validators.minLength(5)
        ]),
        password: new FormControl('', [
            Validators.required,
            Validators.minLength(8)
        ])
    });

    constructor(
        private authService: AuthorizationService,
        private router: Router
    ) {
        if (this.authService.checkAuthorized()) {
            this.router.navigate(['/app']);
        }
    }

    public login(): void {
        if (this.loginForm.invalid) return;

        this.authService.login(this.loginForm.value);
    }
}
