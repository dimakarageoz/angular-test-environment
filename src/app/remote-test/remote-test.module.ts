import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RemoteTestComponent} from './remote-test.component';
import {routing} from './remote-test.router';

@NgModule({
    imports: [
        CommonModule,
        routing
    ],

    declarations: [
        RemoteTestComponent
    ]
})
export class RemoteTestModule { }
