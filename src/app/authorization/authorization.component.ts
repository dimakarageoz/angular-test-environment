import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthorizationService} from './authorization.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent {
    public startDate = new Date(1990, 0, 1);

    public registrationForm = new FormGroup({
        username: new FormControl('', [
            Validators.minLength(5),
            Validators.required
        ]),
        email: new FormControl('', [
            Validators.required,
            Validators.email
        ]),
        birthday: new FormControl('', [
            Validators.required
        ]),
        password: new FormControl('', [
            Validators.required,
            Validators.minLength(8)
        ]),
        confirm: new FormControl('', [
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

    public registration(): void {
        const password = this.registrationForm.controls['password'];
        const confirm = this.registrationForm.controls['confirm'];

        if (password.value !== confirm.value) {
            confirm.setValue('');
            return;
        }

        this.authService.authorization(this.registrationForm.value);
    }
}
