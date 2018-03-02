import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

export interface IUserLogin {
    username: string;
    password: string;
}

export interface IUserAuth extends IUserLogin {
    email: string;
}

@Injectable()
export class AuthorizationService {
    private authorized = new BehaviorSubject(false);

    constructor(
        private http: HttpClient,
        private router: Router
    ) { }

    public authorization(value): void {
        localStorage.setItem('user', JSON.stringify(value));
        this.router.navigate(['/app']);
    }

    public login(value): void {
        const user = JSON.parse(localStorage.getItem('user'));

        if (user && user.username === value.username && user.password === value.password) {
            this.router.navigate(['/app']);
        }
    }

    public checkAuthorized(): boolean {
        return this.authorized.value;
    }
}
