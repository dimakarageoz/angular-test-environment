import {TimerComponent} from './timer.component';
import {NgModule} from '@angular/core';

@NgModule({
    entryComponents: [
        TimerComponent
    ],
    declarations: [
        TimerComponent
    ],
    exports: [
        TimerComponent
    ]
})
export class TimerModule { }

