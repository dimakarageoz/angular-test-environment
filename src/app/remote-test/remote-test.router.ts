import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RemoteTestComponent} from './remote-test.component';

const router: Routes = [
    {
        path: 'test',
        component: RemoteTestComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(router);
