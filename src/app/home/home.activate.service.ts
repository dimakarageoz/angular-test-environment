import {CanActivate, Router} from '@angular/router';
import {AuthorizationService} from '../authorization/authorization.service';
import {Injectable} from '@angular/core';

@Injectable()
export class HomeActivateService implements CanActivate {
    constructor(
        private router: Router,
        private authService: AuthorizationService
    ) {}

    canActivate(): boolean {
        if (localStorage.getItem('user')) {
            return true;
        }

        this.router.navigate(['/login']);
    }
}
