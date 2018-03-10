import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import { AppComponent } from './app.component';
import {CounterService} from './counter.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {PopupModule} from './popup/popup.module';
import { AuthorizationComponent } from './authorization/authorization.component';
import { LoginComponent } from './authorization/login/login.component';
import {AuthorizationService} from './authorization/authorization.service';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import {HomeActivateService} from './home/home.activate.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import { GoogleMapComponent } from './google-map/google-map.component';
import { WallComponent } from './wall/wall.component';
import {CommonModule} from '@angular/common';
import {HomeService} from './home/home.service';
import { PositionEditorComponent } from './position-editor/position-editor.component';
import {StepperModule} from './stepper/stepper.module';
import {RemoteTestModule} from './remote-test/remote-test.module';
import {DropdownModule} from './dropdown/dropdown.module';


const routerConfig: Routes = [
    {
        path: 'app',
        canActivate: [HomeActivateService],
        component: HomeComponent,
        children: [
            {
                path: '',
                redirectTo: '/app/wall',
                pathMatch: 'full'
            },
            {
                path: 'popup',
                component: GoogleMapComponent
            },
            {
                path: 'wall',
                component: WallComponent
            },
            // {
            //     path: 'remote',
            //     loadChildren: 'app/remote-test/remote-test.module#RemoteTestModule'
            // }
        ]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'registration',
        component: AuthorizationComponent
    },
    {
        path: '',
        redirectTo: '/app/wall',
        pathMatch: 'full'
    }
];

const entComps = [
    PositionEditorComponent
];

@NgModule({
    entryComponents: entComps,
    declarations: [
        ...entComps,

        AppComponent,
        AuthorizationComponent,
        LoginComponent,
        HomeComponent,
        GoogleMapComponent,
        WallComponent,

    ],
    imports: [
        FormsModule,
        HttpClientModule,
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        CommonModule,
        ReactiveFormsModule,

        RouterModule.forRoot(routerConfig),
        RemoteTestModule,

        PopupModule,
        StepperModule,
        DropdownModule
    ],
    providers: [
        CounterService,
        HomeActivateService,
        HomeService,
        AuthorizationService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
