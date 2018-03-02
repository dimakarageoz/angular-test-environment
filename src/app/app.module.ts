import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import { AppComponent } from './app.component';
import {CounterService} from './counter.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {TimerModule} from './timer/timer.module';
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
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';


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
                path: 'google_map',
                component: GoogleMapComponent
            },
            {
                path: 'wall',
                component: WallComponent
            }
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
        redirectTo: '/app',
        pathMatch: 'full'
    }
];

@NgModule({
    entryComponents: [
        PositionEditorComponent
    ],
    declarations: [
        AppComponent,
        AuthorizationComponent,
        LoginComponent,
        HomeComponent,
        GoogleMapComponent,
        WallComponent,

        PositionEditorComponent,

        DynamicComponentComponent,
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

        TimerModule,
        PopupModule,
        StepperModule
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
